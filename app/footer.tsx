import Link from 'next/link'
import { getCurrentYear } from './libs/dayjs'
import type { Service } from './types/index'

export default function Footer({
  serviceList,
  contactList,
}: {
  serviceList: Service[]
  contactList: Service[]
}) {
  return (
    <footer>
      <hr />
      <div className='max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          <div className='col-span-full lg:col-span-1'>
            <Link
              className='flex-none text-xl font-semibold hover:text-indigo-700'
              href='/blogs/pages/1'
              aria-label='Brand'
            >
              shinaps
            </Link>
          </div>

          <div className='col-span-1'>
            <h4 className='font-semibold'>Services</h4>

            <div className='mt-3 grid space-y-3'>
              {serviceList.map((service) => {
                return (
                  <p key={service.name}>
                    <a
                      className='inline-flex gap-x-2 hover:text-indigo-700'
                      href={service.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {service.name}
                    </a>
                  </p>
                )
              })}
            </div>
          </div>
          <div className='col-span-2'>
            <h4 className='font-semibold'>Contacts</h4>

            <div className='mt-3 grid space-y-3'>
              {contactList.map((contact) => {
                return (
                  <p key={contact.name}>
                    <a
                      className='inline-flex gap-x-2 hover:text-indigo-700'
                      href={contact.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {contact.name}
                    </a>
                  </p>
                )
              })}
            </div>
          </div>
        </div>

        <div className='mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center'>
          <div className='flex justify-between items-center'>
            <p className='text-sm text-gray-400'>
              {`© ${getCurrentYear()} shinaps. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
