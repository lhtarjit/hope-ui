import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const WithImage = () => (
  <Avatar content={<img src="google.svg" alt="Avatar" />} size="medium" />
);

export const WithInitials = () => <Avatar content="JD" size="medium" />;

export const StackedAvatars = () => (
  <div>
    <Avatar content="JD" size="medium" bgColor="#007bff" stacked />
    <Avatar content="AB" size="medium" bgColor="#ff6347" stacked />
    <Avatar content="XY" size="medium" bgColor="#20b2aa" stacked />
  </div>
);

export const RegularAvatar = () => (
  <Avatar content="JD" size="medium" bgColor="#007bff" />
);
