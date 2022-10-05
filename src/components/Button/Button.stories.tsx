import { Meta, Story } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof Button> = (args) => <Button {...args} />;

Default.args = {};

export const Examples = () => (
  <>
    <Button />
  </>
);
