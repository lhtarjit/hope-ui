import React from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

// export const Small = () => <Input size="small" placeholder="Small size" />;
// export const Medium = () => <Input size="medium" placeholder="Medium size" />;
// export const Large = () => <Input size="large" placeholder="Large size" />;

const Template = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: "xlarge",
};
