(() => ({
  name: 'AppBar',
  icon: 'NavbarIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'AppBar',
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
      descendants: [
        {
          name: 'Toolbar',
          options: [
            {
              label: 'Title',
              key: 'title',
              value: ['App Bar'],
              type: 'VARIABLE',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
