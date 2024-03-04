import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Burger from "../Burgeremnu/burger";
import { FaArrowDownLong } from "react-icons/fa6";
import Cards from "../Cards/cards";
import { MdOutlineShapeLine } from "react-icons/md";
import { RiSoundModuleFill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardPage = () => {
  const [isIconChange, setIsIconChange] = useState(false);

  const [colorChange, setColorChange] = useState(false);

  const [scroll, setScroll] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);

  // const handleChangeIcon = () => {
  //   setIsIconChange(true);
  // };

  const scrollToBottom = () => {
    const targetPosition = 900;

    window.scrollTo({ top: targetPosition, behaviour: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Container fluid>
        <div className="bac-g-m">
          <div style={{ padding: "0px 100px 0px 100px" }}>
            <div
              className={colorChange ? "scrollnavar white_bg" : "topnav-br "}
            >
              <div className="d-flex justify-content-between align-items-center mainnavdi-d ">
                <div className="navbar">RAHUL</div>
                <div
                  className="thr-eicon"
                  onClick={() => setIsIconChange(!isIconChange)}
                >
                  <div className={!isIconChange ? "iconmain-div" : ""}>
                    <div className={isIconChange ? "left" : ""}></div>
                    <div className={isIconChange ? "middle" : ""}></div>
                    <div className={isIconChange ? "right" : ""}></div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-5">
                <p className={colorChange ? " changeonWind-ow" : "right-tex-t"}>
                  SERVICES
                </p>
                <p className={colorChange ? " changeonWind-ow" : "right-tex-t"}>
                  PROJECTS
                </p>
                <p className={colorChange ? " changeonWind-ow" : "right-tex-t"}>
                  CONTACT
                </p>
              </div>
            </div>
            <div className="pos-absolu">
              {isIconChange && (
                <div className={isIconChange ? "opnenbar" : "closebar"}>
                  <Burger isIconChange={isIconChange} />
                </div>
              )}
            </div>
            <div className="tex-t">
              <span>INSIDE INNOVATION</span>
              <h1>
                Interior design
                <br /> that matters
              </h1>
              <button>schedule a call</button>
              <div className="d-flex justify-content-end align-items-center">
                <div className="downword-arr-o" onClick={scrollToBottom}>
                  <FaArrowDownLong className="icondownarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "0px 50px ", marginTop: "70px" }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "60px", padding: "60px 0px" }}
          >
            <div className="service-s">
              <p>SERVICES</p>
              <h1>We do it best.</h1>
            </div>
            <div>
              <button className="button-viewall">VIEW ALL SERVICES</button>
            </div>  
          </div>
          <Row>
            <Col lg={4} className="">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Card className="bkcard-i">
                  <div style={{ padding: "30px 40px" }}>
                    <div className="ic-ma-on">
                      <BiCategory className="ic-oncat" />
                    </div>
                  </div>
                  <Card.Body className="hfjksd">
                    <Card.Title className="lor0un">
                      <p className="spa-plan">Space Planning</p>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris accumsan urna eu pharetra elementum.
                      </p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="sc-call" variant="primary">
                        SCHEDULE A CALL
                      </Button>
                    </Card.Text>
                  </Card.Body>
                  <div className="overlay"></div>
                </Card>
              </div>
            </Col>
            <Col lg={4} className="">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Card className="bkcard-i">
                  <div style={{ padding: "30px 40px" }}>
                    <div className="ic-ma-on">
                      <RiSoundModuleFill className="ic-oncat" />
                    </div>
                  </div>
                  <Card.Body className="hfjksd">
                    <Card.Title className="lor0un">
                      <p className="spa-plan">Space Planning</p>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris accumsan urna eu pharetra elementum.
                      </p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="sc-call" variant="primary">
                        SCHEDULE A CALL
                      </Button>
                    </Card.Text>
                    <div className="overlay"></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} className="">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Card className="bkcard-i">
                  <div style={{ padding: "30px 40px" }}>
                    <div className="ic-ma-on">
                      <MdOutlineShapeLine className="ic-oncat" />
                    </div>
                  </div>
                  <Card.Body className="hfjksd">
                    <Card.Title className="lor0un">
                      <p className="spa-plan">Space Planning</p>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris accumsan urna eu pharetra elementum.
                      </p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="sc-call" variant="primary">
                        SCHEDULE A CALL
                      </Button>
                    </Card.Text>
                    <div className="overlay"></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="bkone-img">
              <p className="abt-t-id">ABOUT THIS</p>
              <h1>
                We're innovating the way companies reinvent their office spaces
                for the remote worksforce.
              </h1>
              <div className="pibhu">
                <div className="con-ten"></div>
                <p className="po-sti">PIBHU POINT, CEO</p>
              </div>
              <div className="">
                <button className="buttonright-ar">
                  <IoMdArrowDropright className="icon-rg-t" />
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="bc-img3lay">
              <div>
                <p> EXPLORE OUR WORK</p>
                <h1>See What we can do together.</h1>
                <button className="butt-on-allpr-j">VIEW ALL PROJECTS</button>
              </div>
            </div>
          </div>
          <Row style={{ marginBottom: "40px" }}>
            <Col lg={4} className="three-bo-x">
              <p>SPACE PLANNING</p>
            </Col>
            <Col lg={4} className="three-bo-x">
              <p>SPACE PLANNING</p>
            </Col>
            <Col lg={4} className="three-bo-x">
              <p>SPACE PLANNING</p>
            </Col>
          </Row>
          <Cards />
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
