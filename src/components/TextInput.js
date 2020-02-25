(() => ({
  name: 'TextInput',
  category: 'FORM',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      formComponentName,
      required,
      disabled,
      multiline,
      placeholder,
      text,
      variant,
      type,
      size,
      fullWidth,
      error,
      margin,
      helperText,
      actionInputId,
    } = options;
    const isDev = B.env === 'dev';
    const { getActionInput, useText } = B;
    const actionInput = getActionInput(actionInputId);
    const [currentValue, setCurrentValue] = B.env === 'dev' ? useState(text.join(' ')) : useState(useText(text));
    const value = actionInput && parent.state[actionInput.name] ? parent.state[actionInput.name] : currentValue;

    const { TextField } = window.MaterialUI.Core;
    const handleChange = event => {
      const {
        target: { value: eventValue },
      } = event;

      if (actionInput) {
        parent.handleInputValue({name: actionInput.name, value: eventValue});
      } else {
        setCurrentValue(eventValue);
      }

      if (options.handleValueChange) {
        options.handleValueChange({
          name: formComponentName,
          value: event.target.value,
        });
      }
    };

    useEffect(() => {
      if(actionInput && currentValue && currentValue != parent.state[actionInput.name]) {
        parent.handleInputValue({name: actionInput.name, value: currentValue});
      }
    }, []);

    const textField = (
      <TextField
        name={formComponentName}
        value={B.env === 'dev' ? text.map(textitem => textitem.name ? textitem.name : textitem).join(' ') : value}
        size={size}
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        type={type}
        onChange={handleChange}
        inputProps={{ formComponentName }}
        required={required}
        disabled={disabled}
        multiline={multiline}
        label={label}
        error={error}
        margin={margin}
        helperText={helperText}
      />
    );

    return isDev ? <div>{textField}</div> : textField;
  })(),
  styles: () => () => {
    return {
      textField: {
        width: '200px',
        margin: '8px',
      },
    };
  },
}))();
