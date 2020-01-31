(() => ({
  name: 'Dropzone',
  type: 'DROPZONE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Dropzone } = window.MaterialUI;
    const isDev = B.env === 'dev';
    const [files, setFiles] = useState([]);
    const handleChange = (e, file) => {
      setFiles({
        files: files,
      });
    };

    const dropzone = (
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    );
    return isDev ? <div>{dropzone}</div> : dropzone;
  })(),
  styles: () => () => ({
    pointerEventsNone: {
      pointerEvents: 'none',
    },
  }),
}))();
