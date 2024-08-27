import React from "react";
import { Button, Container, Input, Title, Wrapper } from "../Login/LoginStyle";
import { Select, Option, Div } from "./ResetStyled";

function Reset() {
  return (
    <Container>
      <Wrapper>
        <Title>Reset Password</Title>
        <Title.Description>
          Enter your email to reset your password.
        </Title.Description>
        <Title.Label>Phone</Title.Label>
        <Div>
          <Select>
            <Option>UZ</Option>
            <Option>RU</Option>
            <Option>EN</Option>
          </Select>
          <Input.Tel placeholder="+998 90 000 00 00" type="number" />
        </Div>
        <Button>Reset Password</Button>
      </Wrapper>
    </Container>
  );
}

export default Reset;
