import { Tag, TagAction, TagContent } from '@bigcommerce/components/tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const BasicExample: Story = {
  args: {
    children: 'Tag',
  },
  render: ({ children }) => (
    <Tag>
      <TagContent>{children}</TagContent>
      {/* eslint-disable-next-line no-alert */}
      <TagAction onClick={() => alert('Clicked')} />
    </Tag>
  ),
};

export const NoActionExample: Story = {
  args: {
    children: 'Tag',
  },
  render: ({ children }) => (
    <Tag>
      <TagContent>{children}</TagContent>
    </Tag>
  ),
};
