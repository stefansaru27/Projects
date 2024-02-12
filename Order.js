export default class Order {
  constructor(tableNumber, items) {
    this.tableNumber = tableNumber;
    this.items = items;
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
