import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslations } from './utils/translations'
import { useLanguage } from './context/useLanguage.ts'
import {
  contactImage,
  featureIcons,
  galleryImage,
  heroImage,
  valueIcons,
  workspaceImage,
} from './assets/figmaAssets'

const MembershipIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M30.0009 60C28.0042 60 26.1245 59.2214 24.7111 57.8064L19.334 52.4235H15.0438C10.9206 52.4235 7.5652 49.0645 7.5652 44.9368V40.642L2.18561 35.2566C-0.728538 32.3368 -0.728538 27.5902 2.18561 24.6704L7.5652 19.285V14.9902C7.5652 10.8625 10.9206 7.50351 15.0438 7.50351H19.334L24.7136 2.1206C27.538 -0.706866 32.4639 -0.706866 35.2908 2.1206L40.6679 7.50351H44.9581C49.0813 7.50351 52.4367 10.8625 52.4367 14.9902V19.285L57.8163 24.6704C60.7279 27.5902 60.7279 32.3368 57.8163 35.2566L52.4367 40.642V44.9368C52.4367 49.0645 49.0813 52.4235 44.9581 52.4235H40.6679L35.2883 57.8064C33.8773 59.2189 31.9977 60 30.0009 60Z"
      fill="#8C2F39"
    />
    <path
      d="M29 22.04C26.244 22.04 24 24.284 24 27.04V33.04C24 35.796 26.244 38.04 29 38.04C31.756 38.04 34 35.796 34 33.04V27.04C34 24.284 31.756 22.04 29 22.04ZM32 33.04C32 34.694 30.654 36.04 29 36.04C27.346 36.04 26 34.694 26 33.04V27.04C26 25.386 27.346 24.04 29 24.04C30.654 24.04 32 25.386 32 27.04V33.04ZM48 36.02C48 37.114 47.114 38 46.02 38C44.926 38 44.04 37.114 44.04 36.02C44.04 34.926 44.926 34.04 46.02 34.04C47.114 34.04 48 34.926 48 36.02ZM36 24.02C36 22.904 36.896 22 38 22C39.104 22 40 22.904 40 24.02C40 25.136 39.104 26.04 38 26.04C36.896 26.04 36 25.136 36 24.02ZM14 36.04H21C21.552 36.04 22 36.488 22 37.04C22 37.592 21.552 38.04 21 38.04H14C12.702 38.04 12 37.01 12 36.04C12 34.12 13.946 32.79 16.006 31.384C17.97 30.042 20 28.656 20 27.04C20 25.386 18.654 24.04 17 24.04C15.346 24.04 14 25.386 14 27.04C14 27.592 13.552 28.04 13 28.04C12.448 28.04 12 27.592 12 27.04C12 24.284 14.244 22.04 17 22.04C19.756 22.04 22 24.284 22 27.04C22 29.712 19.416 31.478 17.134 33.036C15.666 34.038 14 35.176 14 36.04ZM47.814 23.622L37.814 37.622C37.618 37.896 37.312 38.04 37 38.04C36.798 38.04 36.596 37.98 36.42 37.854C35.97 37.534 35.866 36.908 36.188 36.46L46.188 22.46C46.51 22.01 47.134 21.908 47.582 22.228C48.032 22.548 48.136 23.174 47.814 23.622Z"
      fill="white"
    />
  </svg>
)

