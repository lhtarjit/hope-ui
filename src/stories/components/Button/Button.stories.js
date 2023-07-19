import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Sign in",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: "primary-small",
  children: "Get Started",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Sign Up For Free",
};

export const Premium = Template.bind({});
Premium.args = {
  variant: "premium",
  children: "Get Started",
};

export const Pro = Template.bind({});
Pro.args = {
  variant: "pro",
  children: "Get Started",
};
