import React, { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";
import styled from "styled-components";
import ScoreProvider from "../provider/ScoreProvider";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Counter = styled.h1``;

export default () => {
  const [score, setScore] = useState(ScoreProvider.instance.score.value);
  useEffect(() => {
    ScoreProvider.instance.score.subscribe({ next: v => setScore(v) });
  }, []);

  return (
    <Container>
      <Counter>{score}</Counter>
    </Container>
  );
};
