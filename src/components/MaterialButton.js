(() => ({
  name: 'MaterialButton',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {
			linkType,
			linkTo,
			linkToExternal
		} = options;
  	return (<div className={classes.root}>
			{(() => {
				if(linkType === 'External') {
					return <Button color="inherit" href={linkToExternal}><B.Text value={options.buttonText} /></Button>
				} else {
					return <Button color="inherit" component={B.Link} endpointId={options.linkTo}><B.Text value={options.buttonText} /></Button>
				}
			})()}
		</div>)
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
