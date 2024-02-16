import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <ol className="list">
                <li className="item">
                  <span>
                    <b>Languages: </b>Java, Python, C++, JavaScript, HTML/CSS,
                    SQL
                  </span>
                </li>
                <li className="item">
                  <span>
                    <b>Databases: </b>PostgreSQL, MongoDB, MySQL, LIMS
                  </span>
                </li>
                <li className="item">
                  <span>
                    <b>Framework: </b>React.js, Node.js, Express, Spring
                    Boot,JUnit, PyTorch
                  </span>
                </li>
                <li className="item">
                  <span>
                    <b>Tools: </b>Git, VS Code, shell/scripting, Docker, Android
                    Studio, Pandas, PySpark
                  </span>
                </li>
              </ol>

              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand develop</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>kalallalal</h5>
                </div>
              </Carousel> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
