import Nav from '@/app/lib/Nav';

export default function Page() {
  return (
    <>
      <Nav lang="zh" />
      <main className="article">
        <p className="eyebrow">Family Civilization Project</p>
        <h1>关于</h1>

        <div className="aboutGrid">
          <div>
            <p>
              <strong>David / 刘岗</strong>，家庭文明工程发起人。
              家庭文明的提出者、建设者与终身实践者。
            </p>
            <p>
              情感定位：我是所有受过伤害、沉默无语的孩子的代言人。
            </p>
            <p>
              联系邮箱：
              <a href="mailto:David@familyciv.com">David@familyciv.com</a>
            </p>
          </div>

          <div className="profilePhotoWrap">
            <img
              className="profilePhoto"
              src="/images/david-liu-photo.jpg"
              alt="David / 刘岗"
            />
            <p className="muted photoNote">
              请将个人照片上传为：<br />
              <code>site/public/images/david-liu-photo.jpg</code>
            </p>
          </div>
        </div>

        <div className="cards">
          <a className="card" href="/zh/start-here">
            <h3>从这里开始</h3>
            <p>了解家庭文明工程的入口。</p>
          </a>
          <a className="card" href="/zh/books">
            <h3>书籍</h3>
            <p>查看《家庭文明工程》书稿系统。</p>
          </a>
          <a className="card" href="/zh/substack">
            <h3>Substack</h3>
            <p>查看英文公共文章归档。</p>
          </a>
        </div>
      </main>
      <footer className="footer">David / 刘岗 · Family Civilization Project</footer>
    </>
  );
}
