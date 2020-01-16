(() => ({
  name: 'List',
  type: 'LIST',
  allowedTypes: ['LIST_ITEM'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { List } = window.MaterialUI.Core;
    // const { linkType, linkTo, linkToExternal, color } = options;
    const isDev = B.env === 'dev';
    const list = (
      <List className={!children.length ? classes.empty : null}>
        {children}
      </List>
    );
    return isDev ? <div>{list}</div> : list;
  })(),
  styles: () => () => ({
    empty: {
      height: '100px',
    },
  }),
}))();
