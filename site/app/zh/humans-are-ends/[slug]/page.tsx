import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles: Record<string, { title: string; sections: string[] }> = {
  '001-why-humans-are-ends-matters-to-family-civilization': {
    title: '为什么“人是目的”是家庭文明的第一原则',
    sections: [
      '家庭文明工程的哲学起点，是一个极其简单却极其深刻的原则：人是目的，不是工具。',
      '在家庭中，孩子不能被当成成绩、面子、养老、情绪补偿或父母未完成梦想的工具。伴侣也不能被当成满足控制、依赖、证明或支配欲的工具。',
      '真正文明的家庭，首先不是没有冲突，而是在冲突中仍然承认每个人都是人，都有尊严、边界、感受和自由。',
    ],
  },
  '002-socrates-the-examined-life-and-the-human-soul': {
    title: '苏格拉底：一个人为什么必须审视自己的生活',
    sections: [
      '苏格拉底留给人类的重要提醒，是人不能只活在习惯、权威和群体意见之中。一个未经审视的生活，很容易变成被他人安排的生活。',
      '把这一思想带回家庭，就是父母不能只因为传统如此、大家如此、上一代如此，就继续用控制和羞辱对待孩子。',
      '家庭文明从追问开始：我这样对待孩子，真的是爱，还是控制？我要求孩子听话，是为了他的成长，还是为了缓解我的焦虑？',
    ],
  },
  '003-plato-justice-soul-and-the-danger-of-turning-people-into-functions': {
    title: '柏拉图：正义、灵魂与把人变成功能的危险',
    sections: [
      '柏拉图思考正义、灵魂和城邦秩序。他提醒我们，一个社会如果只看功能，而忘记人的灵魂，就可能把人变成系统的零件。',
      '家庭也可能如此。孩子被看成成绩机器，父母被看成供养机器，伴侣被看成情绪或经济工具，家庭就会失去人的温度。',
      '家庭文明不是让每个人只完成角色功能，而是让每个人在关系中仍然作为完整的人存在。',
    ],
  },
  '004-aristotle-flourishing-and-the-family-as-first-soil': {
    title: '亚里士多德：幸福不是成功，而是人的充分展开',
    sections: [
      '亚里士多德把幸福理解为人的充分实现，而不只是外在成就。一个人活得好，不只是有用、成功或听话。',
      '如果家庭只追求成绩和成功，却毁掉孩子的生命力、自尊、判断力和爱的能力，这样的教育并不真正通向幸福。',
      '家庭是人的第一片土壤。好的家庭不是把孩子修剪成统一形状，而是帮助生命充分展开。',
    ],
  },
  '005-stoicism-citizens-of-the-world-and-inner-dignity': {
    title: '斯多葛：世界公民、内在尊严与不可被夺走的自由',
    sections: [
      '斯多葛思想强调内在自由、德性和人作为世界公民的尊严。外在环境可能限制人，但人的内在尊严不应被彻底夺走。',
      '在家庭中，最大的伤害之一，是让孩子相信自己的价值完全取决于父母评价、成绩、服从和外界认可。',
      '家庭文明要帮助人建立一种内在稳定：我不是工具，我不是附属品，我作为人本身就有尊严。',
    ],
  },
  '006-from-ancient-philosophy-to-family-civilization': {
    title: '从古希腊到家庭文明：哲学最终要回到人的生活',
    sections: [
      '哲学不应该只停留在书本里。苏格拉底的追问、柏拉图的正义、亚里士多德的幸福、斯多葛的内在尊严，最终都要回到人的日常生活。',
      '家庭正是哲学最应该落地的地方。因为一个人最早在那里学习什么是人，什么是爱，什么是自由，什么是尊严。',
      '家庭文明工程要做的，就是把人类思想史中关于人的尊严与自由的智慧，变成普通家庭可以理解和实践的关系方式。',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function HumansArticleZhPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <main className="page-wrap article-wrap">
      <Link className="back-link" href="/zh/humans-are-ends">← HUMANS ARE ENDS</Link>
      <h1>{article.title}</h1>
      <article className="prose">
        {article.sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </article>
    </main>
  );
}
