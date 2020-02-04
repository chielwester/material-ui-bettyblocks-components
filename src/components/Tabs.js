(() => ({
  name: 'Tabs',
  type: 'TABS',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tabs, AppBar, Tab, Typography } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const { showall } = options;
    const [indexValue, setIndexValue] = useState(0);

    const handleChange = (event, newValue) => {
      setIndexValue(newValue);
    };

    const tabs = (
      <>
        <AppBar position="static">
          <Tabs aria-label="tabs" onChange={handleChange}>
            {[...children].map((child, _index) => (
              <Tab label={isDev ? 'Tab' : child.props.options.label} />
            ))}
          </Tabs>
        </AppBar>

        {[...children].map((_child, index) => (
          <Typography
            key={index}
            variant={options.title_variant}
            component="div"
            role="tabpanel"
            hidden={isDev && showall ? !showall : indexValue !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
          >
            {isDev && showall
              ? children[index]
              : indexValue === index && children[index]}
          </Typography>
        ))}
      </>
    );
    return isDev ? <div>{tabs}</div> : tabs;
  })(),
  styles: () => () => ({}),
}))();
