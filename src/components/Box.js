(() => ({
  name: 'Box',
  type: 'BOX',
  allowedTypes: [
    'ACCORDION',
    'ALERT',
    'BREADCRUMBS',
    'BUTTON',
    'BOX',
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
    'DROPZONE',
    'LINK',
    'SWITCH',
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Box } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const isPristine = !children.length && isDev;
    const toSpaceProp = value => {
      if (!value || !value.length) return false;
      return isNaN(value) ? value : +value;
    };
    const spacingProps = Object.keys(options).reduce((map, option) => {
      const value = toSpaceProp(options[option]);
      return value === false ? map : Object.assign(map, { [option]: value });
    }, {});
    const box = (
      <Box
        className={[
          isPristine ? classes.pristine : '',
          isDev ? classes.dev : '',
        ].join(' ')}
        {...spacingProps}
      >
        {children}
      </Box>
    );
    return isDev ? <div>{box}</div> : box;
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
