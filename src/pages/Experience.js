import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#121212">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2018"
          iconStyle={{ background: "#121212", colo: "#fff" }}
        >
          <h3 className="PHD">Ph.D. University of Florida, Gainesville, FL</h3>
          <p>Environmental Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2023"
          iconStyle={{ background: "#3e497a", colo: "#fff" }}
        >
          <h3 className="PHD"> Air Liquide Electronics, Fremont, CA</h3>
          <p>Scientist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2023"
          iconStyle={{ background: "#e9d35b", colo: "#fff" }}
        >
          <h3 className="PHD">
            M.S. Georgia Institute of Technology, Georgia, GA
          </h3>
          <p>Computer Science, </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
