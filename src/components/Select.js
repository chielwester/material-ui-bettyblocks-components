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
      hasError,
      margin,
      helperText,
      selectOptions,
      model,
      optionType,
      property,
    } = options;
    const isDev = B.env === 'dev';
    const { GetAll, getProperty } = B;
    const [value, setValue] = useState(text && text.length ? text : undefined);
    const { TextField, MenuItem } = window.MaterialUI.Core;
    const labelProperty = getProperty(property);

    const selectField =
      optionType === 'static' ? (
        <TextField
          select
          value={value}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          onChange={event => setValue(event.target.value)}
          inputProps={{ name }}
          required={required}
          disabled={disabled}
          label={label}
          error={hasError}
          margin={margin}
          helperText={helperText}
        >
          {(selectOptions || '').split('\n').map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <GetAll modelId={model} skip={0} take={50}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (error) {
              return <span>Something went wrong: {error.message} :(</span>;
            }

            const { results } = data;
            return (
              <TextField
                select
                value={value}
                size={size}
                variant={variant}
                fullWidth={fullWidth}
                onChange={event => setValue(event.target.value)}
                inputProps={{ name }}
                required={required}
                disabled={disabled}
                label={label}
                error={hasError}
                margin={margin}
                helperText={helperText}
              >
                {results.map(item => (
                  <MenuItem key={item.id} value={item.id}>
                    {item[labelProperty.name]}
                  </MenuItem>
                ))}
              </TextField>
            );
          }}
        </GetAll>
      );

    return isDev ? (
      <div className={classes.selectField}>{selectField}</div>
    ) : (
      selectField
    );
  })(),
  styles: () => () => {},
}))();
