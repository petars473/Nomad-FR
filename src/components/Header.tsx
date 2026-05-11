type Language = 'sr' | 'en'

type ToolbarLink = {
  href: string
  label: string
}

type HeaderProps = {
  newsItem: string
  newsItemKey: string
  language: Language
  toolbarLinks: ToolbarLink[]
  toolbarNavAriaLabel: string
  languageSelectAriaLabel: string
  onLanguageChange: (language: Language) => void
}

function Header({
  newsItem,
  newsItemKey,
  language,
  toolbarLinks,
  toolbarNavAriaLabel,
  languageSelectAriaLabel,
  onLanguageChange,
}: HeaderProps) {
  const getHref = (href: string) => {
    return href.startsWith('#') ? `/${href}` : href
  }

  return (
    <>
      <div className="news-bar" aria-live="polite">
        <span className="news-bar-text" key={newsItemKey}>
          {newsItem}
        </span>
      </div>

      <header className="sticky-toolbar">
        <a className="toolbar-brand" href="/#hero">
          <img className="toolbar-logo" src="/assets/figma/nomad-logo.svg" alt="NOMAD coworking space" />
        </a>
        <nav className="toolbar-nav" aria-label={toolbarNavAriaLabel}>
          {toolbarLinks.map((link) => (
            <a key={link.href} href={getHref(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="toolbar-controls">
          <select
            className="lang-select"
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            aria-label={languageSelectAriaLabel}
          >
            <option value="sr">Srpski</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>
    </>
  )
}

export default Header
