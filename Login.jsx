import React from "react";
import {
  Button,
  ChekBox,
  Description,
  Forget,
  Info,
  Input,
  InputWrapper,
  Span,
  Title,
  UserIcon,
  Wrapper,
} from "./Styled";

export const Login = () => {
  return (
    <Wrapper>
      <Description>Already heve an account</Description>
      <Title>Log In Here</Title>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Username" />
      </InputWrapper>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Password" />
      </InputWrapper>
      <Info>
        <Span>
          <ChekBox type="checkbox" />
          Keep me loged in
        </Span>
        <Button select type="submit">
          Log In
        </Button>
      </Info>
      <Forget>Forget password?</Forget>
    </Wrapper>
  );
};

export default Login;
