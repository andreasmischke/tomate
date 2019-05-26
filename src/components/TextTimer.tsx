import React from 'react';
import styled from 'styled-components';

const Timer = styled.div`
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Time = styled.span`
  display: block;
  font-size: 30vw;
  color: #fff;
`

interface TextTimerProps {
  time: string;
}

export default function TextTimer(props: TextTimerProps) {
  const {
    time,
  } = props;

  return (
    <Timer>
      <Time>
        {time}
      </Time>
    </Timer>
  )
};