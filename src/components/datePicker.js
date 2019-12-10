(() => ({
  name: 'DatePicker',
  type: 'DATE_PICKER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;
    const isEmpty = children.length === 0;
		const { handleChange } = options;
		const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
		const currentValue = B.env === 'prod' ? useText(options.defaultValue) : options.defaultValue.join(' ');
	  const handleDateChange = date => {
			setSelectedDate(date);
	  };
		return <div>
		 <MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Date picker inline"
					onChange={handleDateChange}
					value={selectedDate}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
		</div>
  })(),
  styles: B => ({ typography }) => ({
  }),
}))();
