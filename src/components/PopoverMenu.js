(() => ({
  name: 'PopoverMenu',
  type: 'SWITCH',
  allowedTypes: ['POPOVERMENUITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Menu, Button } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';

    const [anchorEl, setAnchorEl] = React.useState(null);

    const { color, label, openInDev, variant } = options;

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color={color}
          variant={variant}
        >
          {label}
        </Button>
        {!isDev ? (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {children}
          </Menu>
        ) : (
          openInDev && children
        )}
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      height: '200px',
    },
  }),
}))();
