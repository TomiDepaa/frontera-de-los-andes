'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Cabañas', href: '/cabins' },
  { name: 'Actividades y Puntos de Interés', href: '/whatDo' },
  { name: 'Contacto', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href) => pathname === href

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-30 px-3 pt-2 md:px-6">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-green-brand px-5 py-2.5 shadow-soft"
          aria-label="Global"
        >
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Frontera de Los Andes</span>
            <img className="h-12 w-auto" src="/images/Frontera_Trans.png" alt="Logo Frontera de Los Andes" />
          </a>

          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>

          <div className="hidden lg:flex lg:gap-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-semibold leading-6 transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px]" />
        <DialogPanel className="fixed inset-y-0 right-0 z-30 w-4/5 max-w-xs overflow-y-auto bg-green-brand/95 backdrop-blur-md shadow-soft px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Frontera de Los Andes</span>
              <img className="h-9 w-auto" src="/images/Frontera_Trans.png" alt="Logo Frontera de Los Andes" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex items-center gap-2 rounded-xl px-3 py-3 text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-white/15 text-white'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                )}
                {link.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}