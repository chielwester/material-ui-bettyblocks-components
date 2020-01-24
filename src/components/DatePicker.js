(() => ({
  name: 'DatePicker',
  type: 'DATE_PICKER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const { DateFnsUtils } = window.MaterialUI;
    const {
      MuiPickersUtilsProvider,
      KeyboardDatePicker,
    } = window.MaterialUI.Pickers;
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
      if (options.handleValueChange) {
        options.handleValueChange({
          name: options.formComponentName,
          value: date.toJSON(),
        });
      }
    };

    useEffect(() => {
      if(options.handleValueChange) {
        options.handleValueChange({
          name: options.formComponentName,
          value: selectedDate.toJSON(),
        });
      }
    }, [])

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
          value={selectedDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );

    return env == 'prod' ? datepicker : <div>{datepicker}</div>;
  })(),
  styles: B => ({ typography }) => ({}),
}))();
