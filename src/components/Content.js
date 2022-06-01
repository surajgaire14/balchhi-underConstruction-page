import React, { useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import Countdown from "react-countdown";
import { ReactDOM } from "react";

// Random component

export default function Content() {
  const [Countdown, setCountDown] = React.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  let interval = useRef();
  let MIN = 0;
  let MAX = 60;
  let maxHours = 24;
  let minHours = 0;
  let maxDays = 365;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
  const normaliseHours = (value) =>
    ((value - minHours) * 100) / (maxHours - minHours);
  const normaliseDays = (value) => ((value - MIN) * 100) / (maxDays - MIN);

  React.useEffect(() => {
    const duration = new Date("July 30,2022 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const timeGap = duration - now;
      const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

      if (timeGap < 0) {
        console.log(timeGap);
        clearInterval(interval.current);
      } else {
        setCountDown({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="main">
      <div className="content">
        <h1> We're</h1>
        <h1 className="gradient_text"> Getting Ready</h1>
        <h1>to Launch in</h1>
      </div>
      <div className="progress_bar">
        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "38%",
              top: "34px",
              fontSize: "20px",
            }}
          >
            {Countdown.days}
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "1.4px" }}>
            <CircularProgress
              size="6rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
              thickness={1.5}
            />
          </div>

          <CircularProgress
            size="6rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={normaliseDays(Countdown.days)}
            thickness={1.5}
          />
          <span>Days</span>
        </div>

        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "38%",
              top: "34px",
              fontSize: "20px",
            }}
          >
            {Countdown.hours}
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="6rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
              thickness={1.5}
            />
          </div>
          <CircularProgress
            size="6rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={normaliseHours(Countdown.hours)}
            thickness={1.5}
          />
          <span>Hours</span>
        </div>
        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "38%",
              top: "34px",
              fontSize: "20px",
            }}
          >
            {Countdown.minutes}
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="6rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
              thickness={1.5}
            />
          </div>
          <CircularProgress
            size="6rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={normalise(Countdown.minutes)}
            thickness={1.5}
          />
          <span>Minutes</span>
        </div>
        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "38%",
              top: "34px",
              fontSize: "20px",
            }}
          >
            {Countdown.seconds}
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="6rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
              thickness={1.5}
            />
          </div>
          <CircularProgress
            size="6rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={normalise(Countdown.seconds)}
            thickness={1.5}
          />
          <span>Seconds</span>
        </div>
      </div>
      <div className="paragraph">
        Our website is under construction, we are working very hard to give you
        the <br />
        best experience on our new website.
      </div>
      <div className="lastline">
        <p>All rights reserved &copy; 2022</p>
      </div>
    </div>
  );
}
