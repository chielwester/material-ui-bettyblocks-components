(() => ({
  name: 'Drawer',
  type: 'DRAWER',
  allowedTypes: [
    'ACCORDION',
    'BOX',
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
    'PAPER',
    'PROGRESS',
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
    const { Drawer } = window.MaterialUI.Core;
    const { anchor, variant, open } = options;
    const isDev = B.env === 'dev';
    const drawer = (
      <Drawer
        variant={variant}
        anchor={anchor}
        open={open}
        className={['drawer', classes.drawer, isDev ? classes.dev : ''].join(
          ' ',
        )}
      >
        {children.length ? children : 'Drawer'}
      </Drawer>
    );
    return isDev ? <div>{drawer}</div> : drawer;
  })(),
  styles: () => () => ({
    dev: {
      '& .MuiPaper-root': {
        position: 'static', // :-(
      },
      minHeight: '100px',
    },
  }),
}))();
