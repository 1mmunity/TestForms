import { FC, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CloseOutline, MenuOutline } from 'react-ionicons'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Posts', href: '#', current: false },
  { name: 'Updates', href: '#', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Header: FC<{}> = () => {
  return (
  <Disclosure as="nav" className="bg-black sticky top-0 backdrop-blur-lg z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href='/'>
                      <a className='flex select-none'>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/favicon.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:flex h-8 w-auto"
                        src="/favicon.svg"
                        alt="Workflow"
                      />
                      <p className='hidden lg:flex items-center font-medium tracking-widest uppercase text-white ml-2 mr-4'>TestForms</p>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white border-secondary-500 border-b-2' : 'text-gray-300 border-transparent hover:text-white',
                          'px-3 py-2 text-sm font-medium border-b-2 text-white'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:hidden">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full">
                      <span className="sr-only">Open user menu</span>
                      <MenuOutline cssClasses="h-8 w-8" width='1' height='1' color="#fff" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 filter border border-gray-800 bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {navigation.map((item, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames('border-l-2 block px-4 py-2 text-sm text-gray-200', active ? 'bg-gray-800 border-primary-500' : 'border-transparent', item.current && 'border-secondary-500 bg-secondary-600/20')}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Header;
