import React from "react";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormText,
  FormWrap,
  Icon,
  SignInContainer,
} from "./SignInElement";

const SignIn = () => {
  return (
    <SignInContainer>
      <FormWrap>
        <Icon to="/">ajaira</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Sign In</FormButton>
            <FormText>Forgot Password?</FormText>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  );
};

export default SignIn;
