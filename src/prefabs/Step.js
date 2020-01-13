(() => ({
  name: 'Step',
  icon: 'BreadcrumbItemIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Step',
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
      descendants: [],
    },
  ],
}))();
