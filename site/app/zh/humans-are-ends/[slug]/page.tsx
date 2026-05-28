import Link from 'next/link';
import Nav from '@/app/lib/Nav';

const ARTICLES = {
  "001-why-humans-are-ends-matters-to-family-civilization": {
    title: "为什么“人是目的”是家庭文明的第一原则",
    paragraphs: [
      "“人是目的，不是工具”不是一句抽象口号，而是家庭文明工程的第一块地基。",
      "一个家庭是否文明，首先不看它有多富有，也不看孩子成绩有多高，而看这个家庭里的人是否被当成人。",
      "当孩子被当成成绩工具，教育就会变成驯化；当伴侣被当成情绪工具，婚姻就会变成消耗；当父母被当成养老工具，亲情也会变成交易。",
      "家庭文明要做的第一件事，就是让每个家庭成员重新回到人的位置上。孩子不是父母的项目，伴侣不是彼此的附属品，AI也不应该把人变成数据和流量。",
      "因此，HUMANS ARE ENDS 是整个工程的哲学起点。它告诉我们：任何方法、技术、教育、商业和AI系统，都必须服务于人的尊严、自由、爱和幸福。"
    ],
  },
  "002-socrates-the-examined-life-and-the-human-soul": {
    title: "苏格拉底：一个人为什么必须审视自己的生活",
    paragraphs: [
      "古希腊的苏格拉底没有留下自己的著作。他像一个不断提问的人，站在雅典街头，问人们：什么是正义？什么是善？什么是值得过的一生？",
      "他的力量不在于给出标准答案，而在于迫使人从习惯中醒来。一个人如果从来不审视自己的生活，就可能一生都在服从别人的声音。",
      "这对家庭文明有极深的启发。很多父母只是重复上一代的教育方式，却从未问过：我现在是在爱孩子，还是在控制孩子？我是在帮助他，还是在把我的焦虑传给他？",
      "苏格拉底式的家庭，不是父母永远正确，而是一个家庭愿意一起反思。真正的文明，从一个人愿意停下来问“我这样做是否伤害了另一个人”开始。"
    ],
  },
  "003-plato-justice-soul-and-the-danger-of-turning-people-into-functions": {
    title: "柏拉图：正义、灵魂与把人变成功能的危险",
    paragraphs: [
      "柏拉图在《理想国》中追问正义。他关心的不只是城邦秩序，也关心人的灵魂是否有秩序。",
      "但柏拉图的思想也提醒我们一个危险：当人被过度放进某种功能位置里，他就可能不再作为完整的人被看见。",
      "家庭里也常常发生这样的事情。孩子变成学生，学生变成分数，分数变成父母面子的工具。妻子变成功能，丈夫变成功能，老人变成功能。",
      "家庭文明必须警惕这种功能化。人可以承担角色，但不能只剩角色。孩子可以学习，但不能只是成绩机器。父母可以承担责任，但不能失去作为人的痛苦和需要。"
    ],
  },
  "004-aristotle-flourishing-and-the-family-as-first-soil": {
    title: "亚里士多德：幸福不是成功，而是人的充分展开",
    paragraphs: [
      "亚里士多德谈幸福时，并不是指短暂快乐，而是一个人的生命得到充分展开。",
      "这对现代家庭非常重要。很多家庭把幸福误解为成功，把成功误解为成绩、收入、地位和竞争胜利。",
      "可一个孩子真正的幸福，不只是考上好学校，而是他的感受力、判断力、责任感、爱人的能力和成为自己的能力都能成长。",
      "家庭是人的第一片土壤。土壤如果充满恐惧和羞辱，孩子也许会被训练得很能考试，却很难真正舒展生命。家庭文明要让家庭从压力机器，变成人格成长的土壤。"
    ],
  },
  "005-stoicism-citizens-of-the-world-and-inner-dignity": {
    title: "斯多葛：世界公民、内在尊严与不可被夺走的自由",
    paragraphs: [
      "斯多葛学派告诉人们：外部命运不完全受我们控制，但一个人的内在判断、德性和尊严仍然可以被守住。",
      "这并不是让人忍受伤害，而是提醒人不要把自己的全部价值交给外部评价。",
      "很多在控制型家庭里长大的人，一生都活在别人的眼光里。他们害怕让父母失望，害怕不够成功，害怕自己不配被爱。",
      "家庭文明要帮助人重新建立内在尊严：我不是成绩、不是工具、不是父母期待的延伸。我首先是一个人。即使关系曾经伤害我，我仍然可以重新成为自己。"
    ],
  },
  "006-from-ancient-philosophy-to-family-civilization": {
    title: "从古希腊到家庭文明：哲学最终要回到人的生活",
    paragraphs: [
      "哲学如果只停留在书本里，就很容易变成少数人的智力游戏。但真正重要的哲学，最终必须回到人的生活。",
      "苏格拉底提醒我们审视生活，柏拉图提醒我们思考正义与灵魂，亚里士多德提醒我们幸福是人的展开，斯多葛提醒我们守住内在尊严。",
      "家庭文明工程要做的，是把这些思想带回最日常的地方：父母如何说话，孩子是否被尊重，夫妻如何处理冲突，一个家庭是否允许真实感受存在。",
      "因此，HUMANS ARE ENDS 不是一个装饰栏目，而是整个家庭文明工程的哲学根基。它最终要回答：如何让每一个人在家庭里，真正作为人而活着。"
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
        <Nav lang="zh" />
        <main className="page">
          <p>文章尚未建立。</p>
          <Link href="/zh/humans-are-ends">返回 HUMANS ARE ENDS</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav lang="zh" />
      <main className="article-page">
        <p className="eyebrow">HUMANS ARE ENDS</p>
        <h1>{article.title}</h1>
        <div className="article-body">
          {article.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <footer className="footer">
          <Link href="/zh/humans-are-ends">返回 HUMANS ARE ENDS</Link>
        </footer>
      </main>
    </>
  );
}
