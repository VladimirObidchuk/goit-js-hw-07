const categories = document.getElementById("categories");
const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`В списке ${categoriesItems.length} категории.`);

const addStyles = {
  categories: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0",
    margin: "0",
  },
  categoriesItem: {
    marginBottom: "24px",
    padding: "16px",
    backgroundColor: "#f6f6fe",
    borderRadius: "8px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "16px",
    width: "392px",
  },
  categoriesItems: {
    ul: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      padding: "0",
    },
    h2: {
      fontWeight: 600,
      margin: "0",
      fontSize: "24px",
      lineHeight: "1.34",
      letterSpacing: "0.04em",
      color: "#2e2f42",
    },
  },
  categoriesItemsLi: {
    display: "flex",
    alignItems: "center",
    width: "360px",
    height: "40px",
    border: "1px solid #808080",
    borderRadius: "4px",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "1.5",
    letterSpacing: "0.04em",
    color: "#2e2f42",
    padding: "16px",
  },
};
Object.assign(categories.style, addStyles.categories);
categoriesItems.forEach((Item) => {
  Object.assign(Item.style, addStyles.categoriesItem);
  Object.assign(Item.querySelector("h2").style, addStyles.categoriesItems.h2);
  const innerUl = Item.querySelector("ul");
  Object.assign(innerUl.style, addStyles.categoriesItems.ul);
  const innerLis = Item.querySelectorAll("ul li");
  innerLis.forEach((li) => {
    Object.assign(li.style, addStyles.categoriesItemsLi);
  });
});
categoriesItems.forEach((Item) => {
  const nameCategories = Item.querySelector("h2");
  const totalCategories = Item.querySelectorAll("ul li").length;
  const nameSubCategories = Item.querySelectorAll("ul li");
  console.log(
    `Categorie: ${nameCategories.textContent}` +
      "\n" +
      `Elements: ${totalCategories}` +
      "\n"
  );
  nameSubCategories.forEach((li, index) => {
    console.log(` ${index + 1}: ${li.textContent}`);
  });
});
