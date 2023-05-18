export const fillFilterTags = (vacancyBlock) => {
  const filterTags = [
    vacancyBlock.role,
    vacancyBlock.level,
    ...vacancyBlock.languages,
    ...vacancyBlock.tools,
  ];

  return filterTags
    .map((element) => {
      return `
        <li class="vacancy__filters-item" data-id="${element}">${element}</li>
    `;
    })
    .join("");
};
