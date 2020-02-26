(() => ({
  name: 'Image',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Image',
      options: [
        {
          value: [''],
          label: 'Image url',
          key: 'imgUrl',
          type: 'VARIABLE',
        },
        {
          type: 'SIZE',
          label: 'Width',
          key: 'width',
          value: '100%',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          value: '',
          label: 'Image Alternative Text',
          key: 'imgAlt',
          type: 'TEXT',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
