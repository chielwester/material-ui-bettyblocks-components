(() => ({
  name: 'ViewTrail',
  type: 'ROW',
  allowedTypes: ['PANE'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const SPACER = 100;
    const isDev = B.env === 'dev';
    const parts = isDev
      ? children
      : useLocation()
          .pathname.split('/')
          .filter(p => !p.startsWith(':') && p !== '0' && p !== '');

    const openChildren = children.slice(0, parts.length);
    const [activePanel, setActivePanel] = useState(openChildren - 1);

    const [domWidth, setWidth] = useState(0);
    const measuredRef = useCallback(node => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    }, []);

    const gridTemplateColumns = active => {
      return openChildren
        .map((child, index) => {
          const wrap =
            child.props.options &&
            parseInt(child.props.options.width) >
              domWidth - (openChildren.length - 1) * SPACER;

          return index === active
            ? child.props.options
              ? wrap
                ? `minmax(calc(100% - ${(openChildren.length - 1) *
                    SPACER}px), ${child.props.options.width || 0}px)`
                : `minmax(${child.props.options.width ||
                    0}px, calc(100% - ${(openChildren.length - 1) * SPACER}px))`
              : '1fr'
            : `minmax(${SPACER}px, ${
                child.props.options
                  ? (child.props.options.width || 0) + 'px'
                  : '1fr'
              })`;
        })
        .join(' ');
    };

    return (
      <div className="view-trail">
        <div
          ref={measuredRef}
          className={classes.root}
          style={{
            gridTemplateColumns: gridTemplateColumns(activePanel),
          }}
        >
          <B.Children
            activePanel={activePanel}
            setActivePanel={setActivePanel}
            // togglePanel={togglePanel}
          >
            {children.length ? openChildren : <span>Empty view trail</span>}
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
