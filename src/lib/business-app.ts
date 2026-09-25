const BUSINESS_APP_ORIGIN =
  (process.env.NEXT_PUBLIC_APP_URL || 'https://fahampesa-business-web-production.up.railway.app').replace(/\/$/, '')

export const BUSINESS_LOGIN_URL = `${BUSINESS_APP_ORIGIN}/?intent=login`
export const BUSINESS_SIGNUP_URL = `${BUSINESS_APP_ORIGIN}/?intent=signup`
export const BUSINESS_INSTALL_URL = `${BUSINESS_APP_ORIGIN}/?intent=install`
