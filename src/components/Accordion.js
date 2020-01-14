(() => ({
  name: 'Accordion',
  type: 'ACCORDION',
  allowedTypes: ['ACCORDION_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const [expanded, setExpanded] = useState(0);
    const handleChange = panel => (_, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div className={classes.root}>
        <B.Children handleChange={handleChange} expanded={expanded}>
          {children.length ? children : 'Empty accordion component'}
        </B.Children>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      width: '100%',
    },
  }),
}))();
