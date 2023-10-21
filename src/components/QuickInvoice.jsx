import React from 'react'

import { BsPlusLg } from "react-icons/bs";
import "../styles/QuickInvoice.css";
function QuickInvoice() {
  return (
    <>
      <div
        style={{
          width: "604px",
          height: "566px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          margin: "-12px 24px ",
          padding: "24px",
        }}
      >
        <div className="d-flex justify-content-between">
          <h3 color="#064061">Quick Invoice</h3>
          <BsPlusLg style={{ color: "#4EB7F2" }} />
        </div>

        <div>
          <h5 color="#064061">Latest Transaction</h5>
          <div className="d-flex scrollmenu">
            {/* slide contact 1  */}
            <div
              className="d-flex me-3"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <img src="Frame1.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Madrani Andi
                </label>
                <label style={{ color: "#AAAAAA", fontSize: "12px" }}>
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 2 */}
            <div
              className="d-flex me-3"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Madrani Andi
                </label>
                <label style={{ color: "#AAAAAA", fontSize: "12px" }}>
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 3 */}
            <div
              className="d-flex me-3"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Madrani Andi
                </label>
                <label style={{ color: "#AAAAAA", fontSize: "12px" }}>
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 4 */}
            <div
              className="d-flex me-3"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Madrani Andi
                </label>
                <label style={{ color: "#AAAAAA", fontSize: "12px" }}>
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 5 */}
            <div
              className="d-flex"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Madrani Andi
                </label>
                <label style={{ color: "#AAAAAA", fontSize: "12px" }}>
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
          </div>

          <hr style={{ backgroundColor: "#F1F1F1" }} />
        </div>

        <div
          className="d-flex justify-content-between"
          style={{ width: "556px", height: "92px" }}
        >
          <div>
            <label className="mb-2" style={{ color: "#064061" }}>
              Customer name
            </label>
            <input
              type="text"
              placeholder="Type customer name"
              style={{
                width: "270px",
                height: "60px",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#FAFAFA",
                borderWidth: 0,
              }}
            />
          </div>
          <div>
            <label className="mb-2" style={{ color: "#064061" }}>
              Customer Email
            </label>
            <input
              type="text"
              placeholder="Type customer email"
              style={{
                width: "270px",
                height: "60px",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#FAFAFA",
                borderWidth: 0,
              }}
            />
          </div>
        </div>

        <div
          className="d-flex justify-content-between mb-3"
          style={{ width: "556px", height: "92px" }}
        >
          <div>
            <label className="mb-2" style={{ color: "#064061" }}>
              Item name
            </label>
            <input
              type="text"
              placeholder="Type customer name"
              style={{
                width: "270px",
                height: "60px",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#FAFAFA",
                borderWidth: 0,
              }}
            />
          </div>
          <div>
            <label className="mb-2" style={{ color: "#064061" }}>
              Item mount
            </label>

            <div
              className="input-group"
              style={{
                width: "270px",
                height: "60px",
                borderRadius: "12px",
                // padding: "20px",
                // backgroundColor: "#FAFAFA",
                // borderWidth: 0,
                // textAlign: "start",
                // color: "#AAAAAA",
              }}
            >
              <select
                style={{
                  border: 0,
                  backgroundColor: "#FAFAFA",
                  color: "#AAAAAA",
                }}
                // className="form-select"
                id="inputGroupSelect02"
              >
                <option selected>USD</option>
                <option value="1">JPY</option>
                <option value="2">IDR</option>
                <option value="3">EUR</option>
              </select>
              <input
                style={{
                  border: 0,
                  backgroundColor: "#FAFAFA",
                  color: "#AAAAAA",
                }}
              />
            </div>
            {/* <div className="dropdown">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "270px",
                      height: "60px",
                      borderRadius: "12px",
                      padding: "20px",
                      backgroundColor: "#FAFAFA",
                      borderWidth: 0,
                      textAlign: "start",
                      color: "#AAAAAA",
                    }}
                  >
                    USD <BsChevronDown />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        USD
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
                </div> */}
          </div>
        </div>

        <div
          style={{
            width: "556px",
            height: "62px",
          }}
        >
          <button
            style={{
              width: "266px",
              height: "62px",
              borderRadius: "12px",
              padding: "20px",
              color: "#4EB7F2",
              border: 0,
              backgroundColor: "#FFFFFF",
            }}
          >
            Add more details
          </button>

          <button
            style={{
              width: "266px",
              height: "62px",
              borderRadius: "12px",
              padding: "20px",
              color: "#FFFFFF",
              border: 0,
              backgroundColor: "#4EB7F2",
            }}
          >
            Add more details
          </button>
        </div>
      </div>
    </>
  );
}

export default QuickInvoice