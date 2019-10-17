function Item(category,id, name, price,discountprice, image,condition,arrival,seller,deliverycharge) {
    this.category =  category;
    this.id = id;
    this.name = name;
    this.price = price;
    this.discountprice = discountprice;
    this.image = image;
    this.category = category;
    this.condition = condition;
    this.arrival = arrival;
    this.seller = seller;
    this.deliverycharge = deliverycharge;
    this.selected = false;
}

var obj = {
    "viewproductItem" : [],
    "itemList" : [],

    addItem : function(category,id,name,price,discountprice,image,condition,arrival,seller,deliverycharge){
        var item = new Item(category,id,name,price,discountprice,image,condition,arrival,seller,deliverycharge);
        this.itemList.push(item);
        console.log(item);
        console.log(this.itemList);
    },

    viewItem : function(category,id,name,price,discountprice,image,condition,arrival,seller,deliverycharge){
        var item = new Item(category,id,name,price,discountprice,image,condition,arrival,seller,deliverycharge);
        this.viewproductItem.push(item);
        console.log("product item: ");
        console.log(this.viewproductItem);
        // location.href="../pages/cart.html";
    }
}