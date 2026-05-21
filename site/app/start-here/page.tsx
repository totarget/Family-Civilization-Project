import Link from "next/link";
import { getVolume01Chapters } from "@/lib/content";

function findChapter(number: number) {
  return getVolume01Chapters().find((chapter) => chapter.number === number);
}

export default function StartHerePage() {
  const parent = findChapter(61);
  const adultChild = findChapter(75) || findChapter(54);
  const repair = findChapter(67) || findChapter(52);
  const pain = findChapter(60);

  const items = [
    {
      title: "If you are a parent",
      text: "Start with learning parenthood, boundaries, and how love can stop hurting.",
      chapter: parent,
    },
    {
      title: "If you are an adult child",
      text: "Start with limited contact, self-protection, and relational repair.",
      chapter: adultChild,
    },
    {
      title: "If your family relationship is broken",
      text: "Start with apology, acknowledgment of harm, and the possibility of repair.",
      chapter: repair,
    },
    {
      title: "If you want the core principle",
      text: "Start with the mission: let love stop hurting.",
      chapter: pain,
    },
  ];

  return (
    <section className="section container">
      <p className="eyebrow">Start Here</p>
      <h1>Where should I begin?</h1>
      <p className="lead">
        Family civilization is not abstract theory. Begin from the wound closest to you.
      </p>

      <div className="grid-3">
        {items.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.chapter ? (
              <Link className="button secondary" href={`/books/volume-01-relationships/${item.chapter.slug}`}>
                Read {String(item.chapter.number).padStart(3, "0")}
              </Link>
            ) : (
              <Link className="button secondary" href="/books/volume-01-relationships">
                Read Volume I
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
