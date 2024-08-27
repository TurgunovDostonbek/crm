import styled from "styled-components";
import { Input } from "../Login/LoginStyle";

export const Select = styled.select`
  /* width: 99px; */
  height: 48px;
  padding: 6px 12px;
  gap: 4px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #d0d7de;
  opacity: 0px;
  box-sizing: border-box;
`;

export const Option = styled.option`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: left;
`;

Input.Tel = styled(Input)`
  width: 84%;
  height: 48px;
  padding: 7px 12px;
  border-radius: 0px 8px 8px 0px;
  opacity: 0px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .nomsiz {
    width: 124.67px;
    height: 4px;
    border-radius: 2px 0px 0px 0px;
    opacity: 0px;
    background-color: #bcb5b5;
  }
`;

Div.Gap = styled(Div)`
  gap: 24px;
  margin-top: 30px;
`;
