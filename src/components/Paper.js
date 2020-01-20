(() => ({
  name: 'Paper',
  type: 'PAPER',
  allowedTypes: [
    'ACCORDION',
    'ALERT',
    'BREADCRUMBS',
    'BOX',
    'BUTTON',
    'APP_BAR',
    'CARD',
    'CHIP',
    'DIVIDER',
    'DRAWER',
    'FORM',
    'IMAGE',
    'LIST',
    'TOOLTIP',
    'PAGE_BODY',
    'PAPER',
    'PROGRESS',
    'SNACKBAR',
    'STEPPER',
    'TABLE',
    'TABS',
    'TEXT',
    'ROW',
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Paper } = window.MaterialUI.Core;
    const { elevation, variant, square } = options;
    const isDev = B.env === 'dev';
    const isPristine = !children.length && isDev;
    const paper = (
      <Paper
        className={[
          isPristine ? classes.pristine : '',
          isDev ? classes.dev : '',
        ].join(' ')}
        variant={variant}
        elevation={elevation}
        square={square}
      >
        {children}
      </Paper>
    );
    return isDev ? <div>{paper}</div> : paper;
  })(),
  styles: () => () => ({
    dev: {
      paddingBottom: '10px',
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
      height: '100px',
    },
  }),
}))();
