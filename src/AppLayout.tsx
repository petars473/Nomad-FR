import { Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import Footer from './components/Footer'
import Header from './components/Header'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './context/useLanguage.ts'
import { useTranslations } from './utils/translations'
import './App.css'

function AppLayout() {
  return (
    <LanguageProvider>
      <LayoutShell />
    </LanguageProvider>
  )
}

function LayoutShell() {
  const { language, setLanguage } = useLanguage()
  const [newsBarIndex, setNewsBarIndex] = useState(0)
  const t = useTranslations(language)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNewsBarIndex((currentIndex) => (currentIndex + 1) % t.newsBarItems.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [t.newsBarItems.length])

  return (
    <>
      <Toaster />
      <div className="page-shell">
      <Header
        language={language}
        newsItem={t.newsBarItems[newsBarIndex]}
        newsItemKey={`${language}-${newsBarIndex}`}
        toolbarLinks={t.toolbarLinks}
        toolbarNavAriaLabel={t.toolbarNavAriaLabel}
        languageSelectAriaLabel={t.languageSelectAriaLabel}
        onLanguageChange={setLanguage}
      />
      <Outlet />
      <Footer
        footerDescription={t.footerDescription}
        footerTeamTitle={t.footerTeamTitle}
        footerTeamText={t.footerTeamText}
        footerTeamPhones={t.footerTeamPhones}
        footerTeamResponseText={t.footerTeamResponseText}
        footerAddressTitle={t.footerAddressTitle}
        footerAddress={t.footerAddress}
        footerNavigationTitle={t.footerNavigationTitle}
        toolbarLinks={t.toolbarLinks}
        footerPackagesTitle={t.footerPackagesTitle}
        footerPackages={t.footerPackages}
        footerInfoTitle={t.footerInfoTitle}
        footerInfo={t.footerInfo}
        footerCopyright={t.footerCopyright}
      />
      </div>
    </>
  )
}

export default AppLayout
