import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.JPG";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../styles/Banner.css";
import "animate.css";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Full-Stack Engineer"];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
      // console.log("tick");
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="algin-items-center">
          <Col className="banner-text">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portofolio</span>
                  <h1>
                    {`I'm Maohua Pan     `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "Full-Stack Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm Maohua Pan, a full-stack engineer. I worked as Scientist
                    in Air Liquide for 5 years, and got my master's degree in
                    Computer Science recently.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col>
            <img src={headerImg} alt="headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
