(() => ({
  name: 'Table',
  icon: 'Table',
  category: 'DATA',
  structure: [
    {
      name: 'Table',
      options: [
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          type: 'TEXT',
          label: 'Title',
          key: 'title',
          value: '',
        },
        {
          value: ['', 'eq', ''],
          label: 'Filter',
          key: 'filter',
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: '',
          label: 'Search on property',
          key: 'searchProperty',
          type: 'PROPERTY',
          configuration: {
            dependsOn: 'model',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
