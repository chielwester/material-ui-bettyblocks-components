(() => ({
  name: 'Link',
  type: 'LINK',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Link } = window.MaterialUI.Core;
    const { linkType, linkTo, linkToExternal, color } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Link color={color} href={linkToExternal}>
          {options.linkText}
        </Link>
      ) : (
        <Link color={color} component={B.Link} endpoint={options.linkTo}>
          {options.linkText}
        </Link>
      );
    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({}),
}))();
