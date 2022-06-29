import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from ".";

export default {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
