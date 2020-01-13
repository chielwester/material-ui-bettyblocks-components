(() => ({
  name: 'Breadcrumbs',
  type: 'BREADCRUMB',
  allowedTypes: ['LINK'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isDev = B.env == 'dev';
    const { Breadcrumbs } = window.MaterialUI.Core;
    const breadcrumbs =
      children.length || !isDev ? (
        <Breadcrumbs separator={options.separator} aria-label="breadcrumb">
          {children}
        </Breadcrumbs>
      ) : (
        'Breadcrumbs'
      );

    return isDev ? <div>{breadcrumbs}</div> : breadcrumbs;
  })(),
  styles: () => () => ({}),
}))();
