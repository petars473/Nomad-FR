import { useEffect, useState } from 'react'
import './App.css'
import { useTranslations } from './utils/translations'
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

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [language, setLanguage] = useState<'sr' | 'en'>('sr')
  const [newsBarIndex, setNewsBarIndex] = useState(0)
  const t = useTranslations(language)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNewsBarIndex((currentIndex) => (currentIndex + 1) % t.newsBarItems.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [t.newsBarItems.length])

  return (
    <div className="page-shell">
      <div className="news-bar" aria-live="polite">
        <span className="news-bar-text" key={`${language}-${newsBarIndex}`}>
          {t.newsBarItems[newsBarIndex]}
        </span>
      </div>

      <header className="sticky-toolbar">
        <a className="toolbar-brand" href="#hero">
          <img className="toolbar-logo" src="/assets/figma/nomad-logo.svg" alt="NOMAD coworking space" />
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
          <div className="immersive-media">
            <img src={workspaceImage} alt={t.immersiveImageAlt} />
            <div className="immersive-overlay" />
            <div className="immersive-left-copy">
              <h2 className="immersive-left-title">{t.immersiveTitle}</h2>
              <p className="immersive-left-description">{t.immersiveDescription}</p>
            </div>
          </div>
          <div className="immersive-copy">
            <h2 className="immersive-panel-title">{t.openSpaceTitle}</h2>
            <p className="immersive-panel-capacity">
              <span className="immersive-panel-capacity-label">{t.openSpaceCapacityLabel}</span>
              <span className="immersive-panel-capacity-number">{t.openSpaceCapacityNumber}</span>
            </p>
            <p className="immersive-panel-description">{t.openSpaceDescription}</p>
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
                <button className="package-button" type="button">
                  {t.selectPackageBtn}
                </button>
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
                <button className="package-button business-btn" type="button">
                  {t.selectPackageBtn}
                </button>
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

        <footer className="footer-section">
          <div className="footer-brand">
            <img className="nomad-logo footer-logo" src="/assets/figma/nomad-logo.svg" alt="NOMAD coworking space" />
            <p>{t.footerDescription}</p>
            <div className="footer-social" aria-label="Social links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.07302 24.999H8.91585V13.8257H12.493L13.2058 9.31275H8.91483V5.90058C8.93914 5.61472 9.01977 5.3365 9.15206 5.08194C9.28435 4.82738 9.4657 4.6015 9.68565 4.41732C9.90561 4.23314 10.1598 4.09429 10.4337 4.00878C10.7075 3.92326 10.9956 3.89277 11.2813 3.91905H13.3717V0.177978L9.63168 0.012002C6.05455 -0.206923 4.07302 2.59939 4.07302 5.95658V9.31682H0V13.8297H4.07302V24.999Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.21783 0H16.8371C18.4839 0.00735193 20.0611 0.664804 21.2256 1.82928C22.3901 2.99376 23.0475 4.57103 23.0549 6.21783V16.7822C23.0475 18.429 22.3901 20.0062 21.2256 21.1707C20.0611 22.3352 18.4839 22.9926 16.8371 23H6.21783C4.57103 22.9926 2.99376 22.3352 1.82928 21.1707C0.664804 20.0062 0.00735193 18.429 0 16.7822L0 6.21783C0.00735193 4.57103 0.664804 2.99376 1.82928 1.82928C2.99376 0.664804 4.57103 0.00735193 6.21783 0ZM17.7173 4.01714C18.0661 4.02179 18.3992 4.1624 18.6459 4.40902C18.8925 4.65565 19.0331 4.98881 19.0378 5.33756C19.0331 5.68631 18.8925 6.01946 18.6459 6.26609C18.3992 6.51271 18.0661 6.65332 17.7173 6.65797C17.5433 6.66025 17.3706 6.62766 17.2093 6.56211C17.0481 6.49656 16.9016 6.39938 16.7786 6.27631C16.6555 6.15324 16.5583 6.00677 16.4928 5.84554C16.4272 5.68431 16.3946 5.51159 16.3969 5.33756C16.3946 5.16353 16.4272 4.9908 16.4928 4.82957C16.5583 4.66834 16.6555 4.52187 16.7786 4.3988C16.9016 4.27573 17.0481 4.17856 17.2093 4.11301C17.3706 4.04746 17.5433 4.01486 17.7173 4.01714ZM11.4995 5.22777H11.5544C13.2125 5.24568 14.7976 5.91231 15.9701 7.08481C17.1426 8.25732 17.8092 9.84242 17.8271 11.5005C17.8185 13.1615 17.1548 14.7519 15.9803 15.9264C14.8058 17.1009 13.2154 17.7646 11.5544 17.7732H11.4995C9.84417 17.7627 8.26046 17.0967 7.0951 15.921C5.92974 14.7454 5.27767 13.1559 5.28167 11.5005C5.28705 9.848 5.94214 8.26392 7.1055 7.09029C8.26885 5.91667 9.84711 5.24768 11.4995 5.22777ZM11.4995 7.37457H11.5544C12.6462 7.38241 13.6911 7.81962 14.4632 8.59169C15.2353 9.36376 15.6725 10.4087 15.6803 11.5005C15.6841 12.6011 15.2523 13.6585 14.4794 14.4419C13.7064 15.2253 12.6549 15.6713 11.5544 15.6823H11.4995C10.399 15.6713 9.3475 15.2253 8.57452 14.4419C7.80155 13.6585 7.36983 12.6011 7.37357 11.5005C7.38141 10.4087 7.81862 9.36376 8.59069 8.59169C9.36276 7.81962 10.4077 7.38241 11.4995 7.37457ZM6.27273 1.98512H16.7822C17.9199 1.9867 19.0105 2.43936 19.815 3.24385C20.6195 4.04834 21.0722 5.139 21.0738 6.27672V16.7273C21.0722 17.865 20.6195 18.9557 19.815 19.7601C19.0105 20.5646 17.9199 21.0173 16.7822 21.0189H6.27273C5.13501 21.0173 4.04434 20.5646 3.23986 19.7601C2.43537 18.9557 1.98271 17.865 1.98112 16.7273V6.27273C1.98271 5.13501 2.43537 4.04434 3.23986 3.23986C4.04434 2.43537 5.13501 1.98271 6.27273 1.98112V1.98512Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.434245 8.0782H4.79397V24H0.434245V8.0782ZM2.58576 0C3.3154 0.0322595 4.00259 0.352047 4.49715 0.889468C4.99171 1.42689 5.25341 2.13824 5.22506 2.86804C5.25315 3.59777 4.99136 4.30897 4.49686 4.84633C4.00235 5.38369 3.31531 5.70356 2.58576 5.73607C2.22762 5.7182 1.87653 5.62972 1.55269 5.47572C1.22886 5.32172 0.938643 5.10524 0.698739 4.83872C0.458834 4.5722 0.273968 4.2609 0.154764 3.9227C0.035561 3.5845 -0.0156286 3.22608 0.00413775 2.86804C-0.0156286 2.50999 0.035561 2.15157 0.154764 1.81337C0.273968 1.47517 0.458834 1.16387 0.698739 0.897347C0.938643 0.630827 1.22886 0.414347 1.55269 0.260349C1.87653 0.106352 2.22762 0.0178738 2.58576 0ZM7.37559 8.0782H11.6767V10.3021C12.1032 9.58026 12.7081 8.98031 13.4335 8.55986C14.1588 8.13942 14.9801 7.91262 15.8184 7.90127H17.0022C18.3696 7.9675 19.6559 8.56987 20.5822 9.57786C21.5086 10.5859 22.0005 11.9183 21.9514 13.2864V23.998H17.6503V22.5318V15.3939C17.5965 13.5787 16.4665 12.174 14.7998 12.174C13.9631 12.1994 13.1692 12.5499 12.5866 13.1511C12.0041 13.7523 11.6787 14.5568 11.6796 15.3939V23.9961H7.37853L7.37559 8.0782Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>{t.footerTeamTitle}</h3>
            <p>{t.footerTeamText}</p>
            <div className="footer-phones">
              {t.footerTeamPhones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`}>
                  {phone}
                </a>
              ))}
            </div>
            <p>{t.footerTeamResponseText}</p>
            <h3>{t.footerAddressTitle}</h3>
            <p>{t.footerAddress}</p>
          </div>

          <div className="footer-links-block">
            <h3>{t.footerNavigationTitle}</h3>
            <ul className="footer-list">
              {t.footerNavigation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-links-block">
            <h3>{t.footerPackagesTitle}</h3>
            <ul className="footer-list">
              {t.footerPackages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-links-block">
            <h3>{t.footerInfoTitle}</h3>
            <ul className="footer-list">
              {t.footerInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
