import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/eci_2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "../App.css";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="skill drk" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn project drkin">
              <section id="project">
                <Container>
                  <Row>
                    <Col size={12}>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn"
                                : ""
                            }
                          >
                            {/* <h2>Projects</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p> */}
                            <Tab.Container
                              id="projects-tabs"
                              defaultActiveKey="first"
                            >
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              >
                                <Nav.Item>
                                  <Nav.Link eventKey="first">
                                    Ticketing System
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Rewards</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">
                                    Collaborations
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                              <Tab.Content
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <Tab.Pane eventKey="first">
                                  <Row className="p-5 align-items-center d-flex justify-content-around">
                                    <div className="col-7">
                                      <div className="main-banner position-relative ">
                                        <img
                                          src={img2}
                                          className="img-fluid rounded-3"
                                          alt="main banner"
                                        />
                                        <div className="main-banner-content position-absolute">
                                          <h4>SUPERCHARGED FOR PROS.</h4>
                                          <h5>iPad S13+ Pro.</h5>
                                          <p>From $999.00 or $41.62/mo.</p>
                                          <Link className="button">
                                            BUY NOW
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <Row className="p-5 align-items-center d-flex justify-content-around">
                                    <div className="col-7">
                                      <div className="main-banner position-relative ">
                                        <img
                                          src="images/main-banner-1.jpg"
                                          className="img-fluid rounded-3"
                                          alt="main banner"
                                        />
                                        <div className="main-banner-content position-absolute">
                                          <h4>SUPERCHARGED FOR PROS.</h4>
                                          <h5>iPad S13+ Pro.</h5>
                                          <p>From $999.00 or $41.62/mo.</p>
                                          <Link className="button">
                                            BUY NOW
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <Container class1="famous-wrapper py-5 home-wrapper-2">
                                    <div className="row align-items-center d-flex justify-content-center">
                                      <div className="col-3">
                                        <div className="famous-card position-relative">
                                          <img
                                            src="images/famous-2.webp"
                                            className="img-fluid"
                                            alt="famous"
                                          />
                                          <div className="famous-content position-absolute">
                                            <h5 className="text-dark">
                                              Studio Display
                                            </h5>
                                            <h6 className="text-dark">
                                              600 nits of brightness.
                                            </h6>
                                            <p className="text-dark">
                                              27-inch 5K Retina display
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3">
                                        <div className="famous-card position-relative">
                                          <img
                                            src="images/famous-2.webp"
                                            className="img-fluid"
                                            alt="famous"
                                          />
                                          <div className="famous-content position-absolute">
                                            <h5 className="text-dark">
                                              Studio Display
                                            </h5>
                                            <h6 className="text-dark">
                                              600 nits of brightness.
                                            </h6>
                                            <p className="text-dark">
                                              27-inch 5K Retina display
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3">
                                        <div className="famous-card position-relative">
                                          <img
                                            src="images/famous-3.webp"
                                            className="img-fluid"
                                            alt="famous"
                                          />
                                          <div className="famous-content position-absolute">
                                            <h5 className="text-dark">
                                              smartphones
                                            </h5>
                                            <h6 className="text-dark">
                                              Smartphone 13 Pro.
                                            </h6>
                                            <p className="text-dark">
                                              Now in Green. From $999.00 or
                                              $41.62/mo. for 24 mo. Footnote*
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Container>
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        )}
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
              </section>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
