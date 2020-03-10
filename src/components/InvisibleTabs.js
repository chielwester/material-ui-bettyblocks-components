(() => ({
  name: 'InvisibleTabs',
  type: 'TABS',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isDev = B.env === 'dev';
    const [indexValue, setIndexValue] = useState(0);
    const handleChange = (event, newValue) => {
      setIndexValue(newValue);
    };
    const tabs = children.filter((_, index) => isDev || index === indexValue);
    return (
      <div>
        {tabs.map((child, index) =>
          isDev ? (
            <>
              <span>Tab {index}</span> {child}
            </>
          ) : (
            child
          ),
        )}
      </div>
    );
  })(),
  styles: () => () => ({}),
}))();
