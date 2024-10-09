import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 414px;
  padding: 12px 20px 12px 20px;
  /* border: 1px solid red; */
  opacity: 0px;
  .star {
    color: red;
  }
  .number {
    color: black;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  color: #1f1f1f;
  margin-top: 5px;
`;

Title.Description = styled(Title)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: #8c8c8c;
`;

Title.Label = styled(Title)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.005em;
  text-align: left;
  margin-top: 32px;
  margin-bottom: 5px;
  color: ${({ cl }) => cl};
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px 12px 8px 12px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #d0d7de;
  opacity: 0px;
  box-sizing: border-box;
`;

Input.Num = styled(Input)`
  width: 88.5px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #e2e4e9;
  opacity: 0px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px 18px 12px 18px;
  border-radius: 8px;
  border: none;
  opacity: 0px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: center;
  color: #ffffff;
  background-color: #1890ff;
  margin-top: 35px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;
