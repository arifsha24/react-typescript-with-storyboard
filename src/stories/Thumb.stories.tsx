import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThumbCard } from './ThumbCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CardBox',
  component: ThumbCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThumbCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThumbCard> = (args) => <ThumbCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'ThumbCard',
  imgContent:'/twothumb.png',
  desc:'Sample Desc',
  btnTxt:'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ThumbCard',
  imgContent:'/twothumb.png',
  desc:'Sample Desc',
  btnTxt:'Button'
};

export const Large = Template.bind({});
Large.args = {
  label: 'ThumbCard',
  imgContent:'/twothumb.png',
  desc:'Sample Desc',
  btnTxt:'Button'
};

export const Small = Template.bind({});
Small.args = {
  label: 'ThumbCard',
  imgContent:'/twothumb.png',
  desc:'Sample Desc',
  btnTxt:'Button'
};
