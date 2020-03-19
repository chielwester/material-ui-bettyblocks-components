(() => ({
  name: 'TextInput',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      text,
      formComponentType,
      actionInputId,
      handleChange,
      ...otherOptions
    } = options;

    const isDev = B.env === 'dev';
    const { getActionInput, useText } = B;
    const { TextField, InputAdornment } = window.MaterialUI.Core;
    const [currentValue, setCurrentValue] = isDev
      ? useState(text.join(' '))
      : useState(useText(text));
    const actionInput = getActionInput(actionInputId);
    const value =
      actionInput && parent.state[actionInput.name]
        ? parent.state[actionInput.name]
        : currentValue;
    const textField = (
      <TextField
        type={formComponentType}
        value={
          isDev
            ? text
                .map(textitem => (textitem.name ? textitem.name : textitem))
                .join(' ')
            : value
        }
        onChange={event => {
          const {
            target: { value: eventValue },
          } = event;
          if (handleChange) {
            handleChange(event);
          }
          if (actionInput) {
            parent.setState({
              ...parent.state,
              [actionInput.name]: eventValue,
            });
            parent.handleInputValue({ name: actionInput.name, value: eventValue });
          } else {
            setCurrentValue(eventValue);
          }
        }}
        {...otherOptions}
      />
    );

    return isDev ? <div>{textField}</div> : textField;
  })(),
  styles: B => t => {},
}))();
