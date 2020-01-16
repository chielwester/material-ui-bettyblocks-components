(() => ({
  name: 'ListItemText',
  type: 'LIST_ITEM',
  allowedTypes: ['TEXT', 'IMAGE', 'CHIP', 'BUTTON'],
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
    } = options;
    const isDev = B.env === 'dev';
    const listItem = (
      <ListItem
        alignItems={alignItems}
        disabled={disabled}
        disableGutters={disableGutters}
        divider={divider}
        selected={selected}
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
