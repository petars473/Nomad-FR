import { Link } from '@tanstack/react-router'
import { useLanguage } from './context/useLanguage.ts'
import { useTranslations } from './utils/translations'
import './BookingConfirmation.css'

function BookingConfirmation() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const c = t.booking.confirmation

  return (
    <main className="booking-confirm-page">
      <section className="booking-confirm-shell">
        <h1 className="booking-confirm-title">{c.title}</h1>
        <div className="booking-confirm-body">
          <p>{c.line1}</p>
          <p>{c.line2}</p>
        </div>
        <Link to="/" className="booking-confirm-btn">
          {c.backBtn}
        </Link>
      </section>
    </main>
  )
}

export default BookingConfirmation
