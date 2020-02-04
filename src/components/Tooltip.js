(() => ({
  name: 'Tooltip',
  type: 'TOOLTIP',
  allowedTypes: [
    'BUTTON',
    'CHIP',
    'IMAGE',
    'PROGRESS',
    'TEXT',
    'LINK',
    'SWITCH',
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Tooltip } = window.MaterialUI.Core;
    const { title } = options;
    const isDev = B.env === 'dev';
    const tooltip = (
      <Tooltip
        title={(!title || !title.length) && isDev ? 'Tooltip' : title}
        arrow
      >
        {children && children.length ? (
          <span>{children}</span>
        ) : (
          <span>tooltip</span>
        )}
      </Tooltip>
    );

    return isDev ? <div style="border: 1px solid red">{tooltip}</div> : tooltip;
  })(),
  styles: () => () => ({}),
}))();
