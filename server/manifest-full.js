export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "menu/_app",
	assets: new Set([".nojekyll","favicon.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BXj3DXz4.js","app":"_app/immutable/entry/app.BuLb5OKQ.js","imports":["_app/immutable/entry/start.BXj3DXz4.js","_app/immutable/chunks/entry.BahdO3UP.js","_app/immutable/chunks/runtime.DWuW5r1i.js","_app/immutable/chunks/index-client.8J8Nc1xd.js","_app/immutable/entry/app.BuLb5OKQ.js","_app/immutable/chunks/runtime.DWuW5r1i.js","_app/immutable/chunks/render.CJJjhKv3.js","_app/immutable/chunks/disclose-version.DKu9OnVM.js","_app/immutable/chunks/props.Bz5lhRaM.js","_app/immutable/chunks/index-client.8J8Nc1xd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
