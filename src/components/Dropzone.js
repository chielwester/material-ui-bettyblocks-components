(() => ({
  name: 'Dropzone',
  type: 'DROPZONE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { DropzoneArea } = window.MaterialUI;
    const isDev = B.env === 'dev';
    const [files, setFiles] = useState([]);
    const handleChange = files => {
      setFiles({
        files: files,
      });
    };

    const dropzone = (
      <DropzoneArea
        onChange={handleChange}
      />
    );
    return isDev ? <div>{dropzone}</div> : dropzone;
  })(),
  styles: () => () => ({
    pointerEventsNone: {
      pointerEvents: 'none',
    },
  }),
}))();
