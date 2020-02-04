(() => ({
  name: 'Switch',
  type: 'SWITCH',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { FormGroup, FormControlLabel, Switch } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';

    const { label, disabled, checked, color, required, size, edge } = options;

    const [state, setState] = useState({
      checkedA: checked,
    });

    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };

    const switchTemplate = (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              disabled={disabled}
              checked={state.checkedA}
              color={color}
              required={required}
              size={size}
              edge={edge}
              onChange={handleChange('checkedA')}
              value="checkedA"
            />
          }
          label={label}
        />
      </FormGroup>
    );
    return isDev ? <div>{switchTemplate}</div> : switchTemplate;
  })(),
  styles: () => () => ({}),
}))();
