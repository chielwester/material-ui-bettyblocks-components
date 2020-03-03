(() => ({
  name: 'Pane',
  type: 'PANEL',
  allowedTypes: ['PANEL_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const ConditionalWrapper = ({ condition, wrapper, children }) =>
      condition ? wrapper(children) : children;
    const { activePanel, setActivePanel } = parent;
    const isActive = activePanel === index;
    return (
      <div className={classes.root}>
        <ConditionalWrapper
          condition={!isActive}
          wrapper={children => (
            <div
              onClick={() => setActivePanel(index)}
              className={classes.overlay}
            >
              {children}
            </div>
          )}
        >
          {children.length ? children : 'Empty panel'}
        </ConditionalWrapper>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      outline: '1px solid black',
      overflowX: 'fixed',
      overflowY: 'auto',
      height: '100%',
      position: 'relative',
      whiteSpace: 'nowrap',
    },
    overlay: {
      height: '100%',
      opacity: 0.1,
      zIndex: 1,
      opacity: 0.6,
    },
  }),
}))();
