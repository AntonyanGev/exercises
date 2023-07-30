

//1 Given an array. Determine whether it consists only from uniques or not.
function unique(arr) {
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

///2  Given an array of integers. All numbers are unique. Find the count of missing numbers
between minimum and maximum elements to make integers sequence.

function MissingNum(array) {
 const minElement = Math.min(...array);
  const maxElement = Math.max(...array);
    let count= 0;
      for (let i = minElement; i <= maxElement; i++) {
        if (!array.includes(i)) {
          count++;
        }
      }
      return count;
    }

// 3  Write a constructor function called CoffeeShop, which has three instance properties:

function CoffeeShop(name, menu) {
  this.name = name;
  this.menu = menu;
  this.orders = [];

  this.add = function(elem) {
    this.menu.push(elem);
  };
this.addOrder = function(item) {
  let itemFound = false;
  for (let i = 0; i < this.menu.length; i++) {
    if (this.menu[i].name === item) {
      this.orders.push(item);
      itemFound = true;
      break;
    }
  }
  if (!itemFound) {
    return "This item is currently unavailable!";
  }
};

  this.removeOrder = function(index) {
    this.orders.splice(index, 1);
  };

  this.fulfillOrder = function() {
    if (this.orders.length > 0) {
      const item = this.orders.shift();
      return `The ${item} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  };

  this.listOrders = function() {
    const orderList = [];
    for (let i = 0; i < this.orders.length; i++) {
      orderList.push(this.orders[i]);
    }
    return orderList;
  };

 this.drinksOnly = function() {
    const drinkItems = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === "drink") {
        drinkItems.push(this.menu[i].name);
      }
    }
    return drinkItems;
  };
    
this.foodOnly = function() {
    const foodItems = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === "food") {
        foodItems.push(this.menu[i].name);
      }
    }
    return foodItems;
  };
}

const addmenu = [
  { name: 'just coffee', type: 'drink', price: 450 },
  { name: 'pizza', type: 'food', price: 2400 },
  { name: 'Cappuccino', type: 'drink', price: 500 }
];

const elem = {
  name: 'Latte', type: 'coffee', price: 800 
};

const coffee = new CoffeeShop('My Coffee Shop', addmenu);

coffee.add(elem);
coffee.addOrder("chocolate");
coffee.addOrder("tea");
coffee.removeOrder(1);





