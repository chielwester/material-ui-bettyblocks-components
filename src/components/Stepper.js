(() => ({
  name: 'Stepper',
  type: 'STEPPER',
  allowedTypes: ['STEP'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Stepper } = window.MaterialUI.Core;
    const { activeStep } = options;
    const isDev = B.env === 'dev';
    return (
      <div className={classes.root}>
        <Stepper>{children}</Stepper>
      </div>
    );
  })(),
  styles: () => () => ({ root: { width: '100%' } }),
}))();
