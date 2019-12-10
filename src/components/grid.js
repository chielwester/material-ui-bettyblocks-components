(() => ({
  name: 'Grid',
  type: 'ROW',
  allowedTypes: ['GRIDITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isEmpty = children.length === 0;

    const isPristine = isEmpty && B.env === 'dev';

		return <div className={[classes.root, isEmpty ? classes.empty : '', isPristine ? classes.pristine : ''].join(' ')}><Grid container spacing={3}>{children.length > 0 ? children : 'GRID' }</Grid></div>
  })(),
  styles: B => ({ typography }) => ({
    root: {
			flexGrow: 1
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
