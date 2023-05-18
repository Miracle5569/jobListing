export class Filters {
  constructor() {
    this.showFilter = document.querySelector("#filter");
    this.clearBtn = document.querySelector(".main-page__filtersElements-clear");
    this.showFilterMainBlock = document.querySelector(
      ".main-page__filtersElements_display_default_hide_block"
    );
    this.vacancyBlocks = document.querySelectorAll(".vacancy");

    this.#searchFilter();
  }

  #searchFilter() {
    const filters = document.querySelectorAll(".vacancy__filters-items");
    const filtersArr = new Set();

    filters.forEach((element) => {
      element.addEventListener("click", (event) => {
        filtersArr.add(event.target.dataset.id);
        this.#showSettingFilters(filtersArr);
        this.#preRenderHtmlWithFilters(filtersArr);
      });
    });

    this.#closeSingleFilter(filtersArr);
    this.#clearFilter(filtersArr);
  }

  #showSettingFilters(filtersArr) {
    this.showFilterMainBlock.style.setProperty("display", "flex");

    if (filtersArr.size === 0) {
      return this.showFilterMainBlock.style.setProperty("display", "none");
    }

    this.showFilter.innerHTML = [...filtersArr]
      .map((element) => {
        return `
        <li class="main-page__filtersElements-item">
        ${element}
        <span class="main-page__filtersElements-itemClose" data-value="${element}"><i class="fa-solid fa-xmark"></i></span>
        </li>
      `;
      })
      .join("");

    this.#closeSingleFilter(filtersArr);
  }

  #closeSingleFilter(arr) {
    const closingFilters = document.querySelectorAll(
      ".main-page__filtersElements-itemClose"
    );

    closingFilters.forEach((item) => {
      item.addEventListener("click", () => {
        arr.delete(item.getAttribute("data-value"));
        this.#showSettingFilters(arr);
        this.#preRenderHtmlWithFilters(arr);
      });
    });
  }

  #clearFilter(filtersArr) {
    this.clearBtn.addEventListener("click", () => {
      filtersArr.clear();
      this.showFilter.innerHTML = [...filtersArr];
      this.showFilterMainBlock.style.setProperty("display", "none");

      this.#preRenderHtmlWithFilters(filtersArr);
    });
  }

  #preRenderHtmlWithFilters(filterArr) {
    const vacancies = Array.from(document.querySelectorAll(".vacancy"));
    const filteredVacancies = vacancies.filter((vacancy) => {
      const vacancyTags = Array.from(
        vacancy.querySelectorAll(".vacancy__filters-items")
      );

      for (let el of vacancyTags) {
        return [...filterArr].every((element) =>
          el.textContent.includes(element)
        );
      }
    });
    vacancies.forEach((vacancy) => (vacancy.style.display = "none"));
    filteredVacancies.forEach((vacancy) => (vacancy.style.display = "flex"));
  }
}
