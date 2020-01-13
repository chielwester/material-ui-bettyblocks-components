(() => ({
  name: 'LinearProgress',
  type: 'PROGRESS',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { LinearProgress } = window.MaterialUI.Core;
    const { color } = options;
    const isDev = B.env === 'dev';
    return (
      <div className={classes.root}>
        {<LinearProgress color={color}></LinearProgress>}
      </div>
    );
  })(),
  styles: B => theme => {
    return {
      root: {
        width: '100%',
        '& > * + *': {
          // marginRight: theme.spacing(2),
        },
      },
    };
  },
}))();
