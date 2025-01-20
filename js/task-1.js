const categories = document.getElementById("categories");
const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`В списке ${categories.length} категории.`);
categoriesItems.forEach((Item) => {
  const nameCategories = Item.querySelector("h2");
  const totalCategories = Item.querySelectorAll("ul li").length;
  const nameSubCategories = Item.querySelectorAll("ul li");
  categories.style.listStyle = "none";
  categories.style.display = "flex";
  categories.style.flexDirection = "column";
  categories.style.justifyContent = "space-between";
  categories.style.padding = "0";
  categories.style.margin = "0";

  categoriesItems.forEach((el) => {
    el.style.marginBottom = "24px";
    el.style.padding = "16px";
    el.style.backgroundColor = "#f6f6fe";
    el.style.borderRadius = "8px";
    el.style.display = "flex";
    el.style.alignItems = "flex-start";
    el.style.justifyContent = "flex-start";
    el.style.flexDirection = "column";
    el.style.gap = "16px";
    el.style.width = "392px";

    el.querySelector("ul").style.listStyle = "none";
    el.querySelector("ul").style.display = "flex";
    el.querySelector("ul").style.flexDirection = "column";
    el.querySelector("ul").style.gap = "8px";
    el.querySelector("ul").style.padding = "0";
    el.querySelector("h2").style.fontWeight = 600;
    el.querySelector("h2").style.margin = "0";
    el.querySelector("h2").style.fontSize = "24px";
    el.querySelector("h2").style.lineHeight = "1.34";
    el.querySelector("h2").style.letterSpacing = "0.04em";
    el.querySelector("h2").style.color = "#2e2f42";
    el.querySelectorAll("ul li").forEach((li) => {
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.width = "360px";
      li.style.height = "40px";
      li.style.border = "1px solid #808080";
      li.style.borderRadius = "4px";
      li.style.fontWeight = 400;
      li.style.fontSize = "16px";
      li.style.lineHeight = "1.5";
      li.style.letterSpacing = "0.04em";
      li.style.color = "#2e2f42";
      li.style.padding = "16px";
    });
  });
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
