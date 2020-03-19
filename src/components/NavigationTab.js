(() => ({
  name: 'NavigationTab',
  type: 'NAVIGATION_TAB',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tab } = window.MaterialUI.Core;
    const { Icons } = window.MaterialUI;
    const isDev = B.env === 'dev';
    const tab = (
      <Tab
        disabled={options.disabled}
        label={options.label}
        icon={
          options.icon !== 'None'
            ? React.createElement(Icons[options.icon])
            : null
        }
        component={B.Link}
        endpoint={options.linkTo}
      />
    );
    return isDev ? <div>{tab}</div> : tab;
  })(),
  styles: () => () => ({}),
}))();
