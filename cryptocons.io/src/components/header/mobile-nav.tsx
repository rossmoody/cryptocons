import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import type { NavItems } from '.'

const MobileNav = ({ data }: NavItems) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const themeItem = {
    name: 'Change theme',
    description: 'Toggle the color mode between dark and light',
    icon: SunIcon,
    href: '#',
    ariaLabel: 'Change the theme',
  }

  return (
    <div className="sm:hidden">
      <Popover className="relative">
        <Popover.Button className="w-8 h-8 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-md items-center flex justify-center">
          <MenuIcon className="w-6 h-6" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 right-0 mt-3 transform px-2 w-screen max-w-sm -mr-4">
            <div className="rounded-lg shadow-lg dark:shadow-dark ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white dark:bg-slate-900  px-5 py-6 sm:gap-8 sm:p-8">
                {data.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-slate-500 dark:text-slate-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
                <a
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <themeItem.icon
                    className="flex-shrink-0 h-6 w-6 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                      {themeItem.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {themeItem.description}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default MobileNav
