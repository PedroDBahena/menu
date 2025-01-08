import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Bg8dh1LB.js","_app/immutable/chunks/disclose-version.DKu9OnVM.js","_app/immutable/chunks/runtime.DWuW5r1i.js"];
export const stylesheets = [];
export const fonts = [];
