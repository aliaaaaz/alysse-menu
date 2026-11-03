(() => {
  const data = window.ALysseMenu || [];
  const nav = document.querySelector("#category-nav");
  const container = document.querySelector("#menu-sections");
  const search = document.querySelector("#search");
  const clear = document.querySelector("#clear-search");
  const empty = document.querySelector("#no-results");
  const slug = (value, index) => "section-" + index;
  const price = value => value == null ? "" : '<span class="menu-item__price">' + value + ' <small>DH</small></span>';

  data.forEach((category, index) => {
    const id = slug(category.category, index);
    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = category.category;
    link.dataset.section = id;
    nav.append(link);

    const section = document.createElement("section");
    section.className = "menu-section";
    section.id = id;
    section.dataset.category = category.category.toLocaleLowerCase("fr");
    const heading = document.createElement("div");
    heading.className = "section-heading";
    const title = document.createElement("h3");
    title.textContent = category.category;
    heading.append(title);
    section.append(heading);
    if (category.note) {
      const note = document.createElement("p");
      note.className = "menu-item__description";
      note.style.margin = "0 0 10px";
      note.textContent = category.note;
      section.append(note);
    }
    const list = document.createElement("div");
    list.className = "item-list";
    category.items.forEach(([name, description, amount]) => {
      const item = document.createElement("article");
      item.className = "menu-item";
      item.dataset.search = [name, description, category.category].join(" ").toLocaleLowerCase("fr");
      const itemTitle = document.createElement("h4");
      itemTitle.className = "menu-item__title";
      itemTitle.textContent = name;
      item.append(itemTitle);
      if (amount != null) item.insertAdjacentHTML("beforeend", price(amount));
      if (description) {
        const detail = document.createElement("p");
        detail.className = "menu-item__description";
        detail.textContent = description;
        item.append(detail);
      }
      list.append(item);
    });
    section.append(list);
    container.append(section);
  });

  function filterMenu() {
    const query = search.value.trim().toLocaleLowerCase("fr");
    let visibleCount = 0;
    document.querySelectorAll(".menu-section").forEach(section => {
      let matches = 0;
      section.querySelectorAll(".menu-item").forEach(item => {
        const visible = !query || item.dataset.search.includes(query);
        item.hidden = !visible;
        if (visible) matches++;
      });
      section.hidden = matches === 0;
      visibleCount += matches;
    });
    empty.hidden = visibleCount > 0;
    clear.hidden = !search.value;
  }

  search.addEventListener("input", filterMenu);
  clear.addEventListener("click", () => {
    search.value = "";
    filterMenu();
    search.focus();
  });
  nav.addEventListener("click", event => {
    const link = event.target.closest("a");
    if (!link) return;
    nav.querySelectorAll("a").forEach(item => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "true");
  });
  const firstLink = nav.querySelector("a");
  if (firstLink) firstLink.setAttribute("aria-current", "true");
})();

