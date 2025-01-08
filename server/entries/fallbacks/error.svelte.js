import { e as escape_html } from "../../chunks/escaping.js";
import { g as getContext, c as pop, p as push } from "../../chunks/index.js";
function context() {
  return getContext("__request__");
}
const page = {
  get data() {
    return context().page.data;
  },
  get error() {
    return context().page.error;
  },
  get form() {
    return context().page.form;
  },
  get params() {
    return context().page.params;
  },
  get route() {
    return context().page.route;
  },
  get state() {
    return context().page.state;
  },
  get status() {
    return context().page.status;
  },
  get url() {
    return context().page.url;
  }
};
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}
export {
  Error$1 as default
};
