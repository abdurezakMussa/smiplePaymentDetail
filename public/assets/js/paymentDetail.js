
  function getPaymentDetail() {
    var idx = document.URL.indexOf('?');
    var params = {}; // simple js object
    
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1,document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    console.log("q"+pairs)
    return params;

}
    let id;
params=getPaymentDetail();
for(var i in params){
    console.log("query"+params[i])
     id=params[i]

    }

// A function for getting all notes from the db
let getPaymentById = function (id) {
    
    return $.ajax({
      url: "/api/payment/"+id,
      datatype: JSON,
      method: "GET",
    });
  }
 
//   let renderPaymentList = function (payments) {
//     // $noteList.empty();
//     let paymentLists = [];
//     $(".pay-group-head").append(`<tr><td>Name</td> <td>Fax</td> <td>Phone</td> <td>Attention</td><td class="text-center"> 
//       </td> </tr> `);
//     for (let i = 0; i < payments.length; i++) {
//       let paymentLists = payments[i].Payee;
//       console.log("Payee", paymentLists);
//       $(".pay-group").append(`<tr><td>${paymentLists.Name}</td> <td>${paymentLists.Fax}</td> <td>${paymentLists.Phone}</td> <td>${paymentLists.Attention}</td><td class="text-center"> 
//       <button  type="button" id="btn${i}" onclick="paymentdetail(${i})" >Detail</button></td> </tr> `);
//     }
//     // $("#btn").click(function(){
//     //  window.location="paymentDetail.html"
//     // });
    
//   };