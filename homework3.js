

//1 Given an array. Determine whether it consists only from uniques or not.
function unique7777(arr) {
  let res = true;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      res = false;
      break;
    }
  }
  return res;
}



// 3  
function Shop(name, menu) {
  this.name = name;
  this.menu = menu;
  this.orders = [];

  this.add = function (elem) {
    this.menu.push(elem);
  };

  this.addorder = function (item) {
    this.orders.push(item);
  }
    this.removeOrder= function(remove){
        this.orders.splice(remove,1)
    }
}

const addmenu = [
  { name: 'just coffee', type: 'drink', price: 450 },
  { name: 'pizza', type: 'food', price: 2400 },
  { name: 'Cappuccino', type: 'drink', price: 500 }
];

const elem = {
    name: 'Latte', type: 'coffee', price: 800 
};

const coffee = new Shop('My Coffee Shop', addmenu);

let item = { 
    name: 'chocolate', type: 'drink', price: 200,
    name:'tea', type: 'drink', price:150
}
        
coffee.add(elem);
coffee.addorder(item)
coffee.removeOrder(item)
