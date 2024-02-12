import Guest from "./Guest.js";
import Restaurant from "./Restaurant.js";
import Reservation from "./Reservation.js";
import Order from "./Order.js";
import { OnlineOrder } from "./OnlineOrder.js";
import { MenuItem } from "./MenuItem.js";

const firstRestaurant = new Restaurant("Cornul Vanatorului", 300);
const firstReservation = new Reservation("Andrei", "08/02/2024", "15:30", 40);
const secondReservation = new Reservation("Mihai", "12/02/2024", "13:00", 30);
const thirdReservation = new Reservation("Radu", "12/02/2024", "15:00", 20);
const forthReservation = new Reservation("Alex", "12/02/2024", "14:00", 14);

console.log(firstReservation);

//tests for the methods defined in the Reservation class
firstRestaurant.addReservation(firstReservation);
firstRestaurant.addReservation(secondReservation);
firstRestaurant.addReservation(thirdReservation);
firstRestaurant.addReservation(forthReservation);
console.log(firstRestaurant);

firstRestaurant.removeReservation("Radu");

firstRestaurant.checkAvailability();
console.log(
  "The number of available seats is: " + firstRestaurant.checkAvailability()
);

firstRestaurant.listReservations();

console.log(
  "Is the reservation available? The answer is: " +
    firstRestaurant.isReservationAvailable("Radu")
);

console.log(
  "Is the restaurant fully booked? The answer is: " +
    firstRestaurant.isFullyBooked()
);

console.log("The number of guests is: " + firstRestaurant.getGuestCount());

console.log(firstRestaurant.sortReservationsAlphabetically());

//Creating order objects
const item1 = new MenuItem("Sarmale cu mamaliguta", 25);
const item2 = new MenuItem("Ciorba de burta", 13);
const item3 = new MenuItem("Chiftelute de peste cu piure de cartofi", 25);

const order1 = new Order(1, [item1, item2]);
const order2 = new Order(4, [item1, item2, item3]);
const order3 = new Order(5, [item2, item3]);

firstRestaurant.addOrder(order1);
firstRestaurant.addOrder(order2);
firstRestaurant.addOrder(order3);

firstRestaurant.removeOrder(5);

console.log(firstRestaurant.listOrders());

firstRestaurant.getTotalRevenue();

firstRestaurant.addMenuItem(item1);
firstRestaurant.addMenuItem(item2);
firstRestaurant.addMenuItem(item3);

firstRestaurant.removeMenuItem("Sarmale cu mamaliguta");
console.log(firstRestaurant.listMenuItems());
