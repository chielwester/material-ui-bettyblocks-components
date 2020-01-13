(() => ({
  name: 'Alert',
  type: 'ALERT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Alert } = window.MaterialUI.Lab;
    const { severity, variant, message } = options;
    // const isDev = B.env === 'dev';

    return (
      <div className={classes.root}>
        <Alert severity={severity} variant={variant}>
          {message}
        </Alert>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      width: '100%',
    },
  }),
}))();
