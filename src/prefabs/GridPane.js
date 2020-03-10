(() => ({
  name: 'GridPane',
  icon: 'GridIcon',
  category: 'PANES',
  structure: [
    {
      name: 'GridPane',
      options: [
        {
          value: 1600,
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
                  value: ['Grid'],
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
          name: 'Container',
          options: [
            {
              label: 'Max width',
              key: 'maxWidth',
              value: 'none',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: ['xs', 'sm', 'md', 'lg', 'xl', 'none'].map(
                  value => ({
                    name: value.charAt(0).toUpperCase() + value.slice(1),
                    value,
                  }),
                ),
              },
            },
            {
              label: 'Disable gutters',
              key: 'disableGutters',
              value: true,
              type: 'TOGGLE',
            },
            {
              label: 'Fixed',
              key: 'fixed',
              value: false,
              type: 'TOGGLE',
            },
          ],
          descendants: [
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
        },
      ],
    },
  ],
}))();
