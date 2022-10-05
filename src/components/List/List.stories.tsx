import { Meta, Story } from '@storybook/react';

import List from './List';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof List> = (args) => <List {...args} />;

Default.args = {};

export const Examples = () => (
  <>
    <List />
  </>
);
