export default class Restaurant {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = [];
    this.menu = [];
    this.orders = [];
  }
  addReservation(reservation) {
    this.reservations.push(reservation);
  }

  removeReservation(reservationName) {
    this.reservations = this.reservations.filter(
      (reservation) => reservation.name !== reservationName
    );
  }
  checkAvailability() {
    return this.capacity - this.getGuestCount();
  }

  listReservations() {
    console.log(
      "The list of reservations is: " +
        this.reservations.map((reservation) => reservation.name)
    );
  }

  isReservationAvailable(reservationName) {
    return this.reservations.some(
      (reservation) => reservation.name === reservationName
    );
  }

  isFullyBooked() {
    return this.checkAvailability() <= 0;
  }

  getGuestCount() {
    return this.reservations.reduce(
      (total, reservation) => total + reservation.guestCount,
      0
    );
  }

  sortReservationsAlphabetically() {
    return this.reservations.map((reservation) => reservation.name).sort();
  }

  addOrder(order) {
    this.orders.push(order);
  }

  removeOrder(tableNumber) {
    this.orders = this.orders.filter(
      (order) => order.tableNumber !== tableNumber
    );
  }

  listOrders() {
    return this.orders;
  }

  getTotalRevenue() {
    const totalRevenue = this.orders.reduce((total, order) => {
      console.log(
        `Total cost for table ${order.tableNumber} is:`,
        order.totalPrice
      );
      return total + order.totalPrice;
    }, 0);
    console.log("Total Revenue:", totalRevenue);
  }

  addMenuItem(item) {
    this.menu.push(item);
  }

  removeMenuItem(itemName) {
    this.menu = this.menu.filter((item) => item.name !== itemName);
  }

  listMenuItems() {
    return this.menu;
  }
}
