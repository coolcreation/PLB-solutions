export default function Header() {
  return (
    <>
      <div className="header-announcement-bar-wrapper">

        <div
          className="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-right"
          data-test="header-inner"
        >
          <div className="header-background theme-bg--primary"></div>

          <div
            className="header-display-desktop"
            data-content-field="site-title"
          >
            <div className="header-title-nav-wrapper">
              <div
                className="
                      header-title
                      
                    "
                data-animation-role="header-element"
              >
                <div className="header-title-logo">
                  <a href="/" data-animation-role="header-element">
                    <img
                      elementtiming="nbf-header-logo-desktop"
                      src=""
                      alt=""
                      style="display:block"
                      fetchpriority="high"
                      loading="eager"
                      decoding="async"
                      data-loader="raw"
                    />
                  </a>
                </div>
              </div>

              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list">
                    <div className="header-nav-item header-nav-item--collection">
                      <a href="/resources" data-animation-role="header-element">
                        Resources
                      </a>
                    </div>

                    <div className="header-nav-item header-nav-item--collection">
                      <a href="/about" data-animation-role="header-element">
                        About
                      </a>
                    </div>

                    <div className="header-nav-item header-nav-item--collection header-nav-item--active">
                      <a
                        href="/events"
                        data-animation-role="header-element"
                        aria-current="page"
                      >
                        Events
                      </a>
                    </div>

                    <div className="header-nav-item header-nav-item--collection">
                      <a href="/stories" data-animation-role="header-element">
                        Stories
                      </a>
                    </div>

                    <div className="header-nav-item header-nav-item--collection">
                      <a
                        href="/our-sponsors"
                        data-animation-role="header-element"
                      >
                        Our Sponsors
                      </a>
                    </div>

                    <div className="header-nav-item header-nav-item--collection">
                      <a
                        href="/contact-us"
                        data-animation-role="header-element"
                      >
                        Contact Us
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="header-actions header-actions--right">
              <div className="header-actions-action header-actions-action--social">
                <a
                  className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <svg viewBox="23 23 64 64">
                    <use
                      xlink:href="#facebook-unauth-icon"
                      width="110"
                      height="110"
                    ></use>
                  </svg>
                </a>

                <a
                  className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <svg viewBox="23 23 64 64">
                    <use
                      xlink:href="#instagram-unauth-icon"
                      width="110"
                      height="110"
                    ></use>
                  </svg>
                </a>
              </div>

              <div
                className="header-actions-action header-actions-action--cta"
                data-animation-role="header-element"
              >
                <a
                  className="btn btn--border theme-btn--primary-inverse sqs-button-element--primary"
                  target="_blank"
                >
                  Donate
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  );
}
