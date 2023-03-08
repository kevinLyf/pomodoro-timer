import { useEffect, useState } from "react";
import { Button, Timer, Container, TimerBox } from "./styles";
import Global from "./styles/global";

const COUNTDOWN_INITIAL_IN_SECONDS: number = 25 * 60; // 25 minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState<number>(
    COUNTDOWN_INITIAL_IN_SECONDS
  );
  const [timerMode, setTimerMode] = useState<boolean>(false);
  const minutes: number = Math.floor(secondsAmount / 60);
  const seconds: number = Math.floor(secondsAmount % 60);
  const [pomodoroAmount, setPomodoroAmount] = useState<number>(1);

  const startTimer = () => {
    if (!timerMode) {
      return setTimerMode(true);
    } else {
      return setTimerMode(false);
    }
  };

  useEffect(() => {
    if (secondsAmount > 0) {
      if (timerMode) {
        const timer = setTimeout(() => {
          setSecondsAmount((state) => state - 1);
        }, 1000);

        return () => clearTimeout(timer);
      }
    } else {
      alert("ACABOU");
      setTimerMode(false);
      setPomodoroAmount((state) => state + 1);
      console.log(pomodoroAmount);
      pomodoroAmount % 2 === 0
        ? setSecondsAmount(COUNTDOWN_INITIAL_IN_SECONDS)
        : setSecondsAmount(15 * 60);
    }
  }, [secondsAmount, timerMode]);

  return (
    <>
      <Container>
        <TimerBox>
          <Timer>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Timer>
          <Button onClick={startTimer} isStart={!timerMode}>
            {!timerMode ? "START" : "PAUSE"}
          </Button>
        </TimerBox>
      </Container>
      <Global />
    </>
  );
}

export default App;
