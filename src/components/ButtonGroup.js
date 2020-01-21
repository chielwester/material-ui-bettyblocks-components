// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';

// export default function GroupedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ButtonGroup color="primary" aria-label="outlined primary button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="contained primary button group"
//       >
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//       <ButtonGroup
//         variant="text"
//         color="primary"
//         aria-label="text primary button group"
//       >
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//     </div>
//   );
// }

(() => ({
  name: 'ButtonGroup',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Button, ButtonGroup } = window.MaterialUI.Core;
    const { color, variant, size, startIcon } = options;
    return (
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      // <Button
      //   variant={variant}
      //   color={color}
      //   component={B.Link}
      //   endpointId={options.linkTo}
      //   size={size}
      //   startIcon={
      //     startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
      //   }
      // >
      //   {options.buttonText}{' '}
      // </Button>
    );
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
