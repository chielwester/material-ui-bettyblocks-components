(() => ({
  name: 'Tab',
  icon: 'ButtonIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'Tab',
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
      descendants: [],
    },
  ],
}))();
