import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import { contactImage } from '../assets/figmaAssets'
import { useTranslations } from '../utils/translations'
import { useLanguage } from '../context/useLanguage'
import { useApi } from '../app/hooks/useApi'
import { PLACEHOLDER_RECAPTCHA_TOKEN } from '../app/recaptcha'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { apiCall } = useApi()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm<ContactFormValues>()

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await apiCall('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          recaptchaToken: PLACEHOLDER_RECAPTCHA_TOKEN,
        }),
      })
      if (response.ok) {
        reset()
        await navigate({ to: '/contact/confirmation' })
        toast.success(t.contactForm.messages.submitSuccess)
      } else {
        toast.error(t.contactForm.messages.submitFailed)
      }
    } catch (error) {
      toast.error(t.contactForm.messages.submitError)
      console.error('Contact form error:', error)
    }
  }

  function onInvalidSubmit() {
    toast.error(t.contactForm.messages.phoneRequired)
  }

  return (
    <section className="contact-section section-cream" id="kontakt">
      <div className="contact-lead">
        <h2 className="section-title dark">{t.contactSectionTitle}</h2>
        <div className="contact-intro">
          <p>{t.contactIntro.lead}</p>
          <p>{t.contactIntro.body}</p>
          <p className="contact-intro-phones">
            {t.contactIntro.phones.map((phone, index) => (
              <Fragment key={phone}>
                {index > 0 ? (
                  <span className="contact-intro-phone-sep" aria-hidden="true">
                    {t.contactIntro.phoneSeparator}
                  </span>
                ) : null}
                <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
              </Fragment>
            ))}
          </p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
        <input type="text" placeholder={t.contactForm.namePlaceholder} className="contact-field" {...register('name')} />
        <input type="email" placeholder={t.contactForm.emailPlaceholder} className="contact-field" {...register('email')} />
        <input type="text" placeholder={t.contactForm.subjectPlaceholder} className="contact-field" {...register('subject')} />
        <input
          type="tel"
          placeholder={t.contactForm.phonePlaceholder}
          className="contact-field"
          {...register('phone', { required: true })}
        />
        <textarea className="contact-field contact-field-message" placeholder={t.contactForm.messagePlaceholder} rows={5} {...register('message')} />
        {/* <div className="captcha-placeholder">{t.contactForm.captchaPlaceholder}</div> */}
        <button className="primary-button contact-submit" type="submit">
          {t.contactForm.submitBtn}
        </button>
      </form>

      <img className="contact-image" src={contactImage} alt={t.contactImageAlt} />
    </section>
  )
}
