(() => ({
  name: 'Tabs',
  type: 'TABS',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tabs, AppBar, Tab, Typography, Box } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const [indexValue, setIndexValue] = useState(0);

    const handleChange = (event, newValue) => {
      setIndexValue(newValue);
    };

    const tabs = (
      <>
        <AppBar position="static">
        {console.log('test')}
          <Tabs aria-label="simple tabs example" onChange={handleChange}>
            {isDev
              ? children
              : [...children].map((x, index) => (
                  <Tab label={x.props.options.label} />
                ))}
          </Tabs>
        </AppBar>

        {[...children].map((x, index) => (
          <Typography
            key={index}
            variant={options.title_variant}
            component="div"
            role="tabpanel"
            hidden={indexValue !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
          >
            {indexValue === index && (
              <Box p={3}>
                <Typography variant={!isDev ? x.props.options.title_variant : 'h4'}>{!isDev ? x.props.options.title : 'Title placeholder'}</Typography>

                <Typography variant={!isDev ? x.props.options.content_variant : 'body2'}>{!isDev? x.props.options.content : 'Content placeholder'}</Typography>
              </Box>
            )}
          </Typography>
        ))}
      </>
    );
    return isDev ? <div>{tabs}</div> : tabs;
  })(),
  styles: () => () => ({}),
}))();
