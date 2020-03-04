(() => ({
  name: 'ViewTrail',
  type: 'ROW',
  allowedTypes: ['PANE'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const SPACER = 100;
    const [activePanel, setActivePanel] = useState(children.length - 1);
    const [domWidth, setWidth] = useState(0);
    const measuredRef = useCallback(node => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    }, []);
    const gridTemplateColumns = active =>
      children
        .map((child, index) => {
          const wrap =
            child.props.options &&
            parseInt(child.props.options.width) >
              domWidth - (children.length - 1) * SPACER;

          return index === active
            ? child.props.options
              ? wrap
                ? `minmax(calc(100% - ${(children.length - 1) * SPACER}px), ${
                    child.props.options.width || 0
                  }px)`
                : `minmax(${
                    child.props.options.width || 0
                  }px, calc(100% - ${(children.length - 1) * SPACER}px))`
              : '1fr'
            : `minmax(${SPACER}px, ${
                child.props.options ? (child.props.options.width || 0) + 'px' : '1fr'
              })`;
        })
        .join(' ');

    return (
      <div className="view-trail">
        <div
          ref={measuredRef}
          className={classes.root}
          style={{
            gridTemplateColumns: gridTemplateColumns(activePanel),
          }}
        >
          <B.Children activePanel={activePanel} setActivePanel={setActivePanel}>
            {children.length ? children : <span>Empty view trail</span>}
          </B.Children>
        </div>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      height: '100vh',
      width: '100%',
      display: 'grid',
    },
  }),
}))();