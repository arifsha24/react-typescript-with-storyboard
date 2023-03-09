import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleInput } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: SimpleInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SimpleInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'SimpleInput',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SimpleInput',
};

export const Large = Template.bind({});
Large.args = {
  size: '64',
  label: 'SimpleInput',
};

export const Small = Template.bind({});
Small.args = {
  size: '32',
  label: 'SimpleInput',
};
