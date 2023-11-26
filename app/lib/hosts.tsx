const env =
	process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
		? 'production'
		: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
		? 'preview'
		: 'development'

export const LINK_HOST = {
	production: 'admin.imaginetw.com',
	preview: `link---${process.env.NEXT_PUBLIC_VERCEL_URL}`,
	development: 'admin.imaginetw.com',
}[env]

export const APP_HOST = {
	production: 'admin.imaginetw.com',
	preview: process.env.NEXT_PUBLIC_VERCEL_URL,
	development: 'admin.imaginetw.com',
}[env]

export const PROTOCOL = env === 'development' ? 'http://' : 'https://'
