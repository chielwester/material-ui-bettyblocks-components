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
      actionInputId
    } = options;
    const isDev = B.env === 'dev';
    const { GetAll, getProperty, getActionInput } = B;
    const actionInput = getActionInput(actionInputId);
    const [currentValue, setCurrentValue] = useState();
    const value = actionInput ? parent.state[actionInput.name] : currentValue;
    const { TextField, MenuItem } = window.MaterialUI.Core;
    const labelProperty = getProperty(property);

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


    const selectField =
      optionType === 'static' ? (
        <TextField
          select
          value={value}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          onChange={handleChange}
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
                onChange={handleChange}
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
