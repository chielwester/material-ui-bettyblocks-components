(() => ({
  name: 'SelectInput',
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
      text,
      variant,
      type,
      size,
      fullWidth,
      error,
      margin,
      helperText,
      selectOptions,
    } = options;
    const isDev = B.env === 'dev';
    const [value, setValue] = useState(text && text.length ? text : undefined);
    const { TextField, MenuItem } = window.MaterialUI.Core;
    const selectField = (
      <TextField
        select
        className={classes.selectField}
        value={value}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onChange={event => setValue(event.target.value)}
        inputProps={{ name }}
        required={required}
        disabled={disabled}
        label={label}
        error={error}
        margin={margin}
        helperText={helperText}
      >
        {(selectOptions || '').split('\n').map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );

    return isDev ? (
      <div className={classes.selectField}>{selectField}</div>
    ) : (
      selectField
    );
  })(),
  styles: () => () => {
    return {
      selectField: {
        width: '200px',
        margin: '8px'
      },
    };
  },
}))();
