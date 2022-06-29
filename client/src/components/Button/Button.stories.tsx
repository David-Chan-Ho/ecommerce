import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
    size: "large",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
};
