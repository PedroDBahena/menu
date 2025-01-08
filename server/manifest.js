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
		client: {"start":"_app/immutable/entry/start.mWP4bRjD.js","app":"_app/immutable/entry/app.VIDaNZtg.js","imports":["_app/immutable/entry/start.mWP4bRjD.js","_app/immutable/chunks/entry.BbMM4Y8V.js","_app/immutable/chunks/runtime.5O4X9Akr.js","_app/immutable/chunks/index-client.Vy77ufUG.js","_app/immutable/entry/app.VIDaNZtg.js","_app/immutable/chunks/runtime.5O4X9Akr.js","_app/immutable/chunks/render.Edy45Gq2.js","_app/immutable/chunks/disclose-version.BUypmonB.js","_app/immutable/chunks/props.FusRjM6f.js","_app/immutable/chunks/index-client.Vy77ufUG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
