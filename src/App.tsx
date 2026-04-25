import { useState } from 'react'
import './App.css'
import { useTranslations } from './utils/translations'
import {
  contactImage,
  facebookIcon,
  featureIcons,
  galleryImage,
  heroImage,
  instaIcon,
  linkedinIcon,
  valueIcons,
  workspaceImage,
} from './assets/figmaAssets'

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [language, setLanguage] = useState<'sr' | 'en'>('sr')
  const t = useTranslations(language)

  return (
    <div className="page-shell">
      <div className="news-bar">{t.newsBar}</div>

      <header className="sticky-toolbar">
        <a className="toolbar-brand" href="#hero">
          <span className="toolbar-brand-name">NOMAD</span>
          <span className="toolbar-brand-subtitle">coworking space</span>
        </a>
        <nav className="toolbar-nav" aria-label={t.toolbarNavAriaLabel}>
          {t.toolbarLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="toolbar-controls">
          <select
            className="lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'sr' | 'en')}
            aria-label={t.languageSelectAriaLabel}
          >
            <option value="sr">Srpski</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <main className="mobile-frame">
        <section className="hero-section" id="hero">
          <img className="hero-image" src={heroImage} alt={t.heroImageAlt} />
          <div className="hero-overlay" />

          <header className="topbar">
            <div className="brand-mark">
              <span className="brand-name">NOMAD</span>
              <span className="brand-subtitle">coworking space</span>
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
            {t.memberships.map((membership) => (
              <article
                className={`membership-card${membership.featured ? ' featured' : ''}`}
                key={membership.title}
              >
                <p className="membership-eyebrow">{membership.eyebrow}</p>
                <h3>{membership.title}</h3>
                <p className="membership-price">
                  <span className="membership-strike">{membership.strike}</span>
                  {membership.price}
                </p>
                <ul>
                  {membership.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="membership-description">{membership.description}</p>
                <button className="package-button" type="button">
                  {t.selectPackageBtn}
                </button>
              </article>
            ))}
          </div>
        </section>

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
            <div className="captcha-placeholder">{t.contactForm.captchaPlaceholder}</div>
            <button className="primary-button full-width" type="submit">
              {t.contactForm.submitBtn}
            </button>
          </form>

          <img className="contact-image" src={contactImage} alt={t.contactImageAlt} />
        </section>

        <footer className="footer-section">
          <div className="footer-brand">
            <p className="brand-name">{t.footerBrand}</p>
            <p>{t.footerDescription}</p>
            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer-block">
            <h3>{t.footerTeamTitle}</h3>
            <p>{t.footerTeamText}</p>
          </div>

          <div className="footer-block">
            <h3>{t.footerAddressTitle}</h3>
            <p>{t.footerAddress}</p>
          </div>

          <div className="footer-grid">
            <div>
              <h3>{t.footerNavigationTitle}</h3>
              <ul>
                {t.footerNavigation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t.footerPackagesTitle}</h3>
              <ul>
                {t.footerPackages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t.footerInfoTitle}</h3>
              <ul>
                {t.footerInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
