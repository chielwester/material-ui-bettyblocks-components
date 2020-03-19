(() => ({
  name: 'NavigationTabs',
  type: 'NAVIGATION_TABS',
  allowedTypes: ['NAVIGATION_TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tabs } = window.MaterialUI.Core;
    const [value, setValue] = useState(null);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const isDev = B.env === 'dev';
    const tabs = (
      <Tabs
        orientation={options.orientation}
        value={value}
        selected={0}
        onChange={handleChange}
        centered={options.centered}
      >
        {children}
      </Tabs>
    );
    return isDev ? <div>{tabs}</div> : tabs;
  })(),
  styles: () => () => ({}),
}))();
