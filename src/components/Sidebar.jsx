import React from 'react'
import { BsImage } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{
          width: "280px",
          height: "982px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#C4C4C4",
            height: "53px",
            width: "193px",
            marginTop: "50px",
          }}
        >
          <BsImage />
        </div>

        <div
          className="d-flex justify-content-evenly"
          style={{ height: "79px", padding: "12px" }}
        >
          <div
            className="d-flex flex-row align-items-center"
            style={{
              height: "63px",
              width: "232px",
              borderRadius: "12px",
              padding: "12px",
              backgroundColor: "#FAFAFA",
            }}
          >
            <img src="profile.png" style={{ width: "32px", height: "32px" }} />
            <div className="d-flex flex-column align-items-start ms-1">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "19.5px",
                }}
              >
                Lekan Okeowo
              </label>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14.63px",
                  color: "#AAAAAA",
                }}
              >
                demo@gmail.com
              </label>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "280px",
            height: "88px",
            padding: "20px 20px 20px 5px",
          }}
        >
          <div
            className="d-flex align-items-center "
            style={{
              height: "48px",
              width: "232px",
              borderRight: "3.27px solid #4EB7F2",
              margin: "20px",
            }}
          >
            <img
              src="category.png"
              className="me-2"
              style={{ fontSize: "19.5px", color: "#4EB7F2" }}
            />
            <label
              style={{
                color: "#4EB7F2",
                fontSize: "19.5px",
                fontWeight: "700",
                lineHeight: "19.5px",
                fontSize: "16px",
              }}
            >
              Dashboard
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar