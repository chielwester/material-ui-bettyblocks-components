(() => ({
  name: 'Table',
  icon: 'DataTable',
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
          type: 'VARIABLE',
          label: 'Selected id',
          key: 'selectedId',
          value: [],
        },
        {
          type: 'TOGGLE',
          label: 'Clickable',
          key: 'clickable',
          value: false,
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'clickable',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: '',
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
