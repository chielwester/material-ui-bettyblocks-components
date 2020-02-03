(() => ({
  name: 'Dropzone',
  type: 'DROPZONE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useDropzone } = window.MaterialUI;
    const { Card } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
      setFiles(prevState => [...prevState, acceptedFiles]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      disabled: isDev,
    });

    const thumbs = files.map(file =>
      Object.assign(
        file,
        <div className={classes.thumb} key={file.name}>
          <div className={classes.thumbInner}>
            <img src={URL.createObjectURL(file[0])} className={classes.img} />
          </div>
        </div>,
      ),
    );

    useEffect(
      () => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      },
      [files],
    );

    const dropzone = (
      <div className={classes.dropzoneContainer}>
        <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>{options.label}</p>
          )}
        </div>
        {files.length > 0 && (
          <aside className={classes.thumbsContainer}>{thumbs}</aside>
        )}
      </div>
    );

    return isDev ? <div>{dropzone}</div> : dropzone;
  })(),
  styles: () => () => ({
    dropzoneContainer: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      cursor: 'pointer'
    },
    dropzone: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: '2px',
      borderRadius: '2px',
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out',
      '&:hover': {
        borderColor: '#3f51b5',
      }
    },
    thumbsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
    },
    thumb: {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 100,
      height: 100,
      padding: 4,
      boxSizing: 'border-box',
    },
    thumbInner: {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden',
    },
    img: {
      display: 'block',
      width: 'auto',
      height: '100%',
    },
  }),
}))();
