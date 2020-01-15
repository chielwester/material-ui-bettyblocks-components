(() => ({
  name: 'TableColumn',
  type: 'TABLE_COLUMN',
  allowedTypes: ['TEXT', 'BUTTON'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { TableCell, TableSortLabel } = window.MaterialUI.Core;
    const { row, order, headerOnly, orderBy, onRequestSort } = parent || {};
    const { env, GetOneProvider, getProperty, Link } = B;
    const isDev = B.env === 'dev';
    const { label, align } = options;
    const propertyName = options.property
      ? getProperty(options.property) && getProperty(options.property).name
      : null;

    const createSortHandler = field => event => {
      onRequestSort(event, field);
    };

    const cell = headerOnly ? (
      <TableCell
        key={index}
        align={align}
        sortDirection={orderBy === propertyName ? order : false}
      >
        <TableSortLabel
          active={orderBy === propertyName}
          direction={orderBy === propertyName ? order : 'asc'}
          onClick={createSortHandler(propertyName)}
        >
          {label}
        </TableSortLabel>
      </TableCell>
    ) : (
      <TableCell align={align}>
        {propertyName && row[propertyName]}
        {/* <GetOneProvider value={value}>{children}</GetOneProvider> */}
      </TableCell>
    );
    return isDev ? <span>{cell}</span> : cell;
  })(),
  styles: () => () => ({}),
}))();
