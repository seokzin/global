import { Meta, Story } from '@storybook/react';

import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof Badge> = (args) => <Badge {...args} />;

Default.args = {};

export const Examples = () => (
  <>
    <Badge />
  </>
);
