(() => ({
  name: 'Table',
  type: 'TABLE',
  allowedTypes: ['TABLE_COLUMN'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      TableContainer,
      Table,
      TableHead,
      TableBody,
      TableRow,
      TableCell,
      TablePagination,
    } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const { GetAll } = B;
    const [take, setTake] = useState(10);
    // const queryParams = new URLSearchParams(querystring);
    const [page, setPage] = useState(0);
    // const {
    //   location: { search: querystring = '' },
    //   history,
    // } = useRouter();

    /* ####### Filters ####### */

    // function buildFilter(where, [lhs, operator, rhs]) {
    //   if (!lhs || !rhs) {
    //     return null;
    //   }

    //   const lhsProperty = getProperty(lhs);

    //   if (!lhsProperty) {
    //     return null;
    //   }

    //   const { name: propertyName, kind } = lhsProperty;

    //   const getRawValue = (opts, value) =>
    //     opts.includes(kind) ? parseInt(value, 10) : value;

    //   const getInputVariableValue = value => {
    //     const variable = B.getVariable(value.id);
    //     if (variable) {
    //       //  eslint-disable-next-line no-undef
    //       const params = useParams();

    //       return variable.kind === 'integer'
    //         ? parseInt(params[variable.name], 10)
    //         : params[variable.name];
    //     }

    //     return null;
    //   };

    //   const isInputVariable = value =>
    //     value && value[0] && value[0].type === 'INPUT';

    //   const rhsValue = isInputVariable(rhs)
    //     ? getInputVariableValue(rhs[0])
    //     : getRawValue(['serial', 'integer'], rhs[0]);

    //   return {
    //     [propertyName]: {
    //       [operator]: rhsValue,
    //     },
    //   };
    // }

    // let where = {};

    // const filter = buildFilter(where, options.filter);

    // if (filter !== null) {
    //   where = filter;
    // }

    // const searchParam = queryParams.get('search') || '';
    // const searchProp = getProperty(options.searchProperty);

    // if (searchProp && searchParam !== '') {
    //   where[searchProp.name] = {
    //     ...(where[searchProp.name] ? where[searchProp.name] : {}),
    //     regex: searchParam,
    //   };
    // }

    // const field = queryParams.get('sort') || '';
    // const order = queryParams.get('order');

    // const variables = Object.assign(
    //   field && {
    //     sort: {
    //       field,
    //       order: order.toUpperCase(),
    //     },
    //   },
    //   Object.keys(where).length !== 0 && {
    //     where,
    //   },
    // );

    return (
      <div className={classes.root}>
        <GetAll
          modelId={options.model}
          // __SECRET_VARIABLES_DO_NOT_USE={variables}
          skip={page ? page * take : 0}
          take={take}
        >
          {({ loading, error, data, refetch }) => {
            return (
              <>
                <TableContainer
                  className={!children.length && isDev ? classes.pristine : ''}
                >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <B.Children headerOnly>{children}</B.Children>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {error || loading ? (
                        <TableRow key={0}>
                          <TableCell>
                            {error ? 'An error occurred :-(' : 'Loading...'}
                          </TableCell>
                        </TableRow>
                      ) : (
                        data.results.map(row => (
                          <TableRow key={row.id}>
                            <B.Children row={row}>{children}</B.Children>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                {!error && !loading ? (
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
                    count={data.totalCount}
                    rowsPerPage={take}
                    page={page}
                    onChangePage={(_, page) =>
                      setPage(page) && refetch && refetch({ page })
                    }
                    onChangeRowsPerPage={event =>
                      setTake(event.target.value) &&
                      refetch &&
                      refetch({ take: event.target.value })
                    }
                  />
                ) : null}
              </>
            );
          }}
        </GetAll>
      </div>
    );
  })(),
  styles: () => () => ({
    pristine: {
      minHeight: '100px',
    },
  }),
}))();
