(() => ({
  name: 'Avatar',
  type: 'IMAGE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Avatar } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const avatar = <Avatar></Avatar>;
    return isDev ? <span>{avatar}</span> : avatar;
  })(),
  styles: () => () => ({}),
}))();
