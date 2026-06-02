import { Link } from '@tanstack/react-router'
import { type ReactNode } from 'react'
import { useLanguage } from './context/useLanguage.ts'
import { useTranslations } from './utils/translations'
import './InfoPages.css'

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="info-page">
      <section className="info-page-shell">{children}</section>
    </main>
  )
}

export function WorkingHoursPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const page = t.infoPages.workingHours

  return (
    <PageShell>
      <h1 className="info-page-title">{page.title}</h1>
      <div className="info-page-body">
        <p>{page.intro}</p>
        <p>{page.standardLabel}</p>
        <p className="info-page-time">{page.standardRange}</p>
        <p>{page.teamLabel}</p>
        <p className="info-page-time">{page.teamRange}</p>
        <p>
          {page.reservationPrefix}{' '}
          <Link to="/booking" className="info-page-inline-link">
            {page.reservationLink}
          </Link>
          {page.reservationSuffix}
        </p>
      </div>
    </PageShell>
  )
}

export function HouseRulesPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const page = t.infoPages.houseRules

  return (
    <PageShell>
      <h1 className="info-page-title">{page.title}</h1>
      <div className="info-page-body info-page-house-rules">
        <p className="info-page-house-rules-intro">{page.intro}</p>
        <ul className="info-page-list info-page-house-rules-list">
          {page.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="info-page-house-rules-closing">{page.closing}</p>
      </div>
    </PageShell>
  )
}

export function PrivacyPolicyPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const page = t.infoPages.privacyPolicy

  return (
    <PageShell>
      <h1 className="info-page-title">{page.title}</h1>
      <div className="info-page-body">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageShell>
  )
}

export function TermsOfUsePage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const page = t.infoPages.termsOfUse

  return (
    <PageShell>
      <h1 className="info-page-title">{page.title}</h1>
      <div className="info-page-body">
        <p>{page.intro}</p>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageShell>
  )
}
