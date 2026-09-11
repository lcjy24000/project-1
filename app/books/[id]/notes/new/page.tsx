import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function NewNotePage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="narrow stack-lg">
      <div><Link href={`/books/${id}`} className="back-link">← 返回书籍</Link><p className="eyebrow">阅读过程记录</p><h1>新增阅读笔记</h1></div>
      <section className="editor-card stack-md">
        <div className="two-col"><label><span className="field-label">页码</span><input className="input" placeholder="例如 186" /></label><label><span className="field-label">标题（可选）</span><input className="input" placeholder="给这条笔记一个标题" /></label></div>
        <div><span className="field-label">正文</span><div className="editor-toolbar"><button>B</button><button>I</button><button>标题</button><button>引用</button><button>列表</button><button>🖼 插入图片</button></div><textarea className="editor-area" placeholder="写下此刻的想法……" defaultValue="我认为这里……" /></div>
        <div className="save-state"><span className="status-dot" /> 已自动保存 · 15:42</div>
      </section>
      <p className="muted tiny">下一阶段会实现真实自动保存、离线草稿恢复和图片上传。当前页面先用于确认编辑体验。</p>
    </div>
  );
}
