export default interface VerConfig {
	auth: {
		discord_token: string
	}

	mongo: {
		url: string
	}

	v3rm: {
		api: {
			base: string
			lookup: string
			unlink: string
			warn: string
			ban: string
		}
	}

	wordFilters: {
		slurs: string[]
		exploit: string[]
		sensitive: string[]
		furry: string[]
		other: string[]
	}
}
