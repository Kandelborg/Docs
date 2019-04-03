/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

// const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const translate = require('../../server/translate.js').translate

class HomeSplash extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt={`${siteConfig.title} Logo`} />
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/mona-no-fill.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('setup/prerequisites')}>
              <translate>Setup</translate>
            </Button>
            <Button href={docUrl('what-is-mona')}>
              <translate>About</translate>
            </Button>
            <Button href={docUrl('features/overview')}>
              <translate>Features</translate>
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

// eslint-disable-next-line react/no-multi-comp
class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    /*
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Features</h2>
        <MarkdownBlock>{featureText}</MarkdownBlock>
      </div>
    ) */

    const Features = () => (
      <React.Fragment>
        <Block layout="fourColumn" background="light">
          {[
            /*             {
              content:
                'Easily collaborate on projects made with MoNA (and keep everything tight)',
              image: `${baseUrl}img/svg/account-group-dark.png`,
              imageAlign: 'top',
              title: 'Easy Teamworking'
            }, */

            {
              content:
                'MoNA makes it easy to catch mistakes early on to keep focus on the hard parts.',
              image: `${baseUrl}img/svg/clock-fast-dark.png`,
              imageAlign: 'top',
              title: 'Develop with confidence'
            }
          ]}
        </Block>
        <Block>
          {[
            {
              content: "If it's a standard or convention - MoNA follows it",
              image: `${baseUrl}img/svg/earth-dark.png`,
              imageAlign: 'top',
              title: 'Compliance'
            },

            {
              content:
                'Material-UI supports many kinds of styling methodologies',
              image: `${baseUrl}img/svg/palette-swatch-dark.png`,
              imageAlign: 'top',
              title: 'Theming &mdash; Your Way'
            }
          ]}
        </Block>
      </React.Fragment>
    )

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'Because so many aspects are built with collaboration in mind - working on MoNA projects in teams is a breeze.\n\nEasily collaborate on projects and keep everything tight - it&apos;s incredibly nice!',
            /*      image: `${baseUrl}img/mona-no-fill.svg`,
            imageAlign: 'right', */
            title: 'MoNA Love Teams'
          }
        ]}
      </Block>
    )

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "By following the usage guides, you'll have a project running in less than 10 minutes! Isn't that worth a try?",
            title: 'Try it out'
          }
        ]}
      </Block>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by the following amazing people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/*           <FeatureCallout /> */}
          <Features />
          <Description />
          <TryOut />
          <Showcase />
        </div>
      </div>
    )
  }
}

module.exports = Index
