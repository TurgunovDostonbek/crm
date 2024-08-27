import React from "react";
import { Button, Container, Input, Title, Wrapper } from "./LoginStyle";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Login to your account</Title>
        <Title.Description>Enter your details to login.</Title.Description>
        <Title.Label>
          Email Address <span className="star">*</span>
        </Title.Label>
        <Input placeholder="Enter your email address" />
        <Title.Label>
          Password <span className="star">*</span>
        </Title.Label>
        <Input placeholder="Enter your Password" />
        <Title.Label cl="#8C8C8C">Forgot password?</Title.Label>
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
}

export default Login;
