(() => ({
  name: 'IconButton',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'IconButton',
      options: [
        {
          label: 'Icon',
          key: 'icon',
          value: 'Search',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Cancel',
                value: 'Cancel',
              },
              {
                name: 'Close',
                value: 'Close',
              },
              {
                name: 'Save',
                value: 'Save',
              },
              {
                name: 'Delete',
                value: 'Delete',
              },
              {
                name: 'ExpandMore',
                value: 'ExpandMore',
              },
              {
                name: 'FilterList',
                value: 'FilterList',
              },
              {
                name: 'Search',
                value: 'Search',
              },
              {
                name: 'FileCopy',
                value: 'FileCopy',
              },
              {
                name: 'GetApp',
                value: 'GetApp',
              },
              {
                name: 'Email',
                value: 'Email',
              },
            ],
          },
        },
        {
          label: 'Disabled',
          key: 'disabled',
          value: false,
          type: 'TOGGLE',
        },
        {
          label: 'Color',
          key: 'color',
          value: 'default',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Default',
                value: 'default',
              },
              {
                name: 'Inherit',
                value: 'inherit',
              },
              {
                name: 'Primary',
                value: 'primary',
              },
              {
                name: 'Secondary',
                value: 'secondary',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
