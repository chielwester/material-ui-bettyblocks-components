(() => ({
  name: 'InvisibleTabs',
  type: 'TABS',
  allowedTypes: ['TAB'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isDev = B.env === 'dev';
    const [indexValue, setIndexValue] = useState(0);

    useEffect(() => {
      // B.defineFunction('ShowPanel0', () => {
      //   setIndexValue(0);
      // });

      B.defineFunction('ShowPanel1', () => {
        setIndexValue(1);
      });
    }, []);

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
