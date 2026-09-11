import Link from "next/link";

const readingBooks = [
  { id: "three-body", title: "三体", author: "刘慈欣", progress: "第 186 页", updated: "今天", score: 8.8 },
  { id: "1587", title: "万历十五年", author: "黄仁宇", progress: "第 72 页", updated: "昨天", score: 8.4 },
];

const library = [
  ...readingBooks,
  { id: "to-live", title: "活着", author: "余华", progress: "已读", updated: "3 天前", score: 9.1 },
  { id: "sapiens", title: "人类简史", author: "尤瓦尔·赫拉利", progress: "想读", updated: "5 天前", score: 0 },
];

export default function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero-row">
        <div>
          <p className="eyebrow">个人阅读档案</p>
          <h1>我的阅读</h1>
          <p className="muted">记录正在读的书、阅读进度、笔记与最终读后感。</p>
        </div>
        <Link href="/books/new" className="button primary">＋ 添加书籍</Link>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">优先事项</p><h2>当前在读</h2></div>
          <span className="muted">{readingBooks.length} 本</span>
        </div>
        <div className="reading-grid">
          {readingBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="reading-card">
              <div className="book-cover">{book.title.slice(0, 2)}</div>
              <div className="stack-sm">
                <div><h3>{book.title}</h3><p className="muted">{book.author}</p></div>
                <div className="meta-row"><span>{book.progress}</span><span>最近更新：{book.updated}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="stats-grid" aria-label="阅读统计">
        <article><strong>2</strong><span>在读</span></article>
        <article><strong>42</strong><span>已读</span></article>
        <article><strong>16</strong><span>今年读完</span></article>
        <article><strong>2</strong><span>弃读</span></article>
        <article><strong>8.4</strong><span>平均评分</span></article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">全部记录</p><h2>我的书架</h2></div>
          <button className="button ghost">网格 / 列表</button>
        </div>
        <div className="toolbar">
          <input className="input" placeholder="搜索书名或作者…" aria-label="搜索书架" />
          <div className="chips">
            {['全部','想读','在读','已读','暂停','弃读'].map((item) => <button key={item} className={item === '全部' ? 'chip active' : 'chip'}>{item}</button>)}
          </div>
        </div>
        <div className="category-row"><span className="muted">分类</span>{['文学','历史','哲学','科幻','经济'].map((item) => <button key={item} className="chip">{item}</button>)}<button className="chip">＋</button></div>
        <div className="library-grid">
          {library.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="book-card">
              <div className="book-cover large">{book.title.slice(0, 2)}</div>
              <div><h3>{book.title}</h3><p className="muted">{book.author}</p><p className="tiny">{book.progress}{book.score ? ` · ${book.score}/10` : ''}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
