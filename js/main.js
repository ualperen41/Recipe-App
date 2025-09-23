import API from "./api.js";
import { uiElement } from "./ui.js";
const api = new API();
console.log(api);

const handleSubmit = () => {
  e.preventDefault();

  const query = e.target[0].value;

  api.getResults(query).then(() => {
    console.log(api.resaults);
  });
};

uiElement.form.addEventListener("submit", handleSubmit);
