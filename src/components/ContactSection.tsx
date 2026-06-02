import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import { contactImage } from '../assets/figmaAssets'
import { useTranslations } from '../utils/translations'
import { useLanguage } from '../context/useLanguage'
import { useApi } from '../app/hooks/useApi'

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
      const response = await apiCall('/contact', {
        method: 'POST',
        body: JSON.stringify(data),
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
      <h2 className="section-title dark">{t.contactSectionTitle}</h2>
      <p className="contact-intro">{t.contactIntro}</p>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
        <input type="text" placeholder={t.contactForm.namePlaceholder} className="contact-field" {...register('name')} />
        <input type="email" placeholder={t.contactForm.emailPlaceholder} className="contact-field" {...register('email')} />
        <input
          type="tel"
          placeholder={t.contactForm.phonePlaceholder}
          className="contact-field"
          {...register('phone', { required: true })}
        />
        <input type="text" placeholder={t.contactForm.subjectPlaceholder} className="contact-field" {...register('subject')} />
        <textarea placeholder={t.contactForm.messagePlaceholder} rows={6} {...register('message')} />
        {/* <div className="captcha-placeholder">{t.contactForm.captchaPlaceholder}</div> */}
        <button className="primary-button full-width" type="submit">
          {t.contactForm.submitBtn}
        </button>
      </form>

      <img className="contact-image" src={contactImage} alt={t.contactImageAlt} />
    </section>
  )
}
