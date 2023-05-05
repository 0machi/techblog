import Link from 'next/link'
import type { Service } from './types/index'

export default function Header({ serviceList }: { serviceList: Service[] }) {
  return (
    <header className='relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link className='flex-none text-xl font-semibold' href='/blogs/pages/1'>
            shinaps
          </Link>
        </div>
        <div
          id='navbar-with-mega-menu'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
          <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
            <div className='hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]'>
              <button
                id='hs-mega-menu-basic-dr'
                type='button'
                className='flex items-center w-full hover:text-violet-700 font-medium'
              >
                Our Services
                <svg
                  className='ml-2 w-2.5 h-2.5 hover:text-violet-700'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>

              <div className='hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden'>
                {serviceList.map((service) => {
                  return (
                    <a
                      key={service.name}
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm hover:text-violet-700 focus:ring-2 focus:ring-blue-500'
                      href={service.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {service.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
