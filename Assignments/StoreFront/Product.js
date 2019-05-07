/*
 * Product to be used in an online store
 */
function Product(prodId, prodQ, prodName, path, price) {
    "use strict";
    //Declare and initialize variables
    var nArgs = arguments.length;//Number of arguments provided
    var defId = -1;//Default id
    var defQ = 0;//Default quantity
    var defName = "Default Name";//Default name
    var defPath = "Default Path";//Default path
    var defPrice = 0.0;//Default price
    var defOrdr = 0;//Default amount ordered
    var defSub = 0.0;//Default subtotal of product
    
    //Create question basesd on # of arguments
    if (nArgs < 1 || nArgs > 5) {//Default constructor, no or too many arguments
        this.id = defId;
        this.quantity = defQ;
        this.name = defName;
        this.imgPath = defPath;
        this.price = price;
        this.ordered = defOrdr;
        this.subtotal = defSub;
    } else if (nArgs === 5) {//All arguments provided
        this.id = prodId;
        this.quantity = prodQ;
        this.name = prodName;
        this.imgPath = path;
        this.price = price;
        this.ordered = defOrdr;
        this.subtotal = defSub;
    } else if (nArgs === 4) {//Id, quantity, name, and path provided
        this.id = prodId;
        this.quantity = prodQ;
        this.name = prodName;
        this.imgPath = path;
        this.price = defPrice;
        this.ordered = defOrdr;
        this.subtotal = defSub;
    } else if (nArgs === 3) {//Id, quantity, and name provided
        this.id = prodId;
        this.quantity = prodQ;
        this.name = prodName;
        this.imgPath = defPath;
        this.price = defPrice;
        this.ordered = defOrdr;
        this.subtotal = defSub;
    } else if (nArgs === 2) {//Id and quantity provided
        this.id = prodId;
        this.quantity = prodQ;
        this.name = defName;
        this.imgPath = defPath;
        this.price = defPrice;
        this.ordered = defOrdr;
        this.subtotal = defSub;
    } else {               //1 arg, copy constructor
        this.id = prodId.id;
        this.quantity = prodId.quantity;
        this.name = prodId.name;
        this.imgPath = prodId.imgPath;
        this.price = prodId.price;
        this.ordered = prodId.ordered;
        this.subtotal = prodId.subtotal;
    }
}

/*
 * Modifying product information
 */

//Set unqiue product id
Product.prototype.setId = function (prodId) {
    "use strict";
    this.id = prodId;
};

//Get id
Product.prototype.getId = function () {
    "use strict";
    return this.id;
};

//Set quantity available
Product.prototype.setQuantity = function (prodQ) {
    "use strict";
    this.quantity = prodQ;
};

//Get quantity
Product.prototype.getQuantity = function () {
    "use strict";
    return this.quantity;
};

//Set product name
Product.prototype.setName = function (prodName) {
    "use strict";
    this.name = prodName;
};

//Get name
Product.prototype.getName = function () {
    "use strict";
    return this.name;
};

//Set image path
Product.prototype.setImgPath = function (path) {
    "use strict";
    this.imgPath = path;
};

//Get image path
Product.prototype.getImgPath = function () {
    "use strict";
    return this.imgPath;
};

//Set price of product
Product.prototype.setPrice = function (price) {
    "use strict";
    this.price = price;
};

//Get price
Product.prototype.getPrice = function () {
    "use strict";
    return this.price;
};

//Set amount ordered
Product.prototype.setOrdered = function (amnt) {
    "use strict";
    //Validate amount ordered
    if(amnt > this.quantity) {
        amnt = this.quantity;
    } else if(amnt < 0) {
        amnt = 0;
    }
    //Set amount ordered and update quantity
    this.ordered = amnt;
    this.quantity -= amnt;
    this.updateSub();
};

//Add to amount ordered
Product.prototype.addOrdered = function (amnt) {
    "use strict";
    //Validate amount ordered
    if(amnt > this.quantity) {
        amnt = this.quantity;
    } else if(amnt < 0) {
        amnt = 0;
    }
    this.ordered += amnt;
    this.quantity -= amnt;
    this.updateSub();
};

//Subtract from amount ordered
Product.prototype.minusOrdered = function (amnt) {
    "use strict";
    //Validate amount
    if(amnt < 0) {
        amnt = 0;
    }
    //Update quantity, amount ordered, and subtotal
    this.quantity += amnt;
    this.ordered -= amnt;
    if(this.ordered < 0)
        this.ordered = 0;
    this.updateSub();
};

//Get amount ordered
Product.prototype.getOrdered = function () {
    "use strict";
    return this.ordered;
}

//Update subtotal
Product.prototype.updateSub = function () {
    "use strict";
    this.subtotal = this.ordered * this.price;
}

//Get subtotal
Product.prototype.getSub = function () {
    "use strict";
    return this.subtotal;
}

/*
 * Displaying/outputting information of product
 */

//Displays all product info
Product.prototype.dump = function () {
    "use strict";
    return "Id: " + this.id + "<br/>Quantity: " + this.quantity + "<br/>Name: " + 
        this.name + "<br/>Image Path: " + this.imgPath + "<br/>Price: $" +
        this.price + "<br/>Ordered: " + this.ordered + "<br/>Subtotal: $" + this.subtotal + "<br/><br/>";
};