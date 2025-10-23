'use client'
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const placesActivities = [
  { name: 'Puntos de interes', href: '/whatDo'},
  { name: 'Actividades', href: '/whatDo'}
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-brand m-3 rounded-full fixed top-0 right-0 left-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Frontera de Los Andes</span>
            <img className="h-14 w-auto" src="/images/Frontera_Trans.png" alt="Logo Frontera de Los Anes" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          

          <a href="/" className="text-sm p-1 rounded-lg font-semibold leading-6 text-white hover:bg-emerald-900">
            Inicio
          </a>
          <a href="/cabins" className="text-sm p-1 rounded-lg font-semibold leading-6 text-white hover:bg-emerald-900">
            Cabañas
          </a>
          <a href="/whatDo" className="text-sm p-1 rounded-lg font-semibold leading-6 text-white hover:bg-emerald-900">
            Actividades y Puntos de Interes
          </a>
          <a href="/contact" className="text-sm p-1 rounded-lg font-semibold leading-6 text-white hover:bg-emerald-900 ">
            Contacto
          </a>
        </PopoverGroup>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-brand px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Frontera de Los Andes</span>
              <img
                className="h-8 w-auto"
                src="/images/Frontera_Trans.png"
                alt="Logo Frontera de Los Andes"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-emerald-900"
                >
                  Inicio
                </a>
                <a
                  href="/cabins"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-emerald-900"
                >
                  Cabañas
                </a>
                <a
                  href="/whatDo"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-emerald-900"
                >
                  Actividades y Puntos de Interes
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-emerald-900"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
