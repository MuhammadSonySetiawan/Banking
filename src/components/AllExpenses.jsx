import React from 'react'

import { BsChevronDown } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

function AllExpenses() {
  return (
    <>
      <div
        style={{
          width: "604px",
          height: "320px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          margin: "40px 24px ",
          padding: "24px",
        }}
      >
        <div className="d-flex flex-row justify-content-between">
          <label>All Expenses</label>

          <div className="dropdown">
            <button
              className="btn "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderColor: "#F1F1F1" }}
            >
              Monthly <BsChevronDown />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  january
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  February
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  March
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  April
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  May
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  June
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  July
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  August
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  September
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  October
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  November
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  December
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex flex-row justify-content-between mt-3">
            {/* menu 1*/}
            <div
              style={{
                width: "180px",
                height: "216px",
                borderRadius: "12px",
                padding: "16px 20px",
                backgroundColor: "#4EB7F2",
              }}
            >
              <div className="d-flex mb-4 justify-content-between align-items-center">
                <div
                  className="rounded-circle "
                  style={{
                    backgroundColor: "#5FBEF3",
                    width: "60px",
                    height: "60px",
                    textAlign: "center",
                    paddingTop: "15px",
                  }}
                >
                  <img src="moneys.png" />
                </div>
                <HiChevronRight
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#FFFFFF",
                  }}
                />
              </div>

              <div style={{ gap: "16px", color: "#FFFFFF", gap: "12px" }}>
                <div style={{}}>
                  <h4 style={{ fontSize: "16px" }}>Balance</h4>
                  <label style={{ fontSize: "14px" }}>April 2022</label>
                </div>
                <h5>$20,129</h5>
              </div>
            </div>

            {/* menu 2 */}
            <div
              style={{
                width: "180px",
                height: "216px",
                borderRadius: "12px",
                padding: "16px 20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #F1F1F1",
              }}
            >
              <div className="d-flex mb-4 justify-content-between align-items-center">
                <div
                  className="rounded-circle "
                  style={{
                    backgroundColor: "#FAFAFA",
                    width: "60px",
                    height: "60px",
                    textAlign: "center",
                    paddingTop: "15px",
                  }}
                >
                  <img src="card-receive.png" />
                </div>
                <HiChevronRight
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#064061",
                  }}
                />
              </div>

              <div style={{ gap: "16px", color: "#FFFFFF", gap: "12px" }}>
                <div style={{}}>
                  <h4 style={{ fontSize: "16px", color: "#064061" }}>Income</h4>
                  <label style={{ fontSize: "14px", color: "#AAAAAA" }}>
                    April 2022
                  </label>
                </div>
                <h5 style={{ color: "#4EB7F2" }}>$20,129</h5>
              </div>
            </div>

            {/* menu 3*/}
            <div
              style={{
                width: "180px",
                height: "216px",
                borderRadius: "12px",
                padding: "16px 20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #F1F1F1",
              }}
            >
              <div className="d-flex mb-4 justify-content-between align-items-center">
                <div
                  className="rounded-circle "
                  style={{
                    backgroundColor: "#FAFAFA",
                    width: "60px",
                    height: "60px",
                    textAlign: "center",
                    paddingTop: "15px",
                  }}
                >
                  <img src="card-send.png" />
                </div>
                <HiChevronRight
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#064061",
                  }}
                />
              </div>

              <div style={{ gap: "16px", color: "#FFFFFF", gap: "12px" }}>
                <div style={{}}>
                  <h4 style={{ fontSize: "16px", color: "#064061" }}>
                    Expenses
                  </h4>
                  <label style={{ fontSize: "14px", color: "#AAAAAA" }}>
                    April 2022
                  </label>
                </div>
                <h5 style={{ color: "#4EB7F2" }}>$20,129</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllExpenses