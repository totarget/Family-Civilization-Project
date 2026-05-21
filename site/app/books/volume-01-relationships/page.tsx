import { ChapterList } from "@/components/ChapterList";
import { getVolume01Chapters } from "@/lib/content";

export default function VolumeOnePage() {
  const chapters = getVolume01Chapters();

  return (
    <section className="section container">
      <p className="eyebrow">Volume I</p>
      <h1>Relationships</h1>
      <p className="lead">
        第一卷《关系篇》：家庭关系、亲子关系、原生家庭创伤、边界、爱、控制、道歉与修复。
      </p>
      <p className="lead">
        Volume I explores family relationships, parent-child relationships, trauma,
        boundaries, love, control, apology, and repair.
      </p>

      <ChapterList chapters={chapters} />
    </section>
  );
}
