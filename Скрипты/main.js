import { renderVacancyHtml } from "./Генерация-html/vacancyGenerateHtml.js";
import { Filters } from "../Скрипты/Классы/Класс_фильтров/setFilters.js";
import jsonData from "../data.json";

let html = document.querySelector("#vacancy");

html.innerHTML = renderVacancyHtml(jsonData);
html = new Filters();
