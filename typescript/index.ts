type Pizza = {
  id: number;
  name: string;
  price: number;
};


type Order = {
  id: number;
  pizza: string;
  status: "ordered" | "pending" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margarita", price: 10 },
  { id: 2, name: "Pepperoni", price: 11 },
  { id: 3, name: "Hawaiian", price: 12 },
  { id: 4, name: "Veggie", price: 14 },
];

let cashInRegister: number = 100;
const OrderQueue: Order[] = [];
let nextOrderId: number = 1;
const aman : string = 'shreya'

function addNewPizza(pizzaObj: Pizza) : void {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza: any = menu.find(
    (pizzaObj) => pizzaObj.name === pizzaName
  );
  if (selectedPizza === undefined) return;
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  OrderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order: any = OrderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: number | string) {
  if(typeof identifier === "number") {
    const pizza:any = menu.find((pizza) => pizza.id === identifier);
    return pizza
  }
  else if (typeof identifier === "string") {
    const pizza:any = menu.find((pizza) => pizza.name === identifier);
    return pizza
  }
  else {
    console.error("Invalid identifier")
  }
}

// addNewPizza({ name: "Paneer Pizza", price: 12 });
// addNewPizza({ name: "Spicy Pizza", price: 12 });

placeOrder("Veggie");

// completeOrder("1");

console.log("Menu", menu);
console.log("Order Queue", OrderQueue);
console.log("Cash in the register", cashInRegister);
