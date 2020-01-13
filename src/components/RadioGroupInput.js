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
      // error,
      helperText,
      selectOptions,
    } = options;
    const isDev = B.env === 'dev';
    const [value, setValue] = useState(text && text.length ? text : undefined);
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
        value={value}
        name={name}
        onChange={event => setValue(event.target.value)}
        helperText={helperText}
      >
        {(selectOptions || '').split('\n').map(option => (
          <FormControlLabel
            disabled={disabled}
            value={option}
            control={<Radio color={color} />}
            label={option}
          />
        ))}
      </RadioGroup>
    );

    const formControl = (
      <FormControl className={classes.radioButtonGroup} component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        {radiogroup}
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );

    return isDev ? <div className={classes.radioButtonGroup}>{formControl}</div> : formControl;
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
