import React from 'react'

function FilterByPayementMethod({ Loading, users, setUser, paymentMethod, setPaymentMethod}) {
    return (
        <div>
             <p>Payement method :</p>
     <form>
     <label>cc</label>
      <input
        type="radio"
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod('cc');
        }}
      />
      <label>money order</label>
      <input
        type="radio"
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod('money order');
        }}
      />

<label>paypal</label>
      <input
        type="radio"
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod('paypal');
        }}
      />

<label>check</label>
      <input
        type="radio"
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod('check');
        }}
      />
     </form>






            
        </div>
    )
}

export default FilterByPayementMethod

