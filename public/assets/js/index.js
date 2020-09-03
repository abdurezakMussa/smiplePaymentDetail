// A $( document ).ready() block.
$(document).ready(function () {
  getAndRenderPayments();
  console.log("ready!");
});

// Gets notes from the db and renders them to the sidebar
let getAndRenderPayments = function () {
  return getPayment().then(function (data) {
    renderPaymentList(data);
  });
};
// A function for getting all notes from the db
let getPayment = function () {
  return $.ajax({
    url: "/api/payment",
    datatype: JSON,
    method: "GET",
  });
};
let paymentLists = [];
let renderPaymentList = function (payments) {
  // $noteList.empty();

  $(".pay-group-head")
    .append(`<tr><td>Name</td> <td>Fax</td> <td>Phone</td> <td>Attention</td><td class="text-center"> 
    </td> </tr> `);
  for (let i = 0; i < payments.length; i++) {
    let paymentLists = payments[i].Payee;
    console.log("Payee", paymentLists);
    $(".pay-group").append(`<tr><td>${paymentLists.Name}</td> <td>${
      paymentLists.Fax
    }</td> <td>${paymentLists.Phone}</td> <td>${
      paymentLists.Attention
    }</td><td class="text-center"> 
    <button  type="button" id="btn${i}" onclick="paymentdetail(${[
      i,
    ]})" >Detail</button></td> </tr> `);
  }
};

function paymentdetail(i) {
  $.ajax({
    url: "/api/payment",
    datatype: JSON,
    method: "GET",
  }).then(function (data) {
    
    $(".pay-group-pay")
    .append(`<tr><td>CVV</td> <td>EXP</td> <td>PAN</td>  </tr> `);
    $(".pay-list").append(
      `<tr><td>${data[i].Payment.CVV}</td> <td>${data[i].Payment.Exp}</td> <td>${data[i].Payment.PAN}</td>  </tr> `
    );
    $(".pay-group-rim")
    .append(`<tr><td>PayorName</td> <td>PayorId</td> <td>InvoiceNo</td>  <td>Description</td> </tr> `);
    $(".pay-rem").append(
      `<tr><td>${data[i].Remittance[i].PayorName}</td> <td>${data[i].Remittance[i].PayorId}</td> <td>${data[i].Remittance[i].InvoiceNo}</td> <td>${data[i].Remittance[i].Description}</td> </tr> `
    );
    console.log(data[i])
    }
  
   
}
