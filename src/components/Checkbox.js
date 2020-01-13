(() => ({
  name: 'Checkbox',
  category: 'FORM',
  type: 'CHECKBOX',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      name,
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

    const checkbox = (
      <Checkbox
        checked={value}
        color={color}
        size={size}
        onChange={event => setValue(event.target.checked)}
        inputProps={{ name }}
        disabled={disabled}
      />
    );

    const control = (
      <FormControl
        className={classes.checkbox}
        margin={margin}
        required={required}
        error={error}
      >
        <FormControlLabel control={checkbox} label={label} />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
    return isDev ? <div className={classes.checkbox}>{control}</div> : control;
  })(),
  styles: B => t => {
    return {
      checkbox: {
        width: '200px',
        margin: '8px',
      },
    };
  },
}))();
