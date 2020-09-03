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
    $(".pay-list").append(
      `<tr><td>${data[i].Payee.Name}</td> <td>${data.Fax}</td> <td>${data.Phone}</td> <td>${data.Attention}</td> </tr> `
    );
 
  });
}
