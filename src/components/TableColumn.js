(() => ({
  name: 'TableColumn',
  type: 'TABLE_COLUMN',
  allowedTypes: ['TEXT', 'BUTTON', 'DIVIDER', 'CHIP'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { TableCell, TableSortLabel } = window.MaterialUI.Core;
    const { row, order, headerOnly, orderBy, onRequestSort } = parent || {};
    const { env, GetOneProvider, getProperty, Link } = B;
    const isDev = env === 'dev';
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
          onClick={propertyName && createSortHandler(propertyName)}
        >
          {label}
        </TableSortLabel>
      </TableCell>
    ) : (
      <TableCell
        align={align}
        className={[classes.cell, !children.length ? classes.empty : ''].join(
          ' ',
        )}
      >
        {GetOneProvider ? (
          <GetOneProvider value={row}>{children}</GetOneProvider>
        ) : (
          children
        )}
      </TableCell>
    );
    return isDev ? <span>{cell}</span> : cell;
  })(),
  styles: () => () => ({
    cell: {
      whiteSpace: 'pre-wrap',
    },
    empty: {
      border: '1px dotted black',
    },
  }),
}))();
