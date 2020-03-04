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
      TableFooter,
      TableRow,
      TableCell,
      TablePagination,
      Backdrop,
      CircularProgress,
      Toolbar,
      Typography,
      Tooltip,
      IconButton,
      InputAdornment,
      TextField,
    } = window.MaterialUI.Core;
    const { FilterList, Search } = window.MaterialUI.Icons;
    const isDev = B.env === 'dev';
    const { GetAll, getProperty } = B;
    const [take, setTake] = useState(10);
    const [records, setRecords] = useState(isDev ? [{}] : []);
    const [totalCount, setTotalCount] = useState(0);
    const [order, setOrder] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const [page, setPage] = useState(0);
    const [searching, setSearching] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const { title, searchProperty, filter } = options;
    const searchProp = getProperty(searchProperty);

    const variables = Object.assign(
      order && {
        sort: {
          field: orderBy,
          order: order.toUpperCase(),
        },
      },
    );

    return (
      <div className={classes.root}>
        <GetAll
          modelId={options.model}
          filter={
            searchProp && searchParam !== ''
              ? { ...filter, [searchProp.id]: { matches: searchParam } }
              : filter
          }
          __SECRET_VARIABLES_DO_NOT_USE={variables}
          skip={page ? page * take : 0}
          take={take}
        >
          {({ loading, error, data, refetch }) => {
            if (!isDev && data && !loading && !error) {
              setTotalCount(data.totalCount);
              setRecords(data.results);
            }
            return (
              <>
                <Toolbar>
                  {title ? (
                    <Typography className={classes.toolbarTitle} variant="h6">
                      {title}
                    </Typography>
                  ) : null}

                  {searchProperty ? (
                    <>
                      {searching ? (
                        <TextField
                          onChange={event => {
                            setSearchParam(event.target.value);
                            setPage(0);
                            refetch({ page: 0 });
                          }}
                          placeholder={
                            searchProp
                              ? searchProp.name.charAt(0).toUpperCase() +
                                searchProp.name.slice(1)
                              : 'Search'
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search />
                              </InputAdornment>
                            ),
                          }}
                        />
                      ) : null}
                      <Tooltip>
                        <IconButton
                          onClick={() => {
                            if (searching) {
                              setSearchParam('');
                            }
                            setSearching(!searching);
                          }}
                        >
                          <FilterList />
                        </IconButton>
                      </Tooltip>
                    </>
                  ) : null}
                </Toolbar>
                <TableContainer
                  className={[
                    classes.container,
                    !children.length && isDev ? classes.pristine : '',
                  ].join(' ')}
                >
                  <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <B.Children
                          headerOnly
                          orderBy={orderBy}
                          order={order}
                          onRequestSort={(event, newOrderBy) => {
                            const isAsc =
                              orderBy === newOrderBy && order === 'asc';
                            setOrder(isAsc ? 'desc' : 'asc');
                            setOrderBy(newOrderBy);
                            refetch({});
                          }}
                        >
                          {children}
                        </B.Children>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {error ? (
                        <TableRow key={0}>
                          <TableCell>An error occurred :-(</TableCell>
                        </TableRow>
                      ) : (
                        records.map(row => (
                          <TableRow key={row.id}>
                            <B.Children row={row}>{children}</B.Children>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                    <TableFooter>
                      {!error ? (
                        <TableRow>
                          <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
                            count={totalCount}
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
                        </TableRow>
                      ) : null}
                    </TableFooter>
                  </Table>
                </TableContainer>
              </>
            );
          }}
        </GetAll>
      </div>
    );
  })(),
  styles: () => () => ({
    container: {
      position: 'relative',
    },
    backdrop: {
      zIndex: 1,
      position: 'absolute',
    },
    pristine: {
      minHeight: '100px',
    },
    toolbarTitle: {
      flex: '1 1 100%',
    },
  }),
}))();
