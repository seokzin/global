import { Meta, Story } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<typeof Card> = (args) => <Card {...args} />;

Default.args = {
  name: 'Jon Snow',
  aliases: ['Lord Snow', "Ned Stark's Bastard"],
  titles: [
    "Lord Commander of the Night's Watch",
    "998th Lord Commander of the Night's Watch",
  ],
  books: ['A Game of Thrones', 'A Clash of Kings'],
  tvSeries: ['Season 1', 'Season 2', 'Season 3'],
};
