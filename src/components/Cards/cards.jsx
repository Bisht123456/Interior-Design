import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = 5;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const items = [
    {
      image: "/Images/lili.jpg",
      heading: "Cassie Shamath",
      paragraph: "LOS ANGELES, CALIFORNIA",
      paragrapht:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris accumsan urna eu pharetra elementum Suspendisse potenti Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.Vestibulum tellus ipsum, rhoncus sed suscipit a eleifendin",
    },
    {
      image:
        "/Images/71c5881cc75cc3fa1f881b411749a8ddb2-eyeglasses.rsquare.w400.webp",
      heading: "Cassie Shamath",
      paragraph: "LOS ANGELES, CALIFORNIA",
      paragrapht:
        "Lorem ipsum djydymhdymjdyhdtgolor sit amet consectetur adipiscing elit Mauris accumsan urna eu pharetra elementum Suspendisse potenti Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.Vestibulum tellus ipsum, rhoncus sed suscipit a eleifendin",
    },
    {
      image: "/Images/51W1XLDZjOL._AC_UY1100_.jpg",
      heading: "Cassie Shamath",
      paragraph: "LOS ANGELES, CALIFORNIA",
      paragrapht:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris accumsan urna eu pharetra elementum Suspendisse potenti Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.Vestibulum tellus ipsum, rhoncus sed suscipit a eleifendin",
    },
    {
      image: "/Images/2ecaa280669d003688fc231a3fd78058.jpg",
      heading: "Cassie Shamath",
      paragraph: "LOS ANGELES, CALIFORNIA",
      paragrapht:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris accumsan urna eu pharetra elementum Suspendisse potenti Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.Vestibulum tellus ipsum, rhoncus sed suscipit a eleifendin",
    },
    {
      image: "/Images/lili.jpg",
      heading: "Cassie Shamath",
      paragraph: "LOS ANGELES, CALIFORNIA",
      paragrapht:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris accumsan urna eu pharetra elementum Suspendisse potenti Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.Vestibulum tellus ipsum, rhoncus sed suscipit a eleifendin",
    },
  ];

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="pb-5">
        <Row>
          <Col lg={4} className="mx-0">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              {" "}
              <Card className="bkcard-img">
                <Card.Body className="body-carali-n ">
                  <Card.Title className="par-grph">
                    <p className="par-grph">MIAMI, FLORIDA</p>
                    <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      View
                    </Button>
                  </Card.Text>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Card className="bkcard-img2 mt-0">
                <Card.Body className="body-carali-n">
                  <Card.Title className="par-grph">
                    <p className="par-grph">NEW YORK, NEW YORK</p>
                    <p className="par-grph">Spotify Satellite Office</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      View
                    </Button>
                  </Card.Text>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Card className="bkcard-img3">
                <Card.Body className="body-carali-n">
                  <Card.Title className="par-grph">
                    <p className="par-grph">MIAMI, FLORIDA</p>
                    <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      View
                    </Button>
                  </Card.Text>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
        </Row>
        <div style={{ marginBottom: "100px" }}>
          <Row>
            <Col lg={4} className="mx-0">
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                {" "}
                <Card className="bkcard-img">
                  <Card.Body className="body-carali-n ">
                    <Card.Title className="par-grph">
                      <p className="par-grph">MIAMI, FLORIDA</p>
                      <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="view-all" variant="primary">
                        View
                      </Button>
                    </Card.Text>
                  </Card.Body>
                  <div className="overlayon-car"></div>
                </Card>
              </div>
            </Col>
            <Col lg={4}>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Card className="bkcard-img2 mt-0">
                  <Card.Body className="body-carali-n">
                    <Card.Title className="par-grph">
                      <p className="par-grph">NEW YORK, NEW YORK</p>
                      <p className="par-grph">Spotify Satellite Office</p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="view-all" variant="primary">
                        View
                      </Button>
                    </Card.Text>
                  </Card.Body>
                  <div className="overlayon-car"></div>
                </Card>
              </div>
            </Col>
            <Col lg={4}>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Card className="bkcard-img3">
                  <Card.Body className="body-carali-n">
                    <Card.Title className="par-grph">
                      <p className="par-grph">MIAMI, FLORIDA</p>
                      <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                    </Card.Title>
                    <Card.Text className="aling-vie-w">
                      <Button className="view-all" variant="primary">
                        View
                      </Button>
                    </Card.Text>
                  </Card.Body>
                  <div className="overlayon-car"></div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div data-aos="fade-up-right">
          <div className="mn-divclr">
            <div>
              <Row className="">
                <>
                  <Col lg={4}>
                    <div className="d-flex justify-content-end align-items-center">
                      <img
                        className="carou-img"
                        src={items[currentIndex]?.image}
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg={4} className="carou-test">
                    <div data-aos="zoom-in-down">
                      <h1>{items[currentIndex]?.heading}</h1>
                    </div>
                    <p>{items[currentIndex]?.paragraph}</p>
                  </Col>
                  <Col lg={4}>
                    <div className="d-flex justify-content-center align-items-center thrid-carousel">
                      {items[currentIndex]?.paragrapht}
                    </div>
                  </Col>
                </>
              </Row>
            </div>
            <div className="pre_next_button">
              <button
                className="butttonone"
                onClick={handleNext}
                style={{
                  display: currentIndex === items.length - 1 ? "none" : "block",
                }}
              >
                NEXT
              </button>
              <button
                className="butttontwo"
                onClick={handlePrevious}
                style={{ display: currentIndex === 0 ? "none" : "block" }}
              >
                PREVIOUS
              </button>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginTop: "60px", padding: "60px 0px" }}
        >
          <div className="service-s">
            <p>OUR TEAM</p>
            <h1>Behind the design.</h1>
          </div>
          <div>
            <button className="button-viewall">VIEW ALL SERVICES</button>
          </div>
        </div>
        <Row>
          <Col lg={4} className="mx-0">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              {" "}
              <Card className="bkcard-img m-0">
                <Card.Body className="body-carali-n ">
                  <Card.Title className="par-grph">
                    <p className="par-grph">MIAMI, FLORIDA</p>
                    <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      ABOUT
                    </Button>
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      marginTop: "100px",
                    }}
                  >
                    <div className="icon-mndiv">
                      <div>
                        <AiFillInstagram className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaFacebook className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaLinkedin className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaYoutube className="icon" />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Card className="bkcard-img2  fsfs">
                <Card.Body className="body-carali-n">
                  <Card.Title className="par-grph">
                    <p className="par-grph">NEW YORK, NEW YORK</p>
                    <p className="par-grph">Spotify Satellite Office</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      ABOUT
                    </Button>
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      marginTop: "100px",
                    }}
                  >
                    <div className="icon-mndiv">
                      <div>
                        <AiFillInstagram className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaFacebook className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaLinkedin className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaYoutube className="icon" />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Card className="bkcard-img3 fssfds">
                <Card.Body className="body-carali-n">
                  <Card.Title className="par-grph">
                    <p className="par-grph">MIAMI, FLORIDA</p>
                    <p className="par-grph">MICROSOFT OFFICE LOUNGE</p>
                  </Card.Title>
                  <Card.Text className="aling-vie-w">
                    <Button className="view-all" variant="primary">
                      ABOUT
                    </Button>
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      marginTop: "100px",
                    }}
                  >
                    <div className="icon-mndiv">
                      <div>
                        <AiFillInstagram className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaFacebook className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaLinkedin className="icon" />
                      </div>
                    </div>
                    <div className="icon-mndiv">
                      <div>
                        <FaYoutube className="icon" />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <div className="overlayon-car"></div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cards;
