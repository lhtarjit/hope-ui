import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const RememberMe = Template.bind({});
RememberMe.args = {
  label: "Remember me?",
  onChange: () => {},
};

export const AgreeConditions = Template.bind({});
AgreeConditions.args = {
  label: "I agree with the terms of use",
  onChange: () => {},
};
