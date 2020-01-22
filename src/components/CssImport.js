(() => ({
  name: 'CssImport',
  type: 'CSSIMPORT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    useEffect(() => {
      const css = document.createElement('style');
      const isDev = B.env === 'dev';

      const readTextFile = file => {
        const rawFile = new XMLHttpRequest();
        rawFile.open('GET', file, false);
        rawFile.onreadystatechange = () => {
          if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
              css.innerHTML = rawFile.responseText;
              document.getElementsByTagName('head')[0].appendChild(css);
            }
          }
        };
        rawFile.setRequestHeader(
          'Access-Control-Allow-Origin',
          isDev
            ? 'https://ide-nl3.betty.services'
            : 'https://idenl3.blob.core.windows.net',
        );
        rawFile.send(null);
      };

      if (options.url) {
        readTextFile(options.url);
      }
    });

    return (
      <div className={classes.root}>
        <p>Imported CSS</p>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      height: '50px',
      background: '#e4e4e4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
}))();
