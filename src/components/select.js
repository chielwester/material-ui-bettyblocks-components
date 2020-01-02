(() => ({
  name: 'Select',
  type: 'DROPDOWN',
  allowedTypes: ['TABLE', 'FORM', 'TEXT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env} = B;
    const isEmpty = children.length === 0;
		const {handleValueChange, handleChange} = options;
    const isPristine = isEmpty && B.env === 'dev';
		if(env === 'prod') {

		}

		const handleSelectChange = event => {

			if(handleChange) {
				handleChange(event);
			}
		}

		return <div>
			<FormControl
				className={classes.formControl}
				variant={options.variant}
				{...(options.fullwidth ? {fullWidth: true}: {})}
				margin={options.margin}
				>
			  <InputLabel id="demo-simple-select-label">{options.label}</InputLabel>
			  <Select
			    labelId="demo-simple-select-label"
			    id="demo-simple-select"
			    defaultValue={options.defaultValue}

					name={options.formComponentName}
					onChange={handleSelectChange}

			  >
					{(() => {
						if(options.blancooption) {
							return (<MenuItem value="">
		            <em>{options.blancolabel}</em>
		          </MenuItem>)
						}
					})()}
			    <MenuItem value={10}>Ten</MenuItem>
			    <MenuItem value={20}>Twenty</MenuItem>
			    <MenuItem value={30}>Thirty</MenuItem>
			  </Select>
			</FormControl>
		</div>
  })(),
  styles: B => ({ typography }) => ({
    root: {

    },
    empty: {
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: ({ options: { rowHeight } }) => (rowHeight ? 0 : '4rem'),
      height: '100%',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
    },
  }),
}))();
