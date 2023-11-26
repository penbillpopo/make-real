const env =
	process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
		? 'production'
		: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
		? 'preview'
		: 'development'

export const LINK_HOST = {
	production: 'makereal-link.localhost',
	preview: `link---${process.env.NEXT_PUBLIC_VERCEL_URL}`,
	development: 'makereal-link.localhost',
}[env]

export const APP_HOST = {
	production: 'localhost',
	preview: process.env.NEXT_PUBLIC_VERCEL_URL,
	development: 'localhost',
}[env]

export const PROTOCOL = env === 'development' ? 'http://' : 'https://'
