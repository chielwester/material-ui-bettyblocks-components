(() => ({
  name: 'Tabs',
  type: 'TABS',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tabs } = window.MaterialUI.Core;
    const [value, setValue] = useState(null);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const isDev = B.env === 'dev';
    const tabs = (
      <Tabs value={value} onChange={handleChange} centered={options.centered}>
        {children}
      </Tabs>
    );
    return isDev ? <div>{tabs}</div> : tabs;
  })(),
  styles: () => () => ({}),
}))();
