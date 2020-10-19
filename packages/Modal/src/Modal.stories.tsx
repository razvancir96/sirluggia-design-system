import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal } from './index';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<null> = (args) => <Modal {...args}></Modal>;

export const Default = Template.bind({});
Default.args = {};
