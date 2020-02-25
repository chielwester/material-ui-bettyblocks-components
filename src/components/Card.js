(() => ({
  name: 'Card',
  type: 'CARD',
  allowedTypes: ['BOX', 'CHIP', 'DIVIDER', 'LIST', 'TEXT', 'IMAGE', 'TOOLTIP'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      Card,
      CardHeader,
      CardContent,
      CardActions,
    } = window.MaterialUI.Core;
    const { raised, variant, title, subTitle } = options;
    const isDev = B.env === 'dev';
    const card = (
      <Card variant={variant} raised={raised}>
        {title.length || subTitle.length ? <CardHeader title={title} subheader={subTitle} /> : '' }
        <CardContent>
          {!children.length & isDev ? 'Card' : children}
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    );
    return isDev ? <div>{card}</div> : card;
  })(),
  styles: () => () => ({}),
}))();
