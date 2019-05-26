import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';
import { COLORS } from './constants/colors';

export default function App() {
  const duration = 0.5 * 60;
  const [endDate] = useState<Date>(new Date(Date.now() + duration * 1000 + 1000));
  const [active, setActive] = useState<boolean>(true);

  return (
    <Timer
      color={COLORS.GREEN}
      duration={duration}
      endDate={endDate}
      active={active}
      onFinished={() => setActive(false)}
    />
  );
}
