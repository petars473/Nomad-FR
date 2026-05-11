import { useMemo, useState } from 'react'
import { useForm, type FieldErrors } from 'react-hook-form'
import { useNavigate, useParams } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useLanguage } from './context/useLanguage.ts'
import { useTranslations } from './utils/translations'
import { useApi } from './app/hooks/useApi'
import './Booking.css'

type BookingFormValues = {
  name: string
  email: string
  phone: string
  package: string
  date: string
  notes: string
}

const ReservationPackage = {
  NomadDay: 1,
  NomadTeam: 2,
  NomadMember: 3,
  NomadBusiness: 4,
  NeedRecommendation: 5,
} as const

type ReservationPackage = (typeof ReservationPackage)[keyof typeof ReservationPackage]

type CreateInquiryRequest = {
  Package: ReservationPackage
  FullName: string
  Email: string
  PhoneNumber: string
  Notes?: string
}

// const CAPTCHA_IMAGE = '/assets/figma/captcha.png'

function toPackageSlug(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '-')
}

function resolvePackageFromUrl(bookingPackage: string | undefined, options: string[]): string {
  if (!bookingPackage) {
    return ''
  }

  const decoded = decodeURIComponent(bookingPackage).trim().toLowerCase()
  const matched = options.find((option) => toPackageSlug(option) === decoded)

  if (matched) {
    return matched
  }

  return decodeURIComponent(bookingPackage).replace(/[-_]+/g, ' ').trim()
}

function toReservationPackage(value: string): ReservationPackage {
  const slug = toPackageSlug(value)

  if (slug === 'nomad-day') {
    return ReservationPackage.NomadDay
  }
  if (slug === 'nomad-team') {
    return ReservationPackage.NomadTeam
  }
  if (slug === 'nomad-member') {
    return ReservationPackage.NomadMember
  }
  if (slug === 'nomad-business') {
    return ReservationPackage.NomadBusiness
  }

  return ReservationPackage.NeedRecommendation
}

function Booking() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { bookingPackage } = useParams({ strict: false })
  const { apiCall } = useApi()
  const navigate = useNavigate()
  const selectedFromUrl = useMemo(
    () => resolvePackageFromUrl(bookingPackage, t.memberships.map((membership) => membership.title)),
    [bookingPackage, t.memberships],
  )

  const packageOptions = useMemo(() => {
    const titles = t.memberships.map((membership) => membership.title)

    if (!selectedFromUrl) {
      return titles
    }

    return titles.includes(selectedFromUrl) ? titles : [selectedFromUrl, ...titles]
  }, [selectedFromUrl, t.memberships])

  const defaultPackage = selectedFromUrl || ''
  const { register, handleSubmit, setValue } = useForm<BookingFormValues>({
    defaultValues: { package: defaultPackage },
  })
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage)
  const isNomadDay = selectedPackage.trim().toLowerCase() === 'nomad day'

  async function onSubmit(data: BookingFormValues) {
    const payload: CreateInquiryRequest = {
      Package: toReservationPackage(data.package),
      FullName: data.name,
      Email: data.email,
      PhoneNumber: data.phone,
      Notes: data.notes?.trim() || undefined,
    }

    try {
      const response = await apiCall('/inquiry', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        await navigate({ to: '/booking/confirmation' })
      } else {
        toast.error(t.booking.messages.submitFailed)
      }
    } catch (error) {
      toast.error(t.booking.messages.submitError)
      console.error('Booking error:', error)
    }
  }

  function onInvalidSubmit(errors: FieldErrors<BookingFormValues>) {
    if (errors.date) {
      toast.error(t.booking.messages.dateRequired)
    } else if (errors.phone) {
      toast.error(t.booking.messages.phoneRequired)
    }
  }

  return (
    <main className="booking-page">
      <section className="booking-shell">
        <h1 className="booking-title">{t.booking.title}</h1>
        <p className="booking-lead">{t.booking.introLine1}</p>
        <p className="booking-lead booking-lead-secondary">
          {t.booking.introLine2Before}{' '}
          <a href="/#clanstvo" className="booking-membership-link">
            {t.booking.introMembershipLabel}
          </a>{' '}
          {t.booking.introLine2After}
        </p>

        <form className="booking-form" onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
          <div className="booking-grid booking-grid-top">
            <input type="text" placeholder={t.booking.namePlaceholder} className="booking-field" {...register('name')} />
            <input type="email" placeholder={t.booking.emailPlaceholder} className="booking-field" {...register('email')} />
            <input
              type="tel"
              placeholder={t.booking.phonePlaceholder}
              className="booking-field booking-field-phone"
              {...register('phone', { required: true })}
            />
          </div>

          <div className="booking-grid booking-grid-mid">
            <select
              className="booking-field booking-select"
              {...register('package')}
              onChange={(e) => {
                setValue('package', e.target.value)
                setSelectedPackage(e.target.value)
                setValue('date', '')
              }}
            >
              <option value="" disabled>
                {t.booking.packagePlaceholder}
              </option>
              {packageOptions.map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
            {isNomadDay && (
              <input
                type="date"
                placeholder={t.booking.datePlaceholder}
                className="booking-field booking-field-date"
                {...register('date', { required: isNomadDay })}
              />
            )}
          </div>

          <textarea rows={6} className="booking-notes" placeholder={t.booking.notesPlaceholder} {...register('notes')} />

          <div className="booking-actions">
            {/* <img src={sCAPTCHA_IMAGE} alt={t.booking.captchaAlt} className="booking-captcha" loading="lazy" /> */}

            <div className="booking-submit-wrap">
              <button type="submit" className="booking-submit">
                {t.booking.sendReservation}
              </button>
              <p className="booking-payment-note">
                {t.booking.paymentNoteLine1}
                <br />
                {t.booking.paymentNoteLine2}
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Booking