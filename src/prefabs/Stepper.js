(() => ({
  name: 'Stepper',
  icon: 'PanelIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Stepper',
      options: [],
      descendants: [
        {
          name: 'Step',
          descendants: [],
          options: [
            {
              type: 'VARIABLE',
              label: 'Label',
              key: 'label',
              value: ['Step'],
            },
            {
              type: 'TOGGLE',
              label: 'Active',
              key: 'active',
              value: false,
            },
            {
              type: 'TOGGLE',
              label: 'Completed',
              key: 'completed',
              value: false,
            },
            {
              type: 'TOGGLE',
              label: 'Disabled',
              key: 'disabled',
              value: false,
            },
          ],
        },
      ],
    },
  ],
}))();
