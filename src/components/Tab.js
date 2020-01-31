(() => ({
  name: 'Tab',
  type: 'TAB',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tab } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const tab = (
      <Tab
        label={options.label}
      />
    );
    return isDev ? <div>{tab}</div> : tab;
  })(),
  styles: () => () => ({}),
}))();
