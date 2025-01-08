

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B3X27I_7.js","_app/immutable/chunks/disclose-version.BUypmonB.js","_app/immutable/chunks/runtime.5O4X9Akr.js"];
export const stylesheets = [];
export const fonts = [];
