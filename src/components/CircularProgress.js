(() => ({
  name: 'CircularProgress',
  type: 'PROGRESS',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { CircularProgress } = window.MaterialUI.Core;
    const { label, disabled, variant, color } = options;
    const isDev = B.env === 'dev';
    const progress = <CircularProgress color={color}></CircularProgress>;
    return isDev ? <span>{progress}</span> : progress;
  })(),
  styles: _ => _ => {},
}))();
