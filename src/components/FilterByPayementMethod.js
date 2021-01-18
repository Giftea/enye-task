import React from "react";
import "./UserItem.css";
function FilterByPayementMethod({ Loading, paymentMethod, setPaymentMethod }) {
  return (
    <div>
      {!Loading ? (
        <div className="dropdown">
          <button className="dropBtn">Payment Method <i class="fa fa-caret-down"></i></button>

          <div className="dropdownContent">
            <div className="select">
              <label>CC</label>
              <input
                type="radio"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod("cc");
                }}
              />
            </div>

            <div className="select">
              <label>Money Order</label>
              <input
                type="radio"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod("money order");
                }}
              />
            </div>

            <div className="select">
              <label>Paypal</label>
              <input
                type="radio"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod("paypal");
                }}
              />
            </div>

            <div className="select">
              <label>Check</label>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod("check");
                }}
              />
            </div>
          </div>

          {/* <p>Payement method :</p>
          <form>
            <label>cc</label>
            <input
              type="radio"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod("cc");
              }}
            />
            <label>money order</label>
            <input
              type="radio"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod("money order");
              }}
            />

            <label>paypal</label>
            <input
              type="radio"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod("paypal");
              }}
            />

            <label>check</label>
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod("check");
              }}
            />
          </form> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FilterByPayementMethod;
