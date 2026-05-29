import Nav from '@/app/lib/Nav';

const articles = [
  {
    no: '001',
    title: 'Human Beings Are Ends',
    subtitle: 'Human Beings Are Not Tools',
    file: '001-human-beings-are-ends.md',
  },
  {
    no: '002',
    title: 'Children Are Not Parental Projects',
    subtitle: 'A child is not born to complete an adult’s unfinished life.',
    file: '002-children-are-not-parental-projects.md',
  },
  {
    no: '003',
    title: 'A Child Is Not Born to Obey',
    subtitle: 'Obedience may create order, but it does not necessarily create a human being.',
    file: '003-a-child-is-not-born-to-obey.md',
  },
  {
    no: '004',
    title: 'The Family Is Not a Place of Ownership',
    subtitle: 'Love does not give anyone the right to possess another human being.',
    file: '004-the-family-is-not-a-place-of-ownership.md',
  },
];

export default function Page() {
  return (
    <>
      <Nav lang="en" />
      <main className="article">
        <p className="eyebrow">Family Civilization Project</p>
        <h1>Substack</h1>
        <p>
          This page archives the English public essays of the Family Civilization Project.
          Each item links to its corresponding Markdown file in the GitHub archive.
        </p>

        <div className="list">
          {articles.map((article) => (
            <a
              key={article.no}
              href={`https://github.com/totarget/Family-Civilization-Project/blob/main/substack/${article.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{article.no}. {article.title}</strong>
              <br />
              <span className="muted">{article.subtitle}</span>
              <br />
              <code>{article.file}</code>
            </a>
          ))}
        </div>

        <p>
          Public channel: 
          <a href="https://familyciv.substack.com/" target="_blank" rel="noopener noreferrer">
            familyciv.substack.com
          </a>
        </p>
      </main>
      <footer className="footer">David / Liu Gang · Family Civilization Project</footer>
    </>
  );
}
