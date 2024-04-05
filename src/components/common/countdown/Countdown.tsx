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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

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
