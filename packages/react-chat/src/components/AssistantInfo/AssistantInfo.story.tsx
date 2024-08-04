import type { Meta, StoryObj } from '@storybook/react';

import Chat from '@/components/Chat';
import { VF_ICON_ASSISTANT } from '@/fixtures';

import type { AssistantInfoProps } from '.';
import AssistantInfo from '.';

type Story = StoryObj<typeof AssistantInfo>;

const meta: Meta<typeof AssistantInfo> = {
  title: 'Components/Chat/AssistantInfo',
  component: AssistantInfo,
  args: {
    title: 'Anna',
    description: "Virtual assistant is here to help.",
    avatar: VF_ICON_ASSISTANT,
  },
};

export default meta;

export const Default: Story = {
  render: (args: AssistantInfoProps) => (
    <Chat.Container>
      <AssistantInfo {...args} />
    </Chat.Container>
  ),
};
