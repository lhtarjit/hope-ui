import React from "react";
import ThirdParty from "./ThirdParty";

export default {
  title: "Components/ThirdParty",
  component: ThirdParty,
};

const Template = (args) => <ThirdParty {...args} />;

export const SignInTP = Template.bind({});
SignInTP.args = {
  line1: "or sign in with other accounts?",
  line2: "Don't have an account?",
  line3: "Click here to sign up.",
};

export const SignUpTP = Template.bind({});
SignUpTP.args = {
  line1: "or sign up with other accounts??",
  line2: "Already have an Account",
  line3: "Sign in",
};
