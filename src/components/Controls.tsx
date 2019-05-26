import React from 'react';
import StopButton from './StopButton';
import StartButton from './StartButton';
import styled from 'styled-components';
import ResetButton from './ResetButton';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50vh;
  padding-top: 20vw;
  width: 100vw;
  height: 30vw;
  align-items: center;
  justify-content: space-between;
`;

interface ControlsProps {
  onReset: () => void;
  onStart: () => void;
  onStop: () => void;
  active: boolean;
}

export default function Controls(props: ControlsProps) {
  const {
    onReset,
    onStart,
    onStop,
    active,
  } = props;

  if (active) {
    return (
      <Wrapper>
        <StopButton onClick={onStop} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StartButton onClick={onStart} />
      <ResetButton onClick={onReset} />
    </Wrapper>
  );
}