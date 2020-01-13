(() => ({
  name: 'Step',
  type: 'STEP',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { label, active, completed, disabled } = options;
    const { Step, StepLabel } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const labelProps = {};
    const step = (
      <Step
        active={active}
        completed={completed}
        disabled={disabled}
      >
        <StepLabel {...labelProps}>
          {(!label || !label.length) && isDev ? 'Step' : label}
        </StepLabel>
      </Step>
    );
    return isDev ? <div>{step}</div> : step;
  })(),
  styles: () => () => ({}),
}))();
