(() => ({
  name: 'Tab',
  type: 'TAB',
  allowedTypes: ['BOX', 'PAPER'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Box } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const box = <Box>{children}</Box>;
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
