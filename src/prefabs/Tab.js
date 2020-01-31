(() => ({
  name: 'Tab',
  icon: 'ButtonIcon',
  category: 'CONTENT',
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
          type: 'TEXT',
          label: 'Title',
          key: 'title',
          value: 'Tab title',
        },
        {
          label: 'Title Variant',
          key: 'title_variant',
          value: 'h4',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'subtitle1',
              'subtitle2',
              'body1',
              'body2',
              'caption',
              'button',
              'overline',
              'srOnly',
              'inherit',
            ].map(value => ({
              name: value.charAt(0).toUpperCase() + value.slice(1),
              value,
            })),
          },
        },
        {
          type: 'TEXT',
          label: 'Content',
          key: 'content',
          value: 'Tab content',
        },
        {
          label: 'Content Variant',
          key: 'content_variant',
          value: 'body1',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'subtitle1',
              'subtitle2',
              'body1',
              'body2',
              'caption',
              'button',
              'overline',
              'srOnly',
              'inherit',
            ].map(value => ({
              name: value.charAt(0).toUpperCase() + value.slice(1),
              value,
            })),
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
