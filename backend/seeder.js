import mongoose from "mongoose";
import UserAndCars from "./models/usersAndCarsModel.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let user = {
      name: "John",
      surname: "Smith",
      email: "JohnSmith@gmail.com",
      password: "JohnPassword",
      cars: [
        {
          make: "Audi",
          model: "A8",
          year: "2022",
          price: 20000,
        },
        {
          make: "Audi",
          model: "RS 7",
          year: "2022",
          price: 80000,
        },
      ],
    };

    UserAndCars.insertMany(user);
    console.log("Seeder worked");
  });
