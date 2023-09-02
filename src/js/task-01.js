const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log("Number of categories:", numberOfCategories);
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li");
  const numberOfElements = categoryElements.length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", numberOfElements);
});
