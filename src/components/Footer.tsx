import { Link } from '@tanstack/react-router'

type ToolbarLink = {
  href: string
  label: string
}

type FooterProps = {
  footerDescription: string
  footerTeamTitle: string
  footerTeamText: string
  footerTeamPhones: string[]
  footerTeamResponseText: string
  footerAddressTitle: string
  footerAddress: string
  footerNavigationTitle: string
  toolbarLinks: ToolbarLink[]
  footerPackagesTitle: string
  footerPackages: string[]
  footerInfoTitle: string
  footerInfo: string[]
  footerCopyright: string
}

const infoPageRoutes = ['/working-hours', '/house-rules', '/privacy-policy', '/terms-of-use'] as const

function Footer({
  footerDescription,
  footerTeamTitle,
  footerTeamText,
  footerTeamPhones,
  footerTeamResponseText,
  footerAddressTitle,
  footerAddress,
  footerNavigationTitle,
  toolbarLinks,
  footerPackagesTitle,
  footerPackages,
  footerInfoTitle,
  footerInfo,
  footerCopyright,
}: FooterProps) {
  const getHref = (href: string) => {
    return href.startsWith('#') ? `/${href}` : href
  }

  return (
    <>
      <footer className="footer-section">
        <div className="footer-brand">
          <img className="nomad-logo footer-logo" src="/assets/figma/nomad-logo.svg" alt="NOMAD coworking space" />
          <p>{footerDescription}</p>
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
          <h3>{footerTeamTitle}</h3>
          <p>{footerTeamText}</p>
          <div className="footer-phones">
            {footerTeamPhones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`}>
                {phone}
              </a>
            ))}
          </div>
          <p>{footerTeamResponseText}</p>
          <h3>{footerAddressTitle}</h3>
          <p>{footerAddress}</p>
        </div>

        <div className="footer-links-block">
          <h3>{footerNavigationTitle}</h3>
          <ul className="footer-list">
            {toolbarLinks.map((item) => (
              <li key={item.href}>
                <a href={getHref(item.href)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-block">
          <h3>{footerPackagesTitle}</h3>
          <ul className="footer-list">
            {footerPackages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-links-block">
          <h3>{footerInfoTitle}</h3>
          <ul className="footer-list">
            {footerInfo.map((item, index) => {
              const routePath = infoPageRoutes[index]

              if (!routePath) {
                return <li key={item}>{item}</li>
              }

              return (
                <li key={item}>
                  <Link to={routePath}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>

      <div className="footer-signature-strip">
        <p className="footer-signature-text">{footerCopyright}</p>
      </div>
    </>
  )
}

export default Footer
