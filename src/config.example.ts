import type { VerConfig } from "./types/";

const config: VerConfig = {
	auth: {
		discord_token: ""
	},
	mongo: {
		url: ""
	},
	v3rm: {
		api: {
			base: "",
			lookup: "",
			unlink: "",
			warn: "",
			ban: ""
		}
	},
	wordFilters: {
		slurs: [],
		exploit: [],
		sensitive: [],
		furry: [],
		other: []
	}
}

export default config;
