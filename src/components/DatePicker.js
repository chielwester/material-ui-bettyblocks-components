(() => ({
  name: 'DatePicker',
  type: 'DATE_PICKER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, getActionInput } = B;
    const { DateFnsUtils } = window.MaterialUI;
    const { actionInputId } = options;
    const actionInput = getActionInput(actionInputId);
    const {
      MuiPickersUtilsProvider,
      KeyboardDatePicker,
    } = window.MaterialUI.Pickers;

    const [selectedDate, setSelectedDate] = useState(new Date());
    const value = actionInput ? (parent.state[actionInput.name] ? new Date(parent.state[actionInput.name]) : new Date()) : selectedDate;

    const handleDateChange = date => {
      if (actionInput) {
        parent.setState({
          ...parent.state,
          [actionInput.name]: date.toJSON(),
        });
      } else {
        setSelectedDate(date);
      }

      if (options.handleValueChange) {
        options.handleValueChange({
          name: options.formComponentName,
          value: date.toJSON(),
        });
      }
    };

    useEffect(() => {
      if (options.handleValueChange) {
        options.handleValueChange({
          name: options.formComponentName,
          value: selectedDate.toJSON(),
        });
      }
    }, []);

    const datepicker = (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name={options.name}
          {...(options.disableToolbar ? { disableToolbar: true } : {})}
          {...(options.fullwidth ? { fullWidth: true } : {})}
          variant={options.variant}
          margin={options.margin}
          format={options.dateformat}
          label={options.label}
          onChange={handleDateChange}
          value={value}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );

    return env === 'prod' ? datepicker : <div>{datepicker}</div>;
  })(),
  styles: () => () => ({}),
}))();
