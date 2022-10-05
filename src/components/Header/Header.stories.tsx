import { Meta, Story } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof Header> = (args) => <Header {...args} />;

Default.args = {};

export const Examples = () => (
  <>
    <Header />
  </>
);
