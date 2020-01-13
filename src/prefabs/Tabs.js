(() => ({
  name: 'Tabs',
  icon: 'TabGroupIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'Tabs',
      options: [
        {
          label: 'Centered',
          key: 'centered',
          value: true,
          type: 'TOGGLE',
        },
      ],
      descendants: [
        {
          name: 'Tab',
          descendants: [],
          options: [
            {
              type: 'TEXT',
              label: 'Label',
              key: 'label',
              value: 'New tab',
            },
            {
              type: 'TOGGLE',
              label: 'Disabled',
              key: 'disabled',
              value: false,
            },
            {
              value: '',
              label: 'Page',
              key: 'linkTo',
              type: 'ENDPOINT',
            },
          ],
        },
      ],
    },
  ],
}))();
