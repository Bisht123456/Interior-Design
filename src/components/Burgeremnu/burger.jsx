import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Burger = () => {
  return (
    <>
      <div
        className="d-flex justify-content-end align-items-center gap-5"
        style={{ marginBottom: "40px" }}
      >
        <div className="searchbutton">
          <input type="search" placeholder="...search" className="search" />
          <button className="sea-button" search>
            Search
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
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
      </div>
      <Row>
        <Col lg={4} className="border-ri-ght">
          <div className=" d-flex justify-content-center align-items-center gap-5 bor-der">
            <p className="m-0" style={{ letterSpacing: "6px" }}>
              OUR TEAM
            </p>
            <button className="about">ABOUT US</button>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              VIBHU'S POINT
            </p>
            <p className="m-0" style={{ letterSpacing: "4px" }}>
              CEO
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              RYAN BASER
            </p>
            <p className="m-0" style={{ letterSpacing: "4px" }}>
              CIO
            </p>
          </div>

          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              CARRIE VATH
            </p>
            <p className="m-0 " style={{ letterSpacing: "4px" }}>
              CID
            </p>
          </div>
        </Col>
        <Col lg={4} className="border-ri-ght">
          <div className="d-flex justify-content-center align-items-center gap-4 bor-der">
            <p className="m-0" style={{ letterSpacing: "6px" }}>
              OUR TEAM
            </p>
            <button className="about">PROJECT CATEGORIES</button>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              SPACE PLANNING
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              CUSTOM FURNITURE
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              FURNITURE LAYOUTS
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="d-flex justify-content-center align-items-center gap-4 bo-rder">
            <p className="m-0" style={{ letterSpacing: "6px" }}>
              OUR TEAM
            </p>
            <button className="about">NEWS CATEGORIES</button>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              FURNITURE
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              REMOTE SPACES
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-start gap-5 bor-der on-hov-er">
            <p className="m-0" style={{ fontSize: "18px" }}>
              OFFICE TECH
            </p>
            <p className="m-0 visi-ble" style={{ letterSpacing: "4px" }}>
              <FaArrowRightLong />
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Burger;
