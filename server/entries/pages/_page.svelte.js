import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const calendarIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20612%20612'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M153,114.75h1.592c15.845,0,28.688-12.842,28.688-28.688V76.5V28.688C183.28,12.842,170.437,0,154.592,0H153%20c-15.845,0-28.688,12.842-28.688,28.688V76.5v9.562C124.312,101.908,137.155,114.75,153,114.75z'/%3e%3cpath%20d='M449.438,114.75h1.592c15.846,0,28.688-12.842,28.688-28.688V76.5V28.688C479.717,12.842,466.875,0,451.029,0h-1.592%20c-15.845,0-28.688,12.842-28.688,28.688V76.5v9.562C420.75,101.908,433.593,114.75,449.438,114.75z'/%3e%3cpath%20d='M535.5,76.5h-27.096v9.562c0,31.638-25.737,57.375-57.375,57.375h-1.592c-31.638,0-57.375-25.737-57.375-57.375V76.5%20H211.967v9.562c0,31.638-25.738,57.375-57.375,57.375H153c-31.638,0-57.375-25.737-57.375-57.375V76.5H76.5%20C34.253,76.5,0,110.753,0,153v382.5C0,577.747,34.253,612,76.5,612h459c42.247,0,76.5-34.253,76.5-76.5V153%20C612,110.753,577.747,76.5,535.5,76.5z%20M573.75,535.5c0,21.104-17.146,38.25-38.25,38.25h-459c-21.085,0-38.25-17.146-38.25-38.25%20v-306h535.5V535.5z'/%3e%3ccircle%20cx='153'%20cy='325.125'%20r='47.019'/%3e%3ccircle%20cx='306'%20cy='325.125'%20r='47.019'/%3e%3ccircle%20cx='459'%20cy='325.125'%20r='47.019'/%3e%3ccircle%20cx='153'%20cy='478.125'%20r='47.019'/%3e%3ccircle%20cx='306'%20cy='478.125'%20r='47.019'/%3e%3ccircle%20cx='459'%20cy='478.125'%20r='47.019'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function DatePicker($$payload) {
  $$payload.out += `<div id="datePicker"><label>Select date</label> <div class="input"><input type="date" placeholder="dd/mm/aa"> <img${attr("src", calendarIcon)} alt="Menu Icon"></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload) {
  DatePicker($$payload);
  $$payload.out += `<!----> `;
  DatePicker($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
