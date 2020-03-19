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
    const { GetAll, getProperty, useText } = B;
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
    const history = isDev ? null : useHistory();
    const selectedId =
      options.selectedId && useText && useText(options.selectedId);

    const variables = Object.assign(
      order && {
        sort: {
          field: orderBy,
          order: order.toUpperCase(),
        },
      },
    );

    if (!options.model) {
      return <div>Please select a model</div>;
    }

    const applyParams = (url, params) => {
      const resolveSegment = segment => {
        if (segment.startsWith(':')) {
          const key = segment.substr(1);

          return encodeURIComponent(params[key] || segment);
        }

        return segment;
      };

      const resolvedPath = url
        .split('/')
        .map(segment => resolveSegment(segment))
        .join('/');

      const resolvedSegments = url
        .split('/')
        .filter(segment => segment.startsWith(':'))
        .map(segment => segment.substr(1));

      const search = Object.entries(params).filter(
        ([key]) => !resolvedSegments.includes(key),
      );

      const searchString = new URLSearchParams(search).toString();

      if (searchString !== '') return `${resolvedPath}?${searchString}`;

      return resolvedPath;
    };

    const buildUrl = (artifact, endpointId, params) => {
      const endpoint = artifact.endpoints[endpointId];

      const stringifiedParams = Object.keys(params).reduce((acc, key) => {
        const value = params[key];

        if (Array.isArray(value)) {
          const newParam = value.map(segment => {
            if (typeof segment === 'string') {
              return segment;
            }

            return useProperty(artifact)(segment.id)?.toString() || '';
          });

          return { ...acc, [key]: newParam.join('') };
        }

        return { ...acc, [key]: params[key] };
      }, {});

      return endpoint ? applyParams(endpoint.url, stringifiedParams) : '/';
    };

    const handleClick = (event, id) => {
      const url = buildUrl(window.artifact, options.linkTo?.id, {
        record_id: id,
      });

      if (history) {
        history.push(url);
      }
    };

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
                {title || searchProperty ? (
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
                ) : null}
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
                          <TableRow
                            key={row.id}
                            hover={options.clickable}
                            onClick={event => handleClick(event, row.id)}
                            selected={selectedId && selectedId == row.id}
                          >
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
