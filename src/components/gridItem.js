(() => ({
  name: 'GridItem',
  type: 'GRIDITEM',
  allowedTypes: ['TABLE', 'FORM', 'TEXT', 'DROPDOWN'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isEmpty = children.length === 0;

    const isPristine = isEmpty && B.env === 'dev';

		return <div><Grid item xs={options.xssize} sm={options.xssize}>
			<FormControl className={classes.formControl}>
			  <InputLabel id="demo-simple-select-label">Age</InputLabel>
			  <Select
			    labelId="demo-simple-select-label"
			    id="demo-simple-select"
			    value={10}
			  >
			    <MenuItem value={10}>Ten</MenuItem>
			    <MenuItem value={20}>Twenty</MenuItem>
			    <MenuItem value={30}>Thirty</MenuItem>
			  </Select>
			</FormControl>
		</Grid></div>
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
