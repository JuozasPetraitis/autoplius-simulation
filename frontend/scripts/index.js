// Imports
import { GET_ALL_CARS_URI } from "../endpoints/endpoints.js";

// Variables
// -DOM elements
const latestCarsElement = document.querySelector("#latest-cars");

// Functions
const showCars = async () => {
  let cars = await fetch(GET_ALL_CARS_URI);
  let data = await cars.json();

  console.log(data);
};

// Events
document.addEventListener("DOMContentLoaded", showCars);
