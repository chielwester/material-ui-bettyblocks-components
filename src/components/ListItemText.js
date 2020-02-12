(() => ({
  name: 'ListItemText',
  type: 'LIST_ITEM',
  allowedTypes: ['TEXT', 'IMAGE', 'CHIP', 'BUTTON', 'LINK', 'SWITCH'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { ListItem, ListItemText } = window.MaterialUI.Core;
    const {
      alignItems,
      disabled,
      disableGutters,
      divider,
      selected,
      primaryText,
      secondaryText,
      button,
    } = options;
    const isDev = B.env === 'dev';
    const listItem = (
      <ListItem
        button={button}
        alignItems={alignItems}
        disabled={disabled}
        disableGutters={disableGutters}
        divider={divider}
        selected={selected}
        component={button ? B.Link : 'li'}
        endpoint={options.linkTo}
      >
        <ListItemText
          primary={primaryText}
          secondary={children.length ? children : secondaryText}
        />
      </ListItem>
    );

    return isDev ? <span>{listItem}</span> : listItem;
  })(),
  styles: () => () => ({}),
}))();
