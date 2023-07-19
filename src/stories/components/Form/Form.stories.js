import React from "react";
import "./Form.css";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";
import { Small } from "../Input/Input.stories";
import { RememberMe } from "../Checkbox/Checkbox.stories";
import { AgreeConditions } from "../Checkbox/Checkbox.stories";
import { SignInTP } from "../ThirdParty/ThirdParty.stories";
import { SignUpTP } from "../ThirdParty/ThirdParty.stories";

export default {
  title: "Forms/Form",
};

export const Signin = () => (
  <div>
    <div div className="container">
      <div className="logo-container">
        <img className="logo" src="logo.svg" alt=""></img>
        <text className="logo-text">Hope UI</text>
      </div>
      <div className="sign-in-container">
        <text className="sign-in">Sign In</text>
        <text className="sign-in-content">Sign in to stay connected</text>
      </div>
      <text className="username">Username</text>
      <Large {...Large.args} />
      <text className="password">Password</text>
      <Large {...Large.args} />

      <div className="forgot-password">
        <RememberMe {...RememberMe.args} />
        <text className="forgot-password-text">Forgot password</text>
      </div>
      <div className="primary-container">
        <Primary>Sign in</Primary>
      </div>
      <div className="tp-container">
        <SignInTP {...SignInTP.args} />
      </div>
    </div>
  </div>
);

export const Signup = () => (
  <div div className="container">
    <div className="logo-container">
      <img className="logo" src="logo.svg" alt=""></img>
      <text className="logo-text">Hope UI</text>
    </div>
    <div className="sign-up-container">
      <text className="sign-in">Sign Up</text>
      <text className="sign-in-content">Create your Hope UI account</text>
    </div>
    <div>
      <div className="info-box">
        <div className="info-container">
          <text className="username">First Name</text>
          <Small {...Small.args} />
        </div>
        <div className="info-container">
          <text className="username">Last Name</text>
          <Small {...Small.args} />
        </div>
      </div>
      <div className="info-box">
        <div className="info-container">
          <text className="username">Email</text>
          <Small {...Small.args} />
        </div>
        <div className="info-container">
          <text className="username">Phone no.</text>
          <Small {...Small.args} />
        </div>
      </div>
      <div className="info-box">
        <div className="info-container">
          <text className="username">Password</text>
          <Small {...Small.args} />
        </div>
        <div className="info-container">
          <text className="username">Confirm Password</text>
          <Small {...Small.args} />
        </div>
      </div>
      <div className="agree-conditions">
        <AgreeConditions {...AgreeConditions.args} />
      </div>
      <div className="primary-container">
        <Primary>Sign up</Primary>
      </div>
    </div>
    <div className="tp-container">
      <SignUpTP {...SignUpTP.args} />
    </div>
  </div>
);
