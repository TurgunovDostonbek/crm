import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid coral; */
`;

const Side = styled.div`
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  border: 1px solid red;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  margin: 16px;
  background: white;
`;

export { Container, Side, Body, Wrapper };
