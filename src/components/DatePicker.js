(() => ({
  name: 'DatePicker',
  type: 'DATE_PICKER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;
    const isEmpty = children.length === 0;

		const {DateFnsUtils} = window.MaterialUI;
		const {MuiPickersUtilsProvider, KeyboardDatePicker} = window.MaterialUI.Pickers;
		const currentValue = B.env === 'prod' ? useText(options.defaultValue) : options.defaultValue.join(' ');
		const [selectedDate, setSelectedDate] = new Date(null);

	  const handleDateChange = date => {
			setSelectedDate(date);
			if(options.handleValueChange) {
				options.handleValueChange({name: options.formComponentName, value: date.toJSON()});
			}
	  };

		const datepicker = (
		  <MuiPickersUtilsProvider utils={DateFnsUtils}>
			  <KeyboardDatePicker
					name={options.formComponentName}
					{...(options.disableToolbar ? {disableToolbar: true}: {})}
					{...(options.fullwidth ? {fullWidth: true}: {})}
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
  styles: B => ({ typography }) => ({
  }),
}))();
