export const BASE_APP_URL = 'http://some-recruitment-form-page.eu'

export const links = {
  recruitmentForm: '/#/',
  recruitmentSuccess: '/#/success',
  recruitmentFailed: '/#/failed'
}

export const getFullUrl = (url: string): string => {
  return BASE_APP_URL + url
}
