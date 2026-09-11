import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function BookDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="stack-lg">
      <Link href="/" className="back-link">← 我的书架</Link>
      <section className="book-detail-hero">
        <div className="book-cover xlarge">三体</div>
        <div className="stack-sm grow">
          <div><p className="eyebrow">书籍记录 · {id}</p><h1>三体</h1><p className="muted">刘慈欣 · 重庆出版社</p></div>
          <div className="chips"><span className="chip active">在读</span><span className="chip">科幻</span><span className="chip">文学</span></div>
          <div className="meta-grid"><div><span>评分</span><strong>8.8 / 10</strong></div><div><span>开始阅读</span><strong>2026-09-11</strong></div><div><span>最近进度</span><strong>第 186 页</strong></div></div>
        </div>
        <button className="button ghost">编辑信息</button>
      </section>

      <section className="section-block stack-md">
        <div className="section-heading"><div><p className="eyebrow">过程记录</p><h2>阅读笔记</h2></div><Link href={`/books/${id}/notes/new`} className="button primary">＋ 新增笔记</Link></div>
        <article className="note-card"><div className="note-meta"><span>第 186 页</span><span>2026-09-18</span></div><h3>关于猜疑链</h3><p>这里关于文明之间猜疑链的描述让我开始重新思考信息不完全时的选择。</p><div className="inline-image-placeholder">图片位置</div><div className="note-actions"><button>编辑</button><button>删除</button></div></article>
        <article className="note-card"><div className="note-meta"><span>第 92 页</span><span>2026-09-14</span></div><p>第一次看到黑暗森林概念的铺垫，感觉作者正在逐步把尺度从个人推向整个文明。</p><div className="note-actions"><button>编辑</button><button>删除</button></div></article>
      </section>

      <section className="section-block stack-md">
        <div className="section-heading"><div><p className="eyebrow">阅读完成后</p><h2>最终读后感</h2></div><button className="button ghost">编辑读后感</button></div>
        <p className="muted">尚未完成。读完后可以在这里保存一篇独立的最终读后感，并支持图文混排。</p>
      </section>
    </div>
  );
}
