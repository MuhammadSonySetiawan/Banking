import React from 'react'

import { BsChevronDown } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

import '../styles/AllExpenses.css';
function AllExpenses() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          margin: "40px 24px ",
          padding: "24px",
        }}
      >
        <div className="d-flex viewAllExpensesUp">
          <label
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "24.38px",
            }}
          >
            All Expenses
          </label>

          <div className="dropdown">
            <button
              className="btn "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                width: "134px",
                height: "48px",
                borderRadius: "12px",
                borderColor: "#F1F1F1",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19.5px",
              }}
            >
              Monthly <BsChevronDown />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  January
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

        <div className="d-flex flex-wrap justify-content-between mt-3 menuDown">
          {/* menu 1*/}
          <div
            className="menuDownSpasi"
            style={{
              width: "180px",
              height: "216px",
              borderRadius: "12px",
              padding: "16px 20px",
              backgroundColor: "#4EB7F2",
              cursor: "pointer",
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
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                  }}
                >
                  Balance
                </h4>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "17.07px",
                  }}
                >
                  April 2022
                </label>
              </div>
              <label
                style={{
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29.26px",
                  marginTop: "8px",
                }}
              >
                $20,129
              </label>
            </div>
          </div>

          {/* menu 2 */}
          <div
            className="menuDownSpasi"
            style={{
              width: "180px",
              height: "216px",
              borderRadius: "12px",
              padding: "16px 20px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #F1F1F1",
              cursor: "pointer",
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
              <div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    color: "#064061",
                  }}
                >
                  Income
                </h4>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "17.07px",
                    color: "#AAAAAA",
                  }}
                >
                  April 2022
                </label>
              </div>
              <h5
                style={{
                  color: "#4EB7F2",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29.26px",
                  marginTop: "8px",
                }}
              >
                $20,129
              </h5>
            </div>
          </div>

          {/* menu 3*/}
          <div
            className="menuDownSpasi"
            style={{
              width: "180px",
              height: "216px",
              borderRadius: "12px",
              padding: "16px 20px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #F1F1F1",
              cursor: "pointer",
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
              <div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    color: "#064061",
                  }}
                >
                  Expenses
                </h4>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "17.07px",
                    color: "#AAAAAA",
                  }}
                >
                  April 2022
                </label>
              </div>
              <h5
                style={{
                  color: "#4EB7F2",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29.26px",
                  marginTop: "8px",
                }}
              >
                $20,129
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllExpenses