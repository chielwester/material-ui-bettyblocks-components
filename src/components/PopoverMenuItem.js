(() => ({
  name: 'PopoverMenuItem',
  type: 'POPOVERMENUITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { MenuItem, Link } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const { label, linkType, linkToExternal, color } = options;

    const link =
      linkType === 'External' ? (
        <Link
          color={color}
          underline="none"
          href={linkToExternal}
          style={{ color: 'inherit' }}
          className={classes.root}
        >
          {label}
        </Link>
      ) : (
        <Link
          color={color}
          underline="none"
          component={B.Link}
          endpoint={options.linkTo}
          className={classes.root}
        >
          {label}
        </Link>
      );

    const menuItem = <MenuItem onClick={parent.handleClose}>{link}</MenuItem>;

    return isDev ? <div>{menuItem}</div> : menuItem;
  })(),
  styles: () => () => ({
    root: {
      '&:visited': {
        color: ({ options: { color } }) =>
          color === 'default' ? 'inherit' : '',
      },
    },
  }),
}))();
