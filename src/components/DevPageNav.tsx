import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import './DevPageNav.css'

const DEV_LINKS = [
  { label: 'Početna', to: '/' as const },
  { label: 'Rezervacija', to: '/booking' as const },
  {
    label: 'Rezervacija (NOMAD Day)',
    to: '/booking/$bookingPackage' as const,
    params: { bookingPackage: 'nomad-day' },
  },
  { label: 'Potvrda rezervacije', to: '/booking/confirmation' as const },
  { label: 'Potvrda kontakta', to: '/contact/confirmation' as const },
  { label: 'Radno vrijeme', to: '/working-hours' as const },
  { label: 'Pravila korištenja', to: '/house-rules' as const },
  { label: 'Politika privatnosti', to: '/privacy-policy' as const },
  { label: 'Uslovi korištenja', to: '/terms-of-use' as const },
  { label: 'Kontakt (sekcija)', to: '/' as const, hash: 'kontakt' as const },
] as const

export function DevPageNav() {
  const [open, setOpen] = useState(false)

  if (!import.meta.env.DEV) {
    return null
  }

  return (
    <div className={`dev-page-nav${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="dev-page-nav-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="dev-page-nav-panel"
      >
        {open ? '×' : 'Dev'}
      </button>
      {open ? (
        <nav id="dev-page-nav-panel" className="dev-page-nav-panel" aria-label="Test navigacija (samo dev)">
          <p className="dev-page-nav-title">Test stranice</p>
          <ul className="dev-page-nav-list">
            {DEV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  params={'params' in item ? item.params : undefined}
                  hash={'hash' in item ? item.hash : undefined}
                  className="dev-page-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
