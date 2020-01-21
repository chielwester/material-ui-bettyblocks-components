(() => ({
  name: 'HorizontalDivider',
  type: 'DIVIDER',
  allowedTypes: ['ROW'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Divider } = window.MaterialUI.Core;
    const { light, variant } = options;
    const isDev = B.env === 'dev';
    const divider = (
      <Divider
        light={light}
        className={classes.root}
        variant={variant}
        orientation="horizontal"
      ></Divider>
    );
    return isDev ? <div className={classes.dev}>{divider}</div> : divider;
  })(),
  styles: () => () => ({
    root: {
      height: ({ options: { height } }) => height,
    },
    dev: {
      '& hr': {
        height: ({ options: { height } }) => height,
      },
    },
  }),
}))();
