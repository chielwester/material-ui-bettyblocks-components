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
        // {
        //   value: ['', 'eq', ''],
        //   label: 'Filter',
        //   key: 'filter',
        //   type: 'FILTER',
        //   configuration: {
        //     dependsOn: 'model',
        //   },
        // },
        // {
        //   value: '',
        //   label: 'Search on property',
        //   key: 'searchProperty',
        //   type: 'PROPERTY',
        //   configuration: {
        //     dependsOn: 'model',
        //   },
        // },
      ],
      descendants: [],
    },
  ],
}))();
