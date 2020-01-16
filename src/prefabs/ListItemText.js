(() => ({
  name: 'ListItemText',
  icon: 'ListItemIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'ListItemText',
      options: [
        {
          type: 'VARIABLE',
          label: 'Primary text',
          key: 'primaryText',
          value: ['Title'],
        },
        {
          type: 'VARIABLE',
          label: 'Secondary text',
          key: 'secondaryText',
          value: [''],
        },
        {
          type: 'TOGGLE',
          label: 'Button',
          key: 'button',
          value: false,
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
          configuration: {
            // condition: {
            //   type: 'SHOW',
            //   option: 'button',
            //   comparator: 'EQ',
            //   value: true,
            // },
          },
        },
        {
          type: 'TOGGLE',
          label: 'Disabled',
          key: 'disabled',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Disable gutters',
          key: 'disableGutters',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Divider',
          key: 'divider',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Selected',
          key: 'selected',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
