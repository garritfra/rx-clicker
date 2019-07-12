import React, { useState, useEffect } from "react";
import { BehaviorSubject, interval } from "rxjs";
import { throttle } from "rxjs/operators";
import styled from "styled-components";
import ScoreProvider from "../provider/ScoreProvider";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Counter = styled.h1`
  font-family: sans-serif;
`;

export default () => {
  const [score, setScore] = useState(ScoreProvider.instance.score.value);
  useEffect(() => {
    ScoreProvider.instance.score
      .pipe(throttle(() => interval(100)))
      .subscribe({ next: v => setScore(v) });
  }, []);

  return (
    <Container>
      <Counter>{score}</Counter>
    </Container>
  );
};
