import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslations } from './utils/translations'
import { useLanguage } from './context/useLanguage.ts'
import { ContactSection } from './components/ContactSection'
import {
  featureIcons,
  galleryImage,
  galleryImage2,
  galleryImage3,
  heroImage,
  valueIcons,
  workspaceImage,
  workspaceImage2,
  workspaceImage3,
  workspaceImage4,
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
  const [immersivePanelIndex, setImmersivePanelIndex] = useState(0)
  const [activeGalleryImageIndex, setActiveGalleryImageIndex] = useState<number | null>(null)
  const [isGalleryLightboxClosing, setIsGalleryLightboxClosing] = useState(false)
  const { language } = useLanguage()
  const t = useTranslations(language)
  const galleryImages = [
    { src: galleryImage, alt: t.galleryImageAlt1 },
    { src: galleryImage2, alt: t.galleryImageAlt2 },
    { src: galleryImage3, alt: t.galleryImageAlt3 },
  ]

  const immersivePanels = [
    {
      image: workspaceImage,
      leftTitle: t.immersiveTitle,
      leftDescription: t.immersiveDescription,
      rightTitle: t.openSpaceTitle,
      rightCapacityLabel: t.openSpaceCapacityLabel,
      rightCapacityNumber: t.openSpaceCapacityNumber,
      rightDescription: t.openSpaceDescription,
    },
    {
      image: workspaceImage2,
      leftTitle: t.immersiveTitle,
      leftDescription: t.immersiveDescription,
      rightTitle: t.openSpaceTitle2,
      rightCapacityLabel: t.openSpaceCapacityLabel2,
      rightCapacityNumber: t.openSpaceCapacityNumber2,
      rightDescription: t.openSpaceDescription2,
    },
    {
      image: workspaceImage3,
      leftTitle: t.immersiveTitle,
      leftDescription: t.immersiveDescription,
      rightTitle: t.openSpaceTitle3,
      rightCapacityLabel: t.openSpaceCapacityLabel3,
      rightCapacityNumber: t.openSpaceCapacityNumber3,
      rightDescription: t.openSpaceDescription3,
    },
    {
      image: workspaceImage4,
      leftTitle: t.immersiveTitle,
      leftDescription: t.immersiveDescription,
      rightTitle: t.openSpaceTitle4,
      rightCapacityLabel: t.openSpaceCapacityLabel4,
      rightCapacityNumber: t.openSpaceCapacityNumber4,
      rightDescription: t.openSpaceDescription4,
    },
  ]
  const currentImmersivePanel = immersivePanels[immersivePanelIndex]

  useEffect(() => {
    if (activeGalleryImageIndex === null) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsGalleryLightboxClosing(true)
      }

      if (event.key === 'ArrowLeft') {
        setActiveGalleryImageIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex - 1 + galleryImages.length) % galleryImages.length,
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveGalleryImageIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex + 1) % galleryImages.length,
        )
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeGalleryImageIndex, galleryImages.length])

  useEffect(() => {
    if (!isGalleryLightboxClosing) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setActiveGalleryImageIndex(null)
      setIsGalleryLightboxClosing(false)
    }, 240)

    return () => window.clearTimeout(timeoutId)
  }, [isGalleryLightboxClosing])

  const openGalleryPreview = (index: number) => {
    setActiveGalleryImageIndex(index)
    setIsGalleryLightboxClosing(false)
  }

  const closeGalleryPreview = () => {
    if (activeGalleryImageIndex === null || isGalleryLightboxClosing) {
      return
    }

    setIsGalleryLightboxClosing(true)
  }

  const showPreviousGalleryImage = () => {
    if (activeGalleryImageIndex === null || isGalleryLightboxClosing) {
      return
    }

    setActiveGalleryImageIndex((activeGalleryImageIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const showNextGalleryImage = () => {
    if (activeGalleryImageIndex === null || isGalleryLightboxClosing) {
      return
    }

    setActiveGalleryImageIndex((activeGalleryImageIndex + 1) % galleryImages.length)
  }

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
              <button className="secondary-button hero-learn-more" type="button" onClick={() => document.getElementById('o-nama')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.learnMoreBtn}
              </button>
              <a className="primary-button" href="#kontakt">
                {t.reservationBtn}
              </a>
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
          <div className="immersive-media immersive-panel-anim" key={`immersive-media-${immersivePanelIndex}`}>
            <img
              className={immersivePanelIndex === 0 ? 'immersive-image immersive-image-first' : 'immersive-image'}
              src={currentImmersivePanel.image}
              alt={t.immersiveImageAlt}
            />
            <div className="immersive-overlay" />
            <div className="immersive-left-copy">
              <h2 className="immersive-left-title">{currentImmersivePanel.leftTitle}</h2>
              <p className="immersive-left-description">{currentImmersivePanel.leftDescription}</p>
            </div>
          </div>
          <div className="immersive-copy immersive-panel-anim" key={`immersive-copy-${immersivePanelIndex}`}>
            <h2 className={`immersive-panel-title openSpaceTitle-${immersivePanelIndex + 1}`}>{currentImmersivePanel.rightTitle}</h2>
            <p className={`immersive-panel-capacity openSpaceCapacity-${immersivePanelIndex + 1}`}>
              <span className={`immersive-panel-capacity-label openSpaceCapacityLabel-${immersivePanelIndex + 1}`}>{currentImmersivePanel.rightCapacityLabel}</span>
              <span className={`immersive-panel-capacity-number openSpaceCapacityNumber-${immersivePanelIndex + 1}`}>{currentImmersivePanel.rightCapacityNumber}</span>
            </p>
            <p className={`immersive-panel-description openSpaceDescription-${immersivePanelIndex + 1}`}>{currentImmersivePanel.rightDescription}</p>
          </div>
          <button
            className="immersive-nav immersive-nav-prev"
            type="button"
            aria-label={t.openSpacePrevAriaLabel}
            onClick={() => setImmersivePanelIndex((current) => (current - 1 + immersivePanels.length) % immersivePanels.length)}
          >
            <svg className="immersive-nav-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M48 11H2" stroke="currentColor" strokeWidth="2" />
              <path d="M12 1L1 12L12 23" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{t.openSpacePrevLabel}</span>
          </button>
          <button
            className="immersive-nav immersive-nav-next"
            type="button"
            aria-label={t.openSpaceNextAriaLabel}
            onClick={() => setImmersivePanelIndex((current) => (current + 1) % immersivePanels.length)}
          >
            <span>{t.openSpaceNextLabel}</span>
            <svg className="immersive-nav-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 11H46" stroke="currentColor" strokeWidth="2" />
              <path d="M36 1L47 12L36 23" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
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
          <h2 className="section-title gallery-title">{t.galleryTitle}</h2>
          <div className="gallery-stage">
            <div className={`gallery-grid${activeGalleryImageIndex !== null ? ' is-preview-open' : ''}`}>
              {galleryImages.map((image, index) => (
                <button
                  className={`gallery-thumb${activeGalleryImageIndex === index ? ' active' : ''}`}
                  type="button"
                  key={image.src}
                  aria-label={t.galleryOpenImageAriaLabel}
                  onClick={() => openGalleryPreview(index)}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              ))}
            </div>

            {activeGalleryImageIndex !== null ? (
              <div
                className={`gallery-lightbox${isGalleryLightboxClosing ? ' is-closing' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={galleryImages[activeGalleryImageIndex].alt}
              >
                <button
                  className="gallery-lightbox-backdrop"
                  type="button"
                  aria-label={t.galleryClosePreviewAriaLabel}
                  onClick={closeGalleryPreview}
                />
                <button
                  className="gallery-nav gallery-nav-prev"
                  type="button"
                  aria-label={t.galleryPrevImageAriaLabel}
                  onClick={showPreviousGalleryImage}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M14.5 5L7.5 12L14.5 19" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                <img
                  className="gallery-lightbox-image"
                  src={galleryImages[activeGalleryImageIndex].src}
                  alt={galleryImages[activeGalleryImageIndex].alt}
                />
                <button
                  className="gallery-nav gallery-nav-next"
                  type="button"
                  aria-label={t.galleryNextImageAriaLabel}
                  onClick={showNextGalleryImage}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9.5 5L16.5 12L9.5 19" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            ) : null}
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

        <ContactSection />
    </main>
  )
}

export default App
