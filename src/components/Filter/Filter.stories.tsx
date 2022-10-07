import { Meta, Story } from '@storybook/react';

import Filter from './Filter';

export default {
  title: 'Components/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof Filter> = (args) => <Filter {...args} />;

Default.args = {};

export const Examples = () => (
  <>
    <Filter />
  </>
);
