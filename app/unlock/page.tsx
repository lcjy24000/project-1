import Link from "next/link";

export default function UnlockPage() {
  return (
    <div className="unlock-wrap">
      <section className="unlock-card stack-md">
        <p className="eyebrow">Private Library</p>
        <h1>进入 My Library</h1>
        <p className="muted">这是一个私人阅读记录网站。第一阶段先完成界面，下一阶段接入服务器端密码验证。</p>
        <label><span className="field-label">访问密码</span><input className="input input-lg" type="password" placeholder="输入访问密码" /></label>
        <Link href="/" className="button primary full">进入书架</Link>
      </section>
    </div>
  );
}
