window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#search").addEventListener("keyup", searchProduct);
    document.querySelector("#header_home").addEventListener("click", header_home);
    document.querySelector("#home").addEventListener("click", home);
    document.querySelector("#chart").addEventListener("click", chart);
    document.querySelector("#poster").addEventListener("click", poster);
    document.querySelector("#twod_model").addEventListener("click", twod_model);
    document.querySelector("#threed_model").addEventListener("click", threed_model);
    document.querySelector("#chocolate").addEventListener("click", chocolate);
    document.querySelector("#computer").addEventListener("click", computer);
    document.querySelector("#more").addEventListener("click", more);
     loadCart();
    
}


function header_home(){
    window.location="../../index.html";
}

function home(){
    window.location="../../index.html";
}

function chart(){
    if (window.localStorage) {
        var json = JSON.stringify("chart");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}


function poster(){
    if (window.localStorage) {
        var json = JSON.stringify("poster");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function twod_model(){
    if (window.localStorage) {
        var json = JSON.stringify("2d_model");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}


function threed_model(){
    if (window.localStorage) {
        var json = JSON.stringify("3d_model");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function chocolate(){
    if (window.localStorage) {
        var json = JSON.stringify("chocolate");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function computer(){
    if (window.localStorage) {
        var json = JSON.stringify("computer");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function more(){
    if (window.localStorage) {
        var json = JSON.stringify("more");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}


function loadCart(){
    if (window.localStorage) {
        var data = localStorage.getItem("cartList");
        obj.itemList = JSON.parse(data);
        displayCart();
        cart_total();
    }
}

function searchProduct(){
    var toSearch = event.srcElement.value;
    obj.itemList = obj.itemList.filter(function(obj){
        return obj.name.toLowerCase().includes(toSearch.toLowerCase());
    });
    displayCart();
}



function displayCart(){
    
    // window.location="../elite/assets/pages/cart.html";
    var ul = document.querySelector("#cart-product-detail");
    ul.innerHTML="";
    if(obj.itemList.length>0){
    // console.log(obj.itemList.length);
    obj.itemList.forEach(function(x){
        var hr = document.createElement("hr");
        var li = document.createElement("li");
        li.className="row";
        var div1 = document.createElement("div");
        div1.className="img";
        // div1.className="left";
        var a = document.createElement("a");
        // a.href="#";
        var img = document.createElement("img");
        img.src = x.image;
        img.alt=x.id;
        a.appendChild(img);
        div1.appendChild(a);

        var div2 = document.createElement("div");
        div2.className="desc";
        var h4 = document.createElement("h4");
       
        var p1 = document.createElement("p");
        p1.className="text-danger";
        p1.innerHTML=x.name;
        var p2 = document.createElement("p");
        p2.innerHTML="Seller: "+x.seller;
        var p3 = document.createElement("p");
        // p3.className="ml-5";
        if(x.deliverycharge!=0){
        p3.innerHTML="₹ "+x.deliverycharge+" Delivery in 3-4 days";
        // p3.className="text-warning";
        }
        else{
            p3.innerHTML="FREE Delivery in 3-4 days";
            // p3.className="text-success";
        }
        var p4 = document.createElement("p");
        p4.className="text-success";
        p4.innerHTML="₹ "+x.discountprice;
        var span =document.createElement("span");
        if(x.price!=0){
            if(x.price!="undefined"){
        span.innerHTML="₹ "+x.price;
        }
    }
        else{
            span.innerHTML="";
        }
        p4.appendChild(span);
        h4.appendChild(p1);
        h4.appendChild(p2);
        h4.appendChild(p3);
        h4.appendChild(p4);
        div2.appendChild(h4);

        li.appendChild(div1);
        li.appendChild(div2);

        ul.appendChild(hr);
        ul.appendChild(li);
    })
}
else{
    var h3=document.createElement("h3");
    h3.innerHTML="Cart is Empty";
    ul.appendChild(h3);
}
}

function cart_total(){
    

    var div3 = document.querySelector("#cart-total");
    if(obj.itemList.length>0){
    // div3.innerHTML="";
    // obj.itemList.forEach(function(x){
    // var h6_1 = document.createElement("h6");
    // h6_1.className="text-uppercase";
    // h6_1.className="mt-4";
    // h6_1.className="text-secondary";
    // h6_1.innerHTML="price Details";
    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");

// console.log("inside cart-total"+ obj.itemList.length);

    var div4= document.createElement("div");
    div4.className="row";
    var h6_2 = document.createElement("h6");
    h6_2.className="left";
    h6_2.innerHTML="Price( "+obj.itemList.length+" items ) : ";
    var h6_3 = document.createElement("h6");
    h6_3.className="right";
    var totalprice=0;
    // console.log(obj.itemList[0].discountprice);
    for(i=0;i<obj.itemList.length;i++){
        totalprice = totalprice + obj.itemList[i].discountprice;
    } 
    // console.log(totalprice.value);
    h6_3.innerHTML="₹ "+totalprice;
    div4.appendChild(h6_2);
    div4.appendChild(h6_3);
    
    var div5= document.createElement("div");
    div5.className="row";
    var h6_4 = document.createElement("h6");
    h6_4.className="left";
    h6_4.innerHTML="Delivery Charges : ";
    var h6_5 = document.createElement("h6");
    h6_5.className="right";
    
    var deliverycharges=0;
    // console.log(obj.itemList[0].deliverycharge);
    for(i=0;i<obj.itemList.length;i++){
        deliverycharges = deliverycharges + obj.itemList[i].deliverycharge;
    }

    console.log(obj.itemList[0]);
    
    if(deliverycharges!=0){
        h6_5.className="text-danger";
        h6_5.innerHTML= "₹ "+deliverycharges;
    }
    else{
        h6_5.className="text-success";
        h6_5.innerHTML="FREE";
    }
    

    div5.appendChild(h6_4);
    div5.appendChild(h6_5);

    var div6= document.createElement("div");
    div6.className="row";
    var h6_6 = document.createElement("h6");
    h6_6.className="left";
    h6_6.innerHTML="Amount Payable : ";
    var h6_7 = document.createElement("h6");
    h6_7.className="right";
    // var totalprice;
    h6_7.innerHTML="₹ "+(totalprice+deliverycharges);
    div6.appendChild(h6_6);
    div6.appendChild(h6_7);

    var div7 = document.createElement("div");
    div7.className="row";
    // div7.className="ml-4";
    // div7.className="mb-2";
    var h6_8 = document.createElement("h6");
    h6_8.className="text-success";
    var saving=0;
    for(i=0;i<obj.itemList.length;i++){
        if(obj.itemList[i].price!=0 && obj.itemList[i].price!="undefined"){
            saving+=(obj.itemList[i].price-obj.itemList[i].discountprice);
        }
        else{
            saving+=obj.itemList[i].price;
        }
    }
    h6_8.innerHTML="Your Total Savings on this order ₹ "+saving;
    div7.appendChild(h6_8);

    var div8 = document.createElement("div");
    // div8.className="mx-auto";
    // div8.className="mt-1";
    div8.className="btns";
    var button1  =document.createElement("button");
    // button1.className="text-uppercase";
    button1.className="btn";
    // button1.className="p-2";
    var i = document.createElement("i");
    i.className="fas";
    i.className="fa-chevron-left";
    button1.appendChild(i);
    button1.innerHTML="Continue shopping";
    var button2  =document.createElement("button");
    // button2.className="text-uppercase";
    button2.className="btn";
    // button2.className="p-2";
    button2.innerHTML="Place order";
    div8.appendChild(button1);
    div8.appendChild(button2);


    // div3.appendChild(h6_1);
    // div3.appendChild(hr1);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div3.appendChild(hr1);
    div3.appendChild(div6);
    div3.appendChild(hr2);
    div3.appendChild(div7);
    div3.appendChild(div8);
// })
}
else{
    var h3=document.createElement("h3");
    h3.innerHTML="Cart is Empty";
    div3.appendChild(h3);
}
}