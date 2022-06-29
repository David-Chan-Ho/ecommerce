import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Skeleton from ".";

export default {
    title: "Components/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <div style={{ width: 300, height: 300 }}>
        <Skeleton {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Circle = Template.bind({});
Circle.args = {
    circle: true,
    height: 64
};

export const Box = Template.bind({});
Box.args = {
    box: true,
};
