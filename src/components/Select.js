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
      model,
      dataOptions,
      property,
    } = options;
    const isDev = B.env === 'dev';
    const { GetAll, getProperty } = B;
    const [value, setValue] = useState(text && text.length ? text : undefined);
    const { TextField, MenuItem } = window.MaterialUI.Core;
    const labelProperty = getProperty(property);

    const selectField = (
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
        error={error}
        margin={margin}
        helperText={helperText}
      >
        {!dataOptions ? (
          (selectOptions || '').split('\n').map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        ) : (
          <GetAll modelId={model} skip={0} take={15}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return <span>Loading...</span>;
              }

              if (error) {
                return <span>Something went wrong: {error.message} :(</span>;
              }

              const { results } = data;

              return results.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item[labelProperty.name]}
                </MenuItem>
              ));
            }}
          </GetAll>
        )}
      </TextField>
    );

    return isDev ? (
      <div className={classes.selectField}>{selectField}</div>
    ) : (
      selectField
    );
  })(),
  styles: () => () => {},
}))();
