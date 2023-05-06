import { getCurrentYear } from '@/app/libs/dayjs'
import type { Service } from '@/app/types'

export default function Footer({
                                   serviceList,
                                   contactList,
                               }: {
    serviceList: Service[]
    contactList: Service[]
}) {
    return (
        <footer>
            <div>
                <div>
                    <div>
                        <h4>Services</h4>
                        <div>
                            {serviceList.map((service) => {
                                return (
                                    <p key={service.name}>
                                        <a
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
                    <div>
                        <h4>Contacts</h4>
                        <div>
                            {contactList.map((contact) => {
                                return (
                                    <p key={contact.name}>
                                        <a
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
                <div>
                    <div>
                        <p>
                            {`© ${getCurrentYear()} shinaps`}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
