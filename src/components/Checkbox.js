(() => ({
  name: 'Checkbox',
  type: 'CHECKBOX',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      formComponentName,
      color,
      disabled,
      checked,
      size,
      error,
      required,
      margin,
      helperText,
    } = options;
    const isDev = B.env === 'dev';
    const [value, setValue] = useState(checked);

    const {
      Checkbox,
      FormControlLabel,
      FormControl,
      FormHelperText,
    } = window.MaterialUI.Core;

		const handleChange = (event) => {
			setValue(event.target.checked);
			if(options.handleValueChange) {
				options.handleValueChange({name: formComponentName, value: event.target.checked})
			}
		}

    const checkbox = (
      <Checkbox
        checked={value}
        color={color}
        size={size}
        onChange={handleChange}
				name={formComponentName}
        disabled={disabled}
      />
    );

    const control = (
      <FormControl
        margin={margin}
        required={required}
        error={error}
				className={classes.checkbox}
      >
        <FormControlLabel control={checkbox} label={label} />
        {helperText != '' ? <FormHelperText>{helperText}</FormHelperText> : ''}
      </FormControl>
    );
    return isDev ? <div>{control}</div> : control;
  })(),
  styles: B => t => {
    return {
      checkbox: {
				display: 'block'
      },
    };
  },
}))();
