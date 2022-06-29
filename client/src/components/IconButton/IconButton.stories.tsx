import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from ".";

export default {
    title: "Components/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <IconButton {...args}>+</IconButton>
);

export const Primary = Template.bind({});
Primary.args = {};
