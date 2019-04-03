/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const {
      config: { baseUrl, docsUrl } // eslint-disable-line react/prop-types
    } = this.props
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const {
      config: { baseUrl } // eslint-disable-line react/prop-types
    } = this.props
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    const {
      // eslint-disable-next-line react/prop-types
      config: { baseUrl, copyright, footerIcon, repoUrl, title },
      // eslint-disable-next-line react/prop-types
      language
    } = this.props

    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={baseUrl} className="nav-home">
            {footerIcon && (
              <img
                src={baseUrl + footerIcon}
                alt={title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('setup/installation', language)}>
              Getting Started
            </a>

            <a href={this.docUrl('features/overview', language)}>Features</a>

            <a href={this.docUrl('setup/prerequisites', language)}>
              Requirements
            </a>

            {/*  <a href={this.docUrl('doc3.html', language)}>
              API Reference (or other categories)
            </a> */}
          </div>
          <div>
            <h5>Community</h5>
            {/*    <a href={this.pageUrl('users.html', language)}>User Showcase</a> */}
            <a
              href="https://spectrum.chat/mona"
              target="_blank"
              rel="noreferrer noopener">
              Project Chat
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/mona"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a> */}
          </div>
          <div>
            <h5>More</h5>
            <a href={`${baseUrl}blog`}>Blog</a>
            <a
              href="https://github.com/Kandelborg/mona-starter-kit/"
              target="_blank"
              rel="noreferrer noopener">
              GitHub
            </a>
            <a
              className="github-button"
              href={repoUrl}
              data-icon="octicon-star"
              data-count-href="/MathiasKandelborg/MoNA-starter-kit/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
