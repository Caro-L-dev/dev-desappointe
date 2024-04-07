import { useEffect, useState } from "react";

interface CountdownProps {
  initialValue: number;
  onCountdownEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  initialValue,
  onCountdownEnd,
}) => {
  const [countdown, setCountdown] = useState<number>(initialValue);

  const COUNTDOWN_UPDATE_ONCE_PER_SECOND = 1000;
  const DECREMENT = 1;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - DECREMENT);
    }, COUNTDOWN_UPDATE_ONCE_PER_SECOND);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      onCountdownEnd();
    }
  }, [countdown, onCountdownEnd]);

  return <span data-testid="countdown-component">{countdown}</span>;
};

export default Countdown;
