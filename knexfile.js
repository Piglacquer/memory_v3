module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///3000'
	},
	production: {
		client: 'pg',
		connection:
			process.env.DATABASE_URL ||
			'postgres://cbvpgmjzvtokgl:962c46ab807cb656e6b32812e7a638d9745bcc68bffdabd5d0ce1b7cfea50685@ec2-107-20-204-179.compute-1.amazonaws.com:5432/de0s4m738p3mbm'
	}
}
