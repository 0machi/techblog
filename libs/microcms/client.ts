import 'server-only'
import { createClient } from 'microcms-js-sdk'
import { microCMSConfig } from '@/config/microCms'

export const client = createClient({
  serviceDomain: microCMSConfig.serviceDomain,
  apiKey: microCMSConfig.apiKey,
  customFetch: (input, init) => {
    if (typeof input === 'string') {
      const newInput = new URL(input)
      const time = new Date()
      newInput.searchParams.set('cacheclearparam', `${time.getMilliseconds()}`)
      return fetch(newInput.href, init)
    }
    return fetch(input, init)
  },
})
