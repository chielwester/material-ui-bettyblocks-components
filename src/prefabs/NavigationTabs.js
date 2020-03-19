(() => ({
  name: 'NavigationTabs',
  icon: 'TabGroupIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationTabs',
      options: [
        {
          label: 'Centered',
          key: 'centered',
          value: true,
          type: 'TOGGLE',
        },
        {
          label: 'Orientation',
          key: 'orientation',
          value: 'horizontal',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Horizontal',
                value: 'horizontal',
              },
              {
                name: 'Vertical',
                value: 'vertical',
              },
            ],
          },
        },
      ],
      descendants: [
        {
          name: 'NavigationTab',
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
