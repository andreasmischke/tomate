import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
import TextTimer from './TextTimer';

const Wrapper = styled.main`
  background: #222;
  height: 100vh;
  width: 100vw;
`;

interface TimerProps {
  color: string;
  endDate: Date;
  duration: number;
  active: boolean;
  onFinished: () => void,
}

function fillZeroLeft(n: number): string {
  return String(n).padStart(2, '0');
}

function secondsToString(seconds: number) {
  const minutes = fillZeroLeft(Math.floor(seconds / 60));
  const secs = fillZeroLeft(seconds % 60);

  return `${minutes}:${secs}`;
}

export default function Timer(props: TimerProps) {
  const {
    color,
    endDate,
    duration,
    active,
    onFinished,
  } = props;

  const [timeLeft, setTimeLeft] = useState<string>(secondsToString(duration));
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    function updateCalculateRemainingTime(): void {
      console.log('update', new Date().toString());
      
      const msLeft = endDate.getTime() - Date.now();
      const seconds = Math.floor(msLeft / 1000);

      setTimeLeft(secondsToString(seconds));
      setPercentage((1 - (seconds) / duration) * 100);

      if(msLeft < 1000) {
        onFinished();
      }
    }

    if (active) {
      const interval = setInterval(updateCalculateRemainingTime, 1000);
      return () => clearInterval(interval);
    }
  }, [endDate, active])

  return (
    <Wrapper>
      <TextTimer time={timeLeft} />
      <ProgressBar color={color} percentage={percentage} />
    </Wrapper>
  );
}
