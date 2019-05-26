import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  background: ${props => props.color};
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
`;

interface ProgressProps {
  percentage: number;
}
const Progress = styled.div<ProgressProps>`
  background: #ffffff22;
  height: ${props => `${props.percentage}%`};
  width: 100vw;
`;

interface ProgressBarProps {
  color: string;
  percentage: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const {
    color,
    percentage,
  } = props;

  return (

    <Bar color={color}>
      <Progress percentage={percentage} />
    </Bar>
  );
}