import Nav from '@/app/lib/Nav';

export default function Page() {
  return (
    <>
      <Nav lang="en" />
      <main className="article">
        <p className="eyebrow">Family Civilization Project</p>
        <h1>About</h1>

        <div className="aboutGrid">
          <div>
            <p>
              <strong>David / Liu Gang</strong> is the founder of the Family Civilization Project,
              a founder, builder, and lifelong practitioner of family civilization.
            </p>
            <p>
              Emotional positioning: I speak for all wounded and silenced children.
            </p>
            <p>
              Contact:
              {' '}
              <a href="mailto:David@familyciv.com">David@familyciv.com</a>
            </p>
          </div>

          <div className="profilePhotoWrap">
            <img
              className="profilePhoto"
              src="/images/david-liu-photo.jpg"
              alt="David / Liu Gang"
            />
            <p className="muted photoNote">
              Upload the author portrait as:<br />
              <code>site/public/images/david-liu-photo.jpg</code>
            </p>
          </div>
        </div>

        <div className="cards">
          <a className="card" href="/en/start-here">
            <h3>Start Here</h3>
            <p>Understand the project entry point.</p>
          </a>
          <a className="card" href="/en/books">
            <h3>Books</h3>
            <p>Read the manuscript archive.</p>
          </a>
          <a className="card" href="/en/substack">
            <h3>Substack</h3>
            <p>Read the English public essay archive.</p>
          </a>
        </div>
      </main>
      <footer className="footer">David / Liu Gang · Family Civilization Project</footer>
    </>
  );
}
