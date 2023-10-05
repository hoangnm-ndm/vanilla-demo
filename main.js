import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import ProductsPage from "./src/pages/ProductsPage";
import RegisterPage from "./src/pages/RegisterPage";

import Navigo from "navigo";
import AdminPage from "./src/pages/Admin";

const app = document.getElementById("app");
const render = async (target, content) => {
  target.innerHTML = await content();
};

const router = new Navigo("/", { linksSelector: "a" });

router.on("/home", () => render(app, HomePage));
router.on("/", () => router.navigate("/home"));
router.on("/products", () => render(app, ProductsPage));
router.on("/login", () => render(app, LoginPage));
router.on("/register", () => render(app, RegisterPage));
router.on("/admin", () => render(app, AdminPage));

router.resolve();
