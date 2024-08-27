import React from "react";
import { Button, Container, Input, Title, Wrapper } from "../Login/LoginStyle";
import { Div } from "../Reset/ResetStyled";

function NewPassword() {
  return (
    <Container>
      <Wrapper>
        <Title>New Password</Title>
        <Title.Description>
          Set up a new password to protect your account.
        </Title.Description>
        <Title.Label>
          New Pasword <span className="star">*</span>
        </Title.Label>
        <Input />
        <Title.Label>
          Confirm Pasword <span className="star">*</span>
        </Title.Label>
        <Input />
        <Div.Gap>
          <div className="nomsiz"></div>
          <div className="nomsiz"></div>
          <div className="nomsiz"></div>
        </Div.Gap>
        <Button>Continue</Button>
      </Wrapper>
    </Container>
  );
}

export default NewPassword;
