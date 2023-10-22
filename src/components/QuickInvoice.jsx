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
        <div className="d-flex justify-content-between d-flex align-items-center">
          <h3
            style={{
              color: "#064061",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24.38px",
            }}
          >
            Quick Invoice
          </h3>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              // width: "48px",
              // height: "48px",
              backgroundColor: "#FAFAFA",
              borderRadius: "50%",
            }}
          >
            <BsPlusLg style={{ color: "#4EB7F2", cursor: "pointer" }} />
          </div>
        </div>

        <div>
          <h5
            style={{
              color: "#064061",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19.5px",
            }}
          >
            Latest Transaction
          </h5>
          <div className="d-flex scrollmenu mb-4">
            {/* slide contact 1  */}
            <div
              className="d-flex me-3 align-items-center"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <img src="Frame1.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    cursor: "pointer",
                  }}
                >
                  Madrani Andi
                </label>
                <label
                  style={{
                    color: "#AAAAAA",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "14.63px",
                    cursor: "pointer",
                  }}
                >
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 2 */}
            <div
              className="d-flex me-3 align-items-center"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    cursor: "pointer",
                  }}
                >
                  Madrani Andi
                </label>
                <label
                  style={{
                    color: "#AAAAAA",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "14.63px",
                    cursor: "pointer",
                  }}
                >
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
            {/* slide contact 3 */}
            <div
              className="d-flex me-3 align-items-center"
              style={{
                backgroundColor: "#FAFAFA",
                width: "224px",
                height: "72",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    cursor: "pointer",
                  }}
                >
                  Madrani Andi
                </label>
                <label
                  style={{
                    color: "#AAAAAA",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "14.63px",
                    cursor: "pointer",
                  }}
                >
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
                cursor: "pointer",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Madrani Andi
                </label>
                <label
                  style={{
                    color: "#AAAAAA",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "14.63px",
                    cursor: "pointer",
                  }}
                >
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
                cursor: "pointer",
              }}
            >
              <img src="Frame2.png" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column ms-2">
                <label
                  style={{
                    color: "#064061",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19.5px",
                    cursor: "pointer",
                  }}
                >
                  Madrani Andi
                </label>
                <label
                  style={{
                    color: "#AAAAAA",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "14.63px",
                    cursor: "pointer",
                  }}
                >
                  Madraniadi20@gmail
                </label>
              </div>
            </div>
          </div>

          <hr style={{ backgroundColor: "#F1F1F1" }} />
        </div>

        <div
          className="d-flex justify-content-between mt-4 viewInputQuickInoice"
          style={
            {
              // width: "556px",
              // height: "92px"
            }
          }
        >
          <div>
            <p
              className="mb-2"
              style={{
                color: "#064061",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19.5px",
              }}
            >
              Customer name
            </p>
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
            <p
              className="mb-2"
              style={{
                color: "#064061",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19.5px",
              }}
            >
              Customer Email
            </p>
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

        <div className="d-flex justify-content-between mt-3 mb-3 viewInputQuickInoice">
          <div>
            <p
              className="mb-2"
              style={{
                color: "#064061",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19.5px",
              }}
            >
              Item name
            </p>
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
            <p
              className="mb-2"
              style={{
                color: "#064061",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19.5px",
              }}
            >
              Item mount
            </p>

            <div
              className="input-group"
              style={{
                width: "270px",
                height: "60px",
                borderRadius: "12px",
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
          </div>
        </div>

        <div className="mt-3 d-flex viewInputQuickInoice" style={{}}>
          <button
            style={{
              width: "266px",
              height: "62px",
              borderRadius: "12px",
              padding: "20px",
              color: "#4EB7F2",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "21.94px",
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
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "21.94px",
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