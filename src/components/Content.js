import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Content() {
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
              left: "40%",
              top: "50px",
              fontSize: "20px",
            }}
          >
            69
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "1.4px" }}>
            <CircularProgress
              size="8rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
            />
          </div>

          <CircularProgress
            size="8rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={69}
          />
          <span>Days</span>
        </div>

        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "40%",
              top: "50px",
              fontSize: "20px",
            }}
          >
            36
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="8rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
            />
          </div>
          <CircularProgress
            size="8rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={36}
          />
          <span>Hours</span>
        </div>
        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "40%",
              top: "50px",
              fontSize: "20px",
            }}
          >
            23
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="8rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
            />
          </div>
          <CircularProgress
            size="8rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={23}
          />
          <span>Minutes</span>
        </div>
        <div className="abc" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "40%",
              top: "50px",
              fontSize: "20px",
            }}
          >
            12
          </span>
          <div style={{ position: "absolute", top: "-0.4px", left: "-1px" }}>
            <CircularProgress
              size="8rem"
              style={{ color: "#545454" }}
              variant="determinate"
              value={100}
            />
          </div>
          <CircularProgress
            size="8rem"
            style={{ color: "#39D5D9" }}
            variant="determinate"
            value={12}
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