function toBookingSlug(value: string): string {
  return encodeURIComponent(value.trim().toLowerCase().replace(/\s+/g, '-'))
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <main className="mobile-frame">
        <section className="hero-section" id="hero">
          <img className="hero-image" src={heroImage} alt={t.heroImageAlt} />
          <div className="hero-overlay" />

          <header className="topbar">
            <div className="brand-mark">
              <img className="nomad-logo" src="/assets/figma/nomad-logo.svg" alt="NOMAD coworking space" />
            </div>
            <button className="menu-button" type="button" aria-label={t.menuButtonLabel}>
              <span />
              <span />
              <span />
            </button>
          </header>

          <div className="hero-copy">
            <p className="display-title">{t.heroTitle}</p>
            <p className="display-subtitle">{t.heroSubtitle}</p>
            <p className="display-support">{t.heroSupportText}</p>
            <div className="hero-buttons">
              <a className="primary-button" href="#kontakt">
                {t.reservationBtn}
              </a>
              <button className="secondary-button hero-learn-more" type="button" onClick={() => document.getElementById('o-nama')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.learnMoreBtn}
              </button>
            </div>
          </div>

          <div className="scroll-indicator" aria-hidden="true">
            <img className="scroll-indicator-icon" src="/assets/figma/explore-space.svg" alt="" />
          </div>
        </section>

        <section className="value-section section-light" id="o-nama">
          {t.values.map((value, idx) => (
            <article className="value-card" key={value.title}>
              <img className="value-icon" src={valueIcons[idx]} alt="" aria-hidden="true" />
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </article>
          ))}
        </section>

        <section className="story-section section-olive">
          <h2 className="section-title">{t.storyTitle}</h2>
          <div className="story-copy">
            {t.storyParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <a className="secondary-button" href="#kontakt">
            {t.reservationBtn}
          </a>
          <img className="story-image" src={galleryImage} alt={t.storyImageAlt} />
        </section>

        <section className="features-section section-light" id="radni-prostor">
          <h2 className="section-title dark features-title">{t.featuresTitle}</h2>
          <div className="feature-list">
            {t.features.map((feature, idx) => (
              <article className="feature-card" key={feature.title}>
                <img className="feature-badge" src={featureIcons[idx]} alt="" aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="immersive-section">
          <img src={workspaceImage} alt={t.immersiveImageAlt} />
          <div className="immersive-overlay" />
          <div className="immersive-copy">
            <h2 className="immersive-title">{t.immersiveTitle}</h2>
            <div className="immersive-divider" aria-hidden="true" />
            <p className="immersive-description">{t.immersiveDescription}</p>
          </div>
        </section>

        <section className="membership-section section-cream" id="clanstvo">
          <h2 className="section-title dark">{t.membershipSectionTitle}</h2>
          <div className="membership-list">
            {t.memberships.slice(0, 3).map((membership) => (
              <article
                className={`membership-card${membership.featured ? ' featured' : ''}`}
                key={membership.title}
              >
                <div className="membership-badge">
                  <MembershipIcon />
                </div>
                <p className="membership-eyebrow">{membership.eyebrow}</p>
                <h3>{membership.title}</h3>
                <p className="membership-price">
                  <span className="membership-strike">{membership.strike}</span>
                  {membership.price}
                </p>
                <p className="membership-includes">{t.membershipIncludesLabel}</p>
                <ul>
                  {membership.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="membership-description">{membership.description}</p>
                <Link
                  className="package-button"
                  to="/booking/$bookingPackage"
                  params={{ bookingPackage: toBookingSlug(membership.title) }}
                >
                  {t.selectPackageBtn}
                </Link>
              </article>
            ))}
          </div>
        </section>


        {(() => {
          const business = t.memberships[3]
          return (
            <section className="business-section section-cream">
              <h2 className="section-title dark">{t.businessSectionTitle}</h2>
              <article className="business-card">
                <div className="business-card-badge">
                  <MembershipIcon />
                </div>
                <p className="membership-eyebrow business-eyebrow">{business.eyebrow}</p>
                <h3 className="business-card-title">{business.title}</h3>
                <p className="membership-price business-price">
                  <span className="membership-strike">{business.strike}</span>
                  {business.price}
                </p>
                <p className="membership-includes">{t.membershipIncludesLabel}</p>
                <ul className="business-items">
                  {business.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="membership-description business-desc">{business.description}</p>
                <Link
                  className="package-button business-btn"
                  to="/booking/$bookingPackage"
                  params={{ bookingPackage: toBookingSlug(business.title) }}
                >
                  {t.selectPackageBtn}
                </Link>
              </article>
            </section>
          )
        })()}

        <section className="gallery-section section-olive" id="galerija">
          <h2 className="section-title">{t.galleryTitle}</h2>
          <div className="gallery-panel">
            <img src={galleryImage} alt={t.galleryImageAlt} />
            <div className="gallery-overlay" />
            <div className="gallery-controls" aria-hidden="true">
              <span>{t.galleryPrevLabel}</span>
              <span>{t.galleryNextLabel}</span>
            </div>
          </div>
        </section>

        <section className="faq-section section-light" id="faq">
          <h2 className="section-title dark">{t.faqSectionTitle}</h2>
          <div className="faq-list">
            {t.faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <article className={`faq-item${isOpen ? ' open' : ''}`} key={faq.question}>
                  <button
                    className="faq-trigger"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-symbol">{isOpen ? '-' : '+'}</span>
                  </button>
                  {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                </article>
              )
            })}
          </div>
        </section>

        <section className="contact-section section-cream" id="kontakt">
          <h2 className="section-title dark">{t.contactSectionTitle}</h2>
          <p className="contact-intro">{t.contactIntro}</p>

          <form className="contact-form">
            <input type="text" placeholder={t.contactForm.namePlaceholder} />
            <input type="email" placeholder={t.contactForm.emailPlaceholder} />
            <input type="tel" placeholder={t.contactForm.phonePlaceholder} />
            <input type="text" placeholder={t.contactForm.subjectPlaceholder} />
            <textarea placeholder={t.contactForm.messagePlaceholder} rows={6} />
            {/* <div className="captcha-placeholder">{t.contactForm.captchaPlaceholder}</div> */}
            <button className="primary-button full-width" type="submit">
              {t.contactForm.submitBtn}
            </button>
          </form>

          <img className="contact-image" src={contactImage} alt={t.contactImageAlt} />
        </section>
    </main>
  )
}

export default App
