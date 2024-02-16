// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/Mern.png";
import projImg2 from "../assets/img/NLP.webp";
import projImg3 from "../assets/img/gorcery.jpeg";
// import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import "../styles/Projects.css";

// export const ProjectList = () => {
export const projectList = [
  {
    title: "A comprehensive Expenses Tracker Application using the MERN STACK",
    description:
      "1) Created responsive user interfaces with React and JavaScript, integrating components for user authentication, authorization and etc., resulting in about 10% acceleration of the development process. 2)Designed and built RESTful APIs with Node.js and Express, enabling smooth communication between frontend and the database. Implemented React Router for seamless navigation. 3) Developed a robust authentication system with JSON Web Tokens to protect user information. 4)Designed and implemented MongoDB database schemas and utilized reference types to facilitate seamless data linking between user profiles and associated bills within the Expenses Tracker Application.",
    imgUrl: projImg1,
    skills: "MongoDB, Express, React, Node, JavaScript",
  },
  {
    title:
      "NLP Project: Comparing deep learning and concept extraction based methods for patient phenotyping from clinical narratives",
    description:
      "1)Utilized Spark for efficient dataset preprocessing for MIMIC-III and achieved 20% process efficiency acceleration. Performed Sql join on noteevents and annotations using subject IDs and hospital admission IDs. 2) Train Gensim  Word2Vec for text to vector transformation. Implemented data splitting and utilized commonly used models in NLP for text classification with Pytorch, enabling accurate classification of medical conditions that exist only in clinical narratives.",
    imgUrl: projImg2,
    skills: "Spark, Pytorch",
  },
  {
    title: "Grocery Delivery System",
    description:
      "1) Utilized Spring Boot, PostgreSQL and Java for backend development, including features like ranking top-performing salespersons, identifying the store with the highest revenue, implementing revenue update, etc.. 2)Employed HTML, CSS, and Javascript for the frontend, including features like admin/users login and logout, user authorization and authentication, applying coupons to orders, returning items, tracking store revenues, etc.. 3)Utilized Docker for containerization, enhancing application portability and streamlining deployment processes.t",
    imgUrl: projImg3,
    skills: "Spring Boot, PostgreSQL, Java, CSS, JavaScript",
  },
];
// return (
//   <section className="project" id="projects">
//     <Container>
//       <Row>
//         <Col>
//           <h2>Projects</h2>
//           <p>All those projects abut Maohua Pan</p>
//           <Tab.Container id="projects-tabs" defaultActiveKey="first">
//             <Nav variant="pills" id="pills-tab">
//               <Nav.Item>
//                 <Nav.Link eventKey="first">Tab 1</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="second">Tab 2</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="third">Tab 3</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content>
//               <Tab.Pane eventKey="first">
//                 <Row>
//                   {projectList.map((projectList, index) => {
//                     return <ProjectCard key={index} {...projectList} />;
//                   })}
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="second">Maohua</Tab.Pane>
//               <Tab.Pane eventKey="second">Pan</Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// );
//};
