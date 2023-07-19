import React from "react";
import PriceCard from "./PriceCard";

export default {
  title: "Cards/Price Card",
  component: PriceCard,
};

const Template = (args) => <PriceCard {...args} />;

export const Free = Template.bind({});
Free.args = {
  price: "$0",
  plan: "Free",
  feature1: "10 users included",
  feature2: "2GB of storage",
  feature3: "Email support",
  feature4: "Help center access",
  variant: "secondary",
  children: "Sign Up For Free",
};

export const Pro = Template.bind({});
Pro.args = {
  price: "$15",
  plan: "Pro",
  feature1: "20 users included",
  feature2: "10GB of storage",
  feature3: "Priority Email support",
  feature4: "Help center access",
  variant: "pro",
  children: "Get Started",
};

export const Enterprise = Template.bind({});
Enterprise.args = {
  price: "$29",
  plan: "Enterprise",
  feature1: "30 users included",
  feature2: "15GB of storage",
  feature3: "Call and email support",
  feature4: "Help center access",
  variant: "primary-small",
  children: "Get Started",
};

export const Premium = Template.bind({});
Premium.args = {
  price: "$49",
  plan: "Premium",
  feature1: "50 users included",
  feature2: "60GB of storage",
  feature3: "24x7 call support",
  feature4: "Help center access",
  variant: "premium",
  children: "Get Started",
};
