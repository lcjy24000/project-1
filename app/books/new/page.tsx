import Link from "next/link";

const results = [
  { id: "three-body", title: "三体", author: "刘慈欣", publisher: "重庆出版社", isbn: "9787536692930" },
  { id: "three-body-set", title: "三体全集", author: "刘慈欣", publisher: "重庆出版社", isbn: "9787229100605" },
];

export default function NewBookPage() {
  return (
    <div className="narrow stack-lg">
      <div><Link href="/" className="back-link">← 返回书架</Link><p className="eyebrow">建立新记录</p><h1>添加书籍</h1><p className="muted">第一版先展示搜索交互；真实图书数据接口将在下一阶段接入。</p></div>
      <section className="section-block">
        <label className="field-label" htmlFor="book-search">搜索书名</label>
        <input id="book-search" className="input input-lg" defaultValue="三体" placeholder="输入书名开始搜索…" />
      </section>
      <section className="stack-md">
        <div className="section-heading"><h2>搜索结果</h2><span className="muted">示例数据</span></div>
        {results.map((book) => (
          <article className="search-result" key={book.id}>
            <div className="book-cover">{book.title.slice(0, 2)}</div>
            <div className="grow"><h3>{book.title}</h3><p>{book.author}</p><p className="muted">{book.publisher} · ISBN {book.isbn}</p></div>
            <Link className="button primary" href={`/books/${book.id}`}>选择</Link>
          </article>
        ))}
        <button className="button ghost full">没有找到？手动添加</button>
      </section>
    </div>
  );
}
