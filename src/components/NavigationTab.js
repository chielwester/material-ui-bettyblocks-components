(() => ({
  name: 'NavigationTab',
  type: 'NAVIGATION_TAB',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tab } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const tab = (
      <Tab
        disabled={options.disabled}
        label={options.label}
        component={B.Link}
        endpointId={options.linkTo}
        {...__SECRET_PROPS_DO_NOT_USE}
      />
    );
    return isDev ? <div>{tab}</div> : tab;
  })(),
  styles: () => () => ({}),
}))();
