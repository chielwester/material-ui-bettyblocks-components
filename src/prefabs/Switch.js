(() => ({
  name: 'Switch',
  icon: 'CheckboxIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Switch',
      options: [
        {
          type: 'TEXT',
          label: 'Label',
          key: 'label',
          value: 'Label',
        },
        {
          type: 'TOGGLE',
          label: 'Checked',
          key: 'checked',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Disabled',
          key: 'disabled',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Required',
          key: 'required',
          value: false,
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
        {
          label: 'Size',
          key: 'size',
          value: 'medium',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Small',
                value: 'small',
              },
              {
                name: 'Medium',
                value: 'medium',
              },
            ],
          },
        },
        {
          label: 'Edge',
          key: 'edge',
          value: 'false',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Start',
                value: 'start',
              },
              {
                name: 'End',
                value: 'end',
              },
              {
                name: 'False',
                value: 'false',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
