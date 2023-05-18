import { setStatus } from "../Классы/Класс_статусов/classStatus";
import { fillFilterTags } from "../Функции/Конвертация-тегов/fillFilterTags";
import { greenLineVacancy } from "../Функции/Зеленая-линия-вакансии/greenLineVacancy";

const status = new setStatus();

export function renderVacancyHtml(jsonData) {
  let vacancyBlocks = jsonData
    .map((element) => {
      return `
        <div class="vacancy vacancy__properties">
          ${greenLineVacancy(element.featured)}
            <div class="vacancy__info">
                <div class="vacancy__info-logo">
                    <img src="${element.logo}" alt="account" />
                </div>
                <div class="vacancy__info-content">
                    <div class="vacancy__info-title">
                        <span class="vacancy__info-company">${
                          element.company
                        }</span>
                        <div class="vacancy__info-status">
                            ${status.statusNew(element.new)}
                            ${status.statusFeatured(element.featured)}
                        </div>
                    </div>
                    <div class="vacancy__info-name">${element.position}</div>
                    <ul class="vacancy__info-tags">
                        <li class="vacancy__info-tagsItem">${
                          element.postedAt
                        }</li>
                        <li class="vacancy__info-tagsDot"></li>
                        <li class="vacancy__info-tagsItem">${
                          element.contract
                        }</li>
                        <li class="vacancy__info-tagsDot"></li>
                        <li class="vacancy__info-tagsItem">${
                          element.location
                        }</li>
                    </ul>
                </div>
            </div>
            <div class="vacancy__filters">
              <ul class="vacancy__filters-items">
                 ${fillFilterTags(element)}
              </ul>
            </div>
        </div>
    `;
    })
    .join("");
  return vacancyBlocks;
}
