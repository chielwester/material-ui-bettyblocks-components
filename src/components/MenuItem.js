(() => ({
  name: 'MenuItem',
  type: 'MENU_ITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { MenuItem, ListItemIcon, Typography } = window.MaterialUI.Core;
    const { linkTo, text, icon } = options;
    const isDev = B.env === 'dev';
    const menuItem = (
      <MenuItem component={B.Link} endpoint={linkTo}>
        {icon !== 'None' ? (
          <ListItemIcon>
            {React.createElement(Icons[icon], { fontSize: 'small' })}
          </ListItemIcon>
        ) : null}
        <Typography variant="inherit">{text}</Typography>
      </MenuItem>
    );
    return isDev ? <div>{menuItem}</div> : menuItem;
  })(),
  styles: () => () => ({}),
}))();
