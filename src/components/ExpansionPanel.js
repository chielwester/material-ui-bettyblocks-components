(() => ({
  name: 'ExpansionPanel',
  type: 'ACCORDION_ITEM',
  allowedTypes: ['CHIP', 'DIVIDER', 'TEXT', 'IMAGE', 'TOOLTIP'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      ExpansionPanel,
      ExpansionPanelSummary,
      Typography,
      ExpansionPanelDetails,
    } = window.MaterialUI.Core;
    const { ExpandMore } = window.MaterialUI.Icons;
    const { handleChange, expanded } = parent || {};
    const { summary, details } = options;
    const { useText, env } = B;
    const isDev = env === 'dev';
    const panel = (
      <ExpansionPanel
        expanded={isDev || expanded === index}
        onChange={handleChange(index)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>{isDev ? JSON.stringify(summary): useText(summary)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    );
    return isDev ? <div>{panel}</div> : panel;
  })(),
  styles: () => () => ({}),
}))();
