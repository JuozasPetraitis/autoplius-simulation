// Variables
const nav = document.querySelector("nav");

// Functions
const showNav = () => {
  // Creating HTMl elements
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const a1 = document.createElement("a");
  const a2 = document.createElement("a");

  // Adding content and attributes to created HTML elements
  a1.href = location.href.includes("pages") ? "../index.html" : "index.html";
  a1.innerText = "Home";

  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    a2.href = location.href.includes("pages")
      ? "my-account.html"
      : "./pages/my-account.html";
    a2.innerText = "My account";
  } else {
    a2.href = location.href.includes("pages")
      ? "login.html"
      : "./pages/login.html";
    a2.innerText = "Login/Register";
  }

  // Append elements
  li1.appendChild(a1);
  li2.appendChild(a2);

  ul.appendChild(li1);
  ul.appendChild(li2);

  nav.appendChild(ul);
};
// Events
document.addEventListener("DOMContentLoaded", showNav);
