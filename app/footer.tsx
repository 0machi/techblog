import { font } from '@/fonts'
import { getCurrentYear } from '@/libs/dayjs'
import type { Service } from '@/types'

interface FooterProps {
  serviceList: Service[]
  contactList: Service[]
}

export default function Footer({ serviceList, contactList }: FooterProps) {
  return (
    <>
      <div
        className={`${font.JP_REGULAR} max-w-5xl max-lg:max-w-3xl mx-auto pt-12 flex flex-col items-center justify-center border-x border-dashed border-slate-200`}
      >
        <div className={`max-w-[680px] lg:min-w-[480px] h-32 flex gap-24`}>
          <div className={`flex flex-col`}>
            <h3 className={`text-lg`}>Services</h3>
            <ul className={`flex flex-col justify-center items-left text-sm`}>
              {serviceList.map((service) => {
                return (
                  <li key={service.name} className={`py-0.5`}>
                    <a href={service.url} target='_blank' rel='noopener noreferrer'>
                      {service.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={`flex flex-col`}>
            <h3 className={`text-lg`}>Contacts</h3>
            <ul className={`flex flex-col justify-center items-left text-sm`}>
              {contactList.map((service) => {
                return (
                  <li key={service.name} className={`py-0.5`}>
                    <a href={service.url} target='_blank' rel='noopener noreferrer'>
                      {service.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <span
          className={`text-xs text-neutral-400 block py-8`}
        >{`© ${getCurrentYear()} shinaps`}</span>
      </div>
    </>
  )
}
