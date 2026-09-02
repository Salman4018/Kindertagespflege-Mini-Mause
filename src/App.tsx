import type { CSSProperties } from 'react';
import { EnquiryForm } from './components/EnquiryForm';
import { Icon } from './components/Icon';
import { SectionHeading } from './components/SectionHeading';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import type { SiteContent } from './content/types';

interface AppProps {
  content: SiteContent;
}
const imageUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

export function App({ content }: AppProps) {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        {content.skipToContent}
      </a>
      <SiteHeader content={content} />
      <main id="main" tabIndex={-1}>
        <section className="hero container" aria-labelledby="page-title">
          <div className="hero__copy reveal">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="page-title">{content.hero.title}</h1>
            <p className="introduction">{content.hero.introduction}</p>
            <ul className="hero-facts" aria-label={content.hero.factsLabel}>
              {content.hero.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="button-group">
              <a className="button button--primary" href="#contact">
                {content.primaryAction}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--quiet" href="#concept">
                {content.secondaryAction}
              </a>
            </div>
          </div>
          <div className="hero__visual reveal reveal--delayed">
            <div className="image-frame image-frame--arch">
              <img
                src={imageUrl('images/placeholders/playroom.svg')}
                alt={content.hero.imageAlt}
                width={800}
                height={1050}
                fetchPriority="high"
              />
            </div>
            <div className="hero__seal" aria-hidden="true">
              {content.hero.sealWords.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
            <span className="hero__scribble" aria-hidden="true" />
          </div>
        </section>

        <section
          className="highlights section container"
          id="highlights"
          aria-label={content.highlightsLabel}
        >
          {content.highlights.map((item, index) => (
            <article
              className="feature-card reveal"
              style={{ '--card-index': index } as CSSProperties}
              key={item.title}
            >
              <span className="feature-card__icon">
                <Icon name={item.icon} />
              </span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="section section--surface" id="about">
          <div className="about container">
            <div className="about__portrait image-frame">
              <img
                src={imageUrl('images/placeholders/caregiver.svg')}
                alt={content.about.imageAlt}
                width={800}
                height={1000}
                loading="lazy"
              />
            </div>
            <div className="about__copy">
              <SectionHeading content={content.about} />
              <blockquote>{content.about.quote}</blockquote>
              <ul className="fact-list">
                {content.about.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section container" id="benefits">
          <SectionHeading content={content.benefits} />
          <div className="numbered-grid">
            {content.benefits.items.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section concept" id="concept">
          <div className="container concept__inner">
            <SectionHeading content={content.approach} />
            <ul className="concept-list">
              {content.approach.items.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container" id="daily-routine">
          <SectionHeading content={content.routine} align="center" />
          <ol className="timeline">
            {content.routine.steps.map((step) => (
              <li key={step.title}>
                <span className="timeline__time">{step.time}</span>
                <span className="timeline__dot" aria-hidden="true" />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--surface" id="spaces">
          <div className="container">
            <SectionHeading content={content.spaces} />
            <div className="gallery">
              {content.spaces.images.map((image, index) => (
                <figure className={index === 0 ? 'gallery__large' : ''} key={image.src}>
                  <div className="image-frame">
                    <img
                      src={imageUrl(image.src)}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="wellbeing">
          <SectionHeading content={content.wellbeing} align="center" />
          <div className="simple-grid">
            {content.wellbeing.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section settling" id="settling">
          <div className="container settling__inner">
            <SectionHeading content={content.settling} />
            <ol>
              {content.settling.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section container" id="availability">
          <div className="availability">
            <div>
              <span className="availability__badge">{content.availability.badge}</span>
              <SectionHeading content={content.availability} />
              <p className="availability__note">{content.availability.note}</p>
            </div>
            <dl>
              {content.availability.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section section--surface" id="faq">
          <div className="faq container">
            <SectionHeading content={content.faq} />
            <div>
              {content.faq.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact container" id="contact">
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.text}</p>
          <EnquiryForm content={content} />
        </section>
      </main>

      <SiteFooter content={content} />
    </div>
  );
}
