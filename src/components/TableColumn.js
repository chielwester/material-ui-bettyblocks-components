(() => ({
  name: 'TableColumn',
  type: 'TABLE_COLUMN',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { TableCell } = window.MaterialUI.Core;
    const { row, page, order, field, headerOnly } = parent || {};
    const { env, GetOneProvider, getProperty, Link } = B;
    const isDev = B.env === 'dev';
    const { label, align } = options;
    const propertyName = options.property
      ? getProperty(options.property) && getProperty(options.property).name
      : null;

    const {} = window.MaterialUI.Core;
    const cell = headerOnly ? (
      <TableCell align={align}>{label}</TableCell>
    ) : (
      <TableCell align={align}>{propertyName && row[propertyName]}</TableCell>
    );
    return isDev ? <span>{cell}</span> : cell;
  })(),
  styles: () => () => ({}),
}))();
