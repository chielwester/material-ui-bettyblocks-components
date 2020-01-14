(() => ({
  name: 'ExpansionPanel',
  type: 'ACCORDION_ITEM',
  allowedTypes: ['TEXT', 'BUTTON'],
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
    const isDev = B.env === 'dev';
    const panel = (
      <ExpansionPanel
        expanded={expanded === index}
        onChange={handleChange(index)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>{summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
    return isDev ? <div>{panel}</div> : panel;
  })(),
  styles: () => () => ({}),
}))();
