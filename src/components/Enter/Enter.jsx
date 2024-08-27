import React from "react";
import "../Enter/Enter.css";
import { Container, Wrapper, Title, Button, Input } from "../Login/LoginStyle";
import { Div } from "../Reset/ResetStyled";

function Enter() {
  return (
    <Container>
      <Wrapper>
        <Title>Enter Verification Code</Title>
        <Title.Description>
          We've send a code to <span className="number">+998 90 000 00 00</span>
        </Title.Description>
        <Div.Gap>
          <Input.Num gap="15" />
          <Input.Num gap="15" />
          <Input.Num gap="15" />
          <Input.Num gap="15" />
        </Div.Gap>
        <Button>Reset Password</Button>
        <Title.Description>
          Experiencing issues receiving the code?
        </Title.Description>
        <Div>
          <a id="enter_link" href="">
            Resend code
          </a>
        </Div>
      </Wrapper>
    </Container>
  );
}

export default Enter;
