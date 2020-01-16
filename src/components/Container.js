(() => ({
  name: 'Container',
  type: 'PAGE_BODY',
  allowedTypes: [
    'ACCORDION',
    'ALERT',
    'BREADCRUMBS',
    'BUTTON',
    'APP_BAR',
    'CARD',
    'CHIP',
    // 'DATACONTAINER',
    // 'DATALIST',
    // 'DATATABLE',
    'DIVIDER',
    'FORM',
    'IMAGE',
    'LIST',
    'TOOLTIP',
    // 'PARTIAL',
    // 'PANEL',
    'PROGRESS',
    'SNACKBAR',
    'STEPPER',
    'TABLE',
    'TABS',
    'TEXT',
    // 'BODY_COMPONENT',
    // 'CONTAINER_COMPONENT',
    // 'CONTENT_COMPONENT',
  ],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Container } = window.MaterialUI.Core;
    const { disableGutters, fixed } = options;
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
      >
        {children}
      </Container>
    );
    return isDev ? <div>{container}</div> : container;
  })(),
  styles: () => () => {
    return {
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
    };
  },
}))();
