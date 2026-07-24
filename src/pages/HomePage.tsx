import { Link } from 'react-router-dom'
import { LinkButton } from '../components/atoms/LinkButton'
import { Media } from '../components/atoms/Media'
import { projects } from '../content/projects'

export function HomePage() {
  const featuredProject = projects[0]

  return (
    <main id="main-content" className="home-page">
      <section className="latest-work" aria-labelledby="latest-work-title">
        <div className="latest-work__copy">
          <p className="text text--eyebrow">Latest Work</p>
          <h1 className="visually-hidden" id="latest-work-title">
            {featuredProject.title}
          </h1>
          <p>
            An app dedicated to practically supporting individuals with
            autoimmune conditions, mentally, socially, and physically.
          </p>
          <LinkButton
            to={`/projects/${featuredProject.slug}`}
            variant="filled"
          >
            App Design
          </LinkButton>
        </div>
        <Link
          className="latest-work__media"
          to={`/projects/${featuredProject.slug}`}
          aria-label={`View ${featuredProject.title}`}
        >
          <Media
            media={featuredProject.cover}
            fit="cover"
            loading="eager"
          />
        </Link>
      </section>
      <section className="welcome-panel" id="about">
        <h2>Welcome<br />to My<br />Portfolio</h2>
        <div>
          <p>
            I am Brianna, a Graphic Designer and Studio Artist. As you explore
            my work, you&apos;ll see the dedication and creativity I pour into
            each project.
          </p>
          <Link to="/about">Read More</Link>
        </div>
      </section>
    </main>
  )
}
