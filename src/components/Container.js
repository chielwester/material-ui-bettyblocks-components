(() => ({
  name: 'Container',
  type: 'PAGE_BODY',
  allowedTypes: [
    'ACCORDION',
    'ALERT',
    'BOX',
    'BREADCRUMBS',
    'BUTTON',
    'APP_BAR',
    'CARD',
    'CHIP',
    // 'DATACONTAINER',
    // 'DATALIST',
    // 'DATATABLE',
    'DIVIDER',
    'DRAWER',
    'FORM',
    'IMAGE',
    'LIST',
    'TOOLTIP',
    // 'PARTIAL',
    // 'PANEL',
    'PAPER',
    'PROGRESS',
    'ROW',
    'SNACKBAR',
    'STEPPER',
    'TABLE',
    'TABS',
    'TEXT',
    'LINK',
    'SWITCH',
    // 'BODY_COMPONENT',
    // 'CONTAINER_COMPONENT',
    // 'CONTENT_COMPONENT',
  ],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Container, CssBaseline } = window.MaterialUI.Core;
    const { disableGutters, fixed, maxWidth } = options;
    const isDev = B.env === 'dev';
    const isPristine = !children.length && isDev;
    const container = (
      <Container
        className={[
          isPristine ? classes.pristine : '',
          isDev ? classes.dev : '',
        ].join(' ')}
        disableGutters={disableGutters}
        fixed={fixed}
        maxWidth={maxWidth === 'none' ? false : maxWidth}
      >
        <CssBaseline />
        {children}
      </Container>
    );
    return isDev ? <div>{container}</div> : container;
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
