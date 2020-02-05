(() => ({
  name: 'RadioGroupInput',
  category: 'FORM',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      name,
      // required,
      disabled,
      color,
      text,
      row,
      // error,
      helperText,
      selectOptions,
      model,
      optionType,
      property,
    } = options;
    const isDev = B.env === 'dev';
    const { GetAll, getProperty } = B;
    const [value, setValue] = useState(text && text.length ? text : undefined);
    const labelProperty = getProperty(property);
    const {
      FormControl,
      RadioGroup,
      FormControlLabel,
      FormHelperText,
      FormLabel,
      Radio,
    } = window.MaterialUI.Core;
    const radiogroup = (
      <RadioGroup
        row={row}
        value={value}
        name={name}
        onChange={event => setValue(event.target.value)}
        helperText={helperText}
      >
        {optionType === 'static' ? (
          (selectOptions || '')
            .split('\n')
            .map(option => (
              <FormControlLabel
                disabled={disabled}
                value={option}
                control={<Radio color={color} />}
                label={option}
              />
            ))
        ) : !isDev ? (
          <GetAll modelId={model} skip={0} take={15}>
            {({ loading, error, data }) => {
              if (loading) {
                return <span>Loading...</span>;
              }

              if (error) {
                return <span>Something went wrong: {error.message} :(</span>;
              }

              const { results } = data;

              return results.map(item => (
                <FormControlLabel
                  disabled={disabled}
                  value={item.id}
                  control={<Radio color={color} />}
                  label={item[labelProperty.name]}
                />
              ));
            }}
          </GetAll>
        ) : (
          <>
            <FormControlLabel
              disabled={disabled}
              value="placeholder1"
              control={<Radio color={color} />}
              label="Placeholder"
            />
            <FormControlLabel
              disabled={disabled}
              value="placeholder2"
              control={<Radio color={color} />}
              label="Placeholder"
            />
          </>
        )}
      </RadioGroup>
    );

    const formControl = (
      <FormControl className={classes.radioButtonGroup} component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        {radiogroup}
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );

    return isDev ? (
      <div className={classes.radioButtonGroup}>{formControl}</div>
    ) : (
      formControl
    );
  })(),
  styles: B => t => {
    return {
      radioButtonGroup: {
        width: '200px',
        margin: '8px',
      },
    };
  },
}))();
