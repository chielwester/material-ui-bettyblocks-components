(() => ({
  name: 'FormPane',
  icon: 'FormIcon',
  category: 'PANES',
  structure: [
    {
      name: 'FormPane',
      options: [
        {
          value: 600,
          label: 'Width',
          key: 'width',
          type: 'NUMBER',
        },
      ],
      descendants: [
        {
          name: 'AppBar',
          descendants: [
            {
              name: 'Toolbar',
              options: [
                {
                  label: 'Title',
                  key: 'title',
                  value: ['Form'],
                  type: 'VARIABLE',
                },
              ],
              descendants: [],
            },
          ],
          options: [
            {
              label: 'Position',
              key: 'position',
              value: 'static',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: [
                  {
                    name: 'Fixed',
                    value: 'fixed',
                  },
                  {
                    name: 'Absolute',
                    value: 'absolute',
                  },
                  {
                    name: 'Sticky',
                    value: 'sticky',
                  },
                  {
                    name: 'Static',
                    value: 'static',
                  },
                  {
                    name: 'Relative',
                    value: 'relative',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'Form',
          options: [
            {
              value: '',
              label: 'Action',
              key: 'actionId',
              type: 'ACTION',
              configuration: {
                apiVersion: 'v1',
              },
            },
            {
              value: '',
              label: 'Model',
              key: 'model',
              type: 'MODEL',
            },
            {
              value: [''],
              label: 'Record ID',
              key: 'recordId',
              type: 'VARIABLE',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
