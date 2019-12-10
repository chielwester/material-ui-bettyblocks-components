(() => ({
  name: 'DatePicker',
  type: 'DATE_PICKER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;
    const isEmpty = children.length === 0;
		const { handleChange } = options;
		const [selectedDate, setSelectedDate] = useState(new Date());
		const currentValue = B.env === 'prod' ? useText(options.defaultValue) : options.defaultValue.join(' ');
	  const handleDateChange = date => {
			setSelectedDate(date);
	  };
		return <div>
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
		</div>
  })(),
  styles: B => ({ typography }) => ({
  }),
}))();
