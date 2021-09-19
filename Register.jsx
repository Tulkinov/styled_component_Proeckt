import React from "react";
import {
  Description,
  Title,
  Wrapper,
  InputWrapper,
  Input,
  UserIcon,
  Button,
} from "./Styled";

export const Register = () => {
  return (
    <Wrapper>
      <Description>Don`t have an account?</Description>
      <Title>Register Now</Title>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Username" />
      </InputWrapper>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Mail" />
      </InputWrapper>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Password" />
      </InputWrapper>
      <Button>Register</Button>
    </Wrapper>
  );
};

export default Register;
