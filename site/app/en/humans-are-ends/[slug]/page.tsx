import Link from 'next/link';
import Nav from '@/app/lib/Nav';

const ARTICLES = {
  "001-why-humans-are-ends-matters-to-family-civilization": {
    title: "Why “Humans Are Ends” Matters to Family Civilization",
    paragraphs: [
      "“Human beings are ends, not means” is not an abstract slogan. It is the first stone of the Family Civilization Project.",
      "A family is not civilized merely because it is wealthy, educated, or outwardly successful. A family becomes civilized when every person inside it is treated as a person.",
      "When a child becomes a tool for grades, education turns into training. When a spouse becomes an emotional tool, marriage becomes consumption. When parents become tools for obligation, love becomes debt.",
      "Family civilization begins by restoring each person to the position of a human being. A child is not a parental project. A spouse is not an extension of another person. AI must never turn human beings into data, traffic, or instruments.",
      "This is why HUMANS ARE ENDS is the philosophical beginning of the project. Every method, technology, institution, and AI system must serve dignity, freedom, love, and human flourishing."
    ],
  },
  "002-socrates-the-examined-life-and-the-human-soul": {
    title: "Socrates: The Examined Life and the Human Soul",
    paragraphs: [
      "Socrates left no books of his own. He walked through Athens asking questions: What is justice? What is goodness? What kind of life is worth living?",
      "His power was not in giving people ready-made answers. His power was in waking them from habit.",
      "This matters deeply for families. Many parents repeat what they inherited without asking: Am I loving my child, or controlling my child? Am I guiding, or am I passing down fear?",
      "A Socratic family is not a family where parents are always right. It is a family where people can examine themselves. Civilization begins when someone is willing to ask: Am I hurting the person I claim to love?"
    ],
  },
  "003-plato-justice-soul-and-the-danger-of-turning-people-into-functions": {
    title: "Plato: Justice, the Soul, and the Danger of Turning People into Functions",
    paragraphs: [
      "In The Republic, Plato asks what justice is. He is concerned not only with the order of the city, but also with the order of the soul.",
      "His philosophy also warns us of a danger: when people are reduced to roles and functions, they may disappear as whole human beings.",
      "This happens inside families. A child becomes a student. The student becomes a grade. The grade becomes a tool of parental pride.",
      "Family civilization must resist this reduction. A person may have roles, but a person must never be reduced to roles. A child may study, but a child is not a performance machine."
    ],
  },
  "004-aristotle-flourishing-and-the-family-as-first-soil": {
    title: "Aristotle: Flourishing and the Family as the First Soil",
    paragraphs: [
      "For Aristotle, happiness was not a passing feeling. It was the full flourishing of a human life.",
      "This is crucial for modern families. Many families confuse happiness with success, and success with grades, income, status, and competition.",
      "A child’s real flourishing includes not only achievement, but also judgment, responsibility, emotional life, the ability to love, and the courage to become oneself.",
      "The family is the first soil of human life. If the soil is full of fear and shame, a child may learn to perform, but may not learn to live. Family civilization seeks to make the family a soil for human flourishing."
    ],
  },
  "005-stoicism-citizens-of-the-world-and-inner-dignity": {
    title: "Stoicism: Citizens of the World and Inner Dignity",
    paragraphs: [
      "The Stoics taught that we cannot control everything outside us, but we can still guard our judgment, virtue, and inner dignity.",
      "This does not mean accepting abuse. It means that a person’s value should not be handed entirely to external approval.",
      "Many people raised in controlling families live for the eyes of others. They fear disappointing parents. They fear failure. They fear being unworthy of love.",
      "Family civilization helps people rebuild inner dignity: I am not my grades. I am not a tool. I am not an extension of my parents’ unfinished life. I am first a human being."
    ],
  },
  "006-from-ancient-philosophy-to-family-civilization": {
    title: "From Ancient Philosophy to Family Civilization",
    paragraphs: [
      "If philosophy remains only in books, it easily becomes a game for the educated few. The philosophy that matters must return to human life.",
      "Socrates teaches us to examine life. Plato teaches us to ask about justice and the soul. Aristotle teaches us to seek human flourishing. Stoicism teaches us to protect inner dignity.",
      "The Family Civilization Project brings these ideas back to ordinary life: how parents speak, whether children are respected, how spouses handle conflict, and whether a family allows the truth of feeling.",
      "HUMANS ARE ENDS is not a decorative section. It is the philosophical foundation of the project. It asks one question: how can every person truly live as a person inside the family?"
    ],
  }
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default function HumansAreEndsArticlePage({ params }) {
  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <>
        <Nav lang="en" />
        <main className="article">
          <p>Article not found yet.</p>
          <Link className="button" href="/en/humans-are-ends">Back to HUMANS ARE ENDS</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav lang="en" />
      <main className="article">
        <p className="eyebrow">HUMANS ARE ENDS</p>
        <h1>{article.title}</h1>
        {article.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <p>
          <Link className="button" href="/en/humans-are-ends">Back to HUMANS ARE ENDS</Link>
        </p>
      </main>
    </>
  );
}
