import React from "react";
import Counter from "./components/Counter";
import styled from "styled-components";
import ScoreProvider from "./provider/ScoreProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Container>
      <Counter />
      <button onClick={() => ScoreProvider.instance.click()}>Click</button>
    </Container>
  );
};
