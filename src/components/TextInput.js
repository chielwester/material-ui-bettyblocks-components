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
      actionInputId
    } = options;
    const isDev = B.env === 'dev';
    const {getActionInput} = B;
    const actionInput = getActionInput(actionInputId);
    const [currentValue, setCurrentValue] = useState();
    const value = actionInput ? parent.state[actionInput.name] : currentValue;

    const { TextField } = window.MaterialUI.Core;
		const handleChange = (event) => {
      const { target: {value: eventValue }} = event;

      // setValue(event.target.value);
      if(actionInput) {
        parent.setState({
          ...parent.state,
          [actionInput.name]: eventValue
        });
      } else {
        setCurrentValue(eventValue);
      }


			if(options.handleValueChange) {
				options.handleValueChange({name: formComponentName, value: event.target.value})
			}
		}
    const textField = (
      <TextField
				name={formComponentName}
        value={value}
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

    return isDev ? (
      <div >{textField}</div>
    ) : (
      textField
    );
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
