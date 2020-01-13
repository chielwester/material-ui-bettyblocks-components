(() => ({
  name: 'TextInput',
  category: 'FORM',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      name,
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
    } = options;
    const isDev = B.env === 'dev';
    const [value, setValue] = useState(text && text.length ? text : undefined);

    const { TextField } = window.MaterialUI.Core;

    const textField = (
      <TextField
        className={classes.textField}
        value={value}
        size={size}
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        type={type}
        onChange={event => setValue(event.target.value)}
        inputProps={{ name }}
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
      <div className={classes.textField}>{textField}</div>
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
