import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles: Record<string, { title: string; sections: string[] }> = {
  '001-why-humans-are-ends-matters-to-family-civilization': {
    title: 'Why Humans Are Ends Matters to Family Civilization',
    sections: [
      'The philosophical beginning of the Family Civilization Project is a simple but demanding principle: human beings are ends, not tools.',
      'In family life, a child must not be reduced to grades, pride, retirement security, emotional compensation, or the unfinished dreams of parents. A partner must not be reduced to a tool of control, dependence, proof, or domination.',
      'A civilized family is not a family without conflict. It is a family that still recognizes every person as a person, even in conflict.',
    ],
  },
  '002-socrates-the-examined-life-and-the-human-soul': {
    title: 'Socrates: The Examined Life and the Human Soul',
    sections: [
      'Socrates reminds us that a human being must not live only by habit, authority, and public opinion. An unexamined life can easily become a life arranged by others.',
      'In family life, this means parents cannot continue harmful patterns simply because tradition, society, or the previous generation treated children that way.',
      'Family civilization begins with questions: Is this love, or control? Am I guiding my child, or only managing my own fear?',
    ],
  },
  '003-plato-justice-soul-and-the-danger-of-turning-people-into-functions': {
    title: 'Plato: Justice, Soul, and the Danger of Turning People into Functions',
    sections: [
      'Plato asked deep questions about justice, the soul, and the order of the city. His work reminds us that a society can become dangerous when it sees only function and forgets the soul.',
      'A family can fall into the same mistake. A child becomes a grade machine, a parent becomes a provider machine, and a partner becomes an emotional or economic tool.',
      'Family civilization does not ask each person only to perform a role. It asks whether each person can still exist as a whole human being inside the relationship.',
    ],
  },
  '004-aristotle-flourishing-and-the-family-as-first-soil': {
    title: 'Aristotle: Flourishing and the Family as the First Soil',
    sections: [
      'Aristotle understood happiness as human flourishing, not merely external success. A good life is not only a useful, successful, or obedient life.',
      'If a family pursues achievement while destroying the life force, self-respect, judgment, and capacity for love of a child, it does not truly lead the child toward happiness.',
      'The family is the first soil of human life. A good family does not cut every child into the same shape. It helps life unfold.',
    ],
  },
  '005-stoicism-citizens-of-the-world-and-inner-dignity': {
    title: 'Stoicism: Citizens of the World and Inner Dignity',
    sections: [
      'Stoic philosophy emphasizes inner freedom, virtue, and the dignity of human beings as citizens of the world. Circumstances may limit a person, but inner dignity should not be destroyed.',
      'One of the deepest injuries in family life is to make a child believe that his worth depends entirely on parental judgment, grades, obedience, or social approval.',
      'Family civilization helps a person build inner stability: I am not a tool. I am not an extension. I have dignity because I am a person.',
    ],
  },
  '006-from-ancient-philosophy-to-family-civilization': {
    title: 'From Ancient Philosophy to Family Civilization',
    sections: [
      'Philosophy should not remain only in books. The questions of Socrates, the justice of Plato, the flourishing of Aristotle, and the inner dignity of the Stoics must return to daily life.',
      'The family is where philosophy must become real. It is the first place where a human being learns what a person is, what love means, what freedom feels like, and whether dignity is protected.',
      'The Family Civilization Project brings the wisdom of human dignity and freedom back into ordinary family relationships.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function HumansArticleEnPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <main className="page-wrap article-wrap">
      <Link className="back-link" href="/en/humans-are-ends">← HUMANS ARE ENDS</Link>
      <h1>{article.title}</h1>
      <article className="prose">
        {article.sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </article>
    </main>
  );
}
