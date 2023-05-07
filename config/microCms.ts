type MicroCMSConfig = {
  serviceDomain: string
  apiKey: string
  perPage: string
}

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || ''
const apiKey = process.env.MICROCMS_API_KEY || ''
const perPage = process.env.PER_PAGE || ''

if (!serviceDomain) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!apiKey) {
  throw new Error('MICROCMS_API_KEY is required')
}

if (!perPage) {
  throw new Error('PER_PAGE is required')
}

export const microCMSConfig: MicroCMSConfig = {
  serviceDomain: serviceDomain,
  apiKey: apiKey,
  perPage: perPage,
}
