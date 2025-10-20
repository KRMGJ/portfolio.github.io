import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface CaseStudyLink { label: string; href: string }
export interface CaseStudyScreenshot { src: string; caption?: string }
export interface CaseStudyFeature { title: string; items: string[] }
export interface CaseStudyArchitecture { environment: string; stack: string; api: string }

export interface CaseStudyData {
    title: string;
    subtitle?: string;
    summary: string;
    role: string;
    period: string;
    members?: string;
    tags: string[];
    features: CaseStudyFeature[];
    architecture?: CaseStudyArchitecture;
    outcomes?: string[];
    screenshots?: CaseStudyScreenshot[];
    links?: CaseStudyLink[];
}

export function ProjectCaseStudy({ data }: { data: CaseStudyData }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Header */}
            <header className="space-y-3 mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{data.title}</h1>
                {data.subtitle ? <p className="text-muted-foreground">{data.subtitle}</p> : null}
                <div className="flex flex-wrap gap-2 my-4" style={{ margin: '1rem 0' }}>
                    {data.tags.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                </div>
            </header>

            {/* Summary */}
            <section id="summary" className="scroll-mt-24" style={{ marginBottom: '2.5rem' }}>
                <Card className="border-muted/50">
                    <CardContent className="p-6 space-y-4">
                        <div className="text-xl font-bold">요약</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{data.summary}</p>
                        <div className="flex justify-between gap-4 flex-wrap">
                            <KV k="역할" v={data.role} />
                            <KV k="기간" v={data.period} />
                            {data.members ? <KV k="인원" v={data.members} /> : null}
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {data.links && data.links.length > 0 ? (
                            <div className="flex gap-2 flex-wrap">
                                {data.links.map((l) => (
                                    <Button key={l.href} asChild size="sm" variant="outline">
                                        <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            {l.label} <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        ) : null}
                    </CardContent>
                </Card>
            </section>

            {/* Features */}
            <Section id="features" title="핵심 기능">
                <div className="grid md:grid-cols-2 gap-4">
                    {data.features.map((f) => (
                        <Feature key={f.title} title={f.title} items={f.items} />
                    ))}
                </div>
            </Section>

            {/* Architecture */}
            {data.architecture ? (
                <Section id="architecture" title="설계 · 프로세스">
                    <Card className="border-muted/50" style={{ marginTop: '1rem' }}>
                        <CardContent className="p-5 space-y-3 text-sm text-muted-foreground">
                            <Item label="환경">{data.architecture.environment}</Item>
                            <Item label="스택">{data.architecture.stack}</Item>
                            <Item label="API">{data.architecture.api}</Item>
                        </CardContent>
                    </Card>
                </Section>
            ) : null}

            {/* Outcomes */}
            {data.outcomes && data.outcomes.length > 0 ? (
                <Section id="outcomes" title="성과">
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {data.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                        ))}
                    </ul>
                </Section>
            ) : null}

            {/* Screenshots */}
            {data.screenshots && data.screenshots.length > 0 ? (
                <Section id="screenshots" title="스크린샷">
                    <HorizontalGallery screenshots={data.screenshots!} />
                </Section>
            ) : null}

            {/* Links */}
            {data.links && data.links.length > 0 ? (
                <Section id="links" title="참고 링크">
                    <div className="flex flex-wrap gap-2">
                        {data.links.map((l) => (
                            <Button key={l.href} asChild size="sm" variant="secondary">
                                <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                    {l.label} <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </Button>
                        ))}
                    </div>
                </Section>
            ) : null}
        </div>
    );
}

function KV({ k, v }: { k: string; v: string }) {
    return (
        <div className="flex rounded-lg border border-muted/50 py-3">
            <div className="text-xl font-semibold">{k} :</div>
            <div className="font-medium">&nbsp;{v}</div>
        </div>
    );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="space-y-3 scroll-mt-24" style={{ marginTop: '3rem' }}>
            <h3 className="text-xl font-semibold">{title}</h3>
            {children}
        </section>
    );
}

function Feature({ title, items }: { title: string; items: string[] }) {
    return (
        <Card className="border-muted/50 h-full">
            <CardContent className="p-5 space-y-2">
                <div className="font-medium">{title}</div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {items.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-2 gap-1">
            <span className="text-foreground font-medium">{label}</span>
            <span className="text-muted-foreground">{children}</span>
        </div>
    );
}

function ImageFigure({
    src,
    caption,
    thumbClass,
}: { src: string; caption?: string; thumbClass?: string }) {
    const [open, setOpen] = React.useState(false);

    // minimal zoom/pan: wheel to zoom at cursor, drag to pan, dblclick to reset
    const [scale, setScale] = React.useState(1);
    const [tx, setTx] = React.useState(0);
    const [ty, setTy] = React.useState(0);
    const wrapRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

    const zoomAt = (factor: number, cx: number, cy: number) => {
        const wrap = wrapRef.current; if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        // cursor -> wrapper center 좌표
        const ox = cx - (rect.left + rect.width / 2);
        const oy = cy - (rect.top + rect.height / 2);
        const next = clamp(scale * factor, 0.25, 6);
        if (next === scale) return;
        const k = next / scale;
        // 커서 아래 지점이 그대로 유지되도록 보정
        setTx(tx + ox - ox * k);
        setTy(ty + oy - oy * k);
        setScale(next);
    };

    const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        zoomAt(factor, e.clientX, e.clientY);
    };

    // panning
    const dragging = React.useRef(false);
    const last = React.useRef({ x: 0, y: 0 });
    const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
        dragging.current = true;
        last.current = { x: e.clientX, y: e.clientY };
        e.currentTarget.style.cursor = "grabbing";
    };
    const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!dragging.current) return;
        const dx = e.clientX - last.current.x;
        const dy = e.clientY - last.current.y;
        last.current = { x: e.clientX, y: e.clientY };
        setTx((p) => p + dx);
        setTy((p) => p + dy);
    };
    const endDrag: React.MouseEventHandler<HTMLDivElement> = (e) => {
        dragging.current = false;
        e.currentTarget.style.cursor = "grab";
    };

    const onDblClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setScale(1); setTx(0); setTy(0);
    };

    return (
        <>
            <figure className="relative group">
                <img
                    src={src}
                    alt={caption || "screenshot"}
                    className={[
                        "rounded-lg border border-muted/50 cursor-zoom-in",
                        thumbClass ?? "w-full",
                    ].join(" ")}
                    onClick={() => { setOpen(true); setScale(1); setTx(0); setTy(0); }}
                />
                {caption ? (
                    <figcaption className="absolute left-2 top-2 text-xs font-semibold bg-background/80 backdrop-blur-sm px-2 py-1 rounded shadow">
                        {caption}
                    </figcaption>
                ) : null}
            </figure>

            {open && (
                <div className="fixed inset-0 z-50 bg-black/80 p-4" role="dialog" aria-modal="true">
                    <div
                        ref={wrapRef}
                        className="w-full h-full cursor-grab overflow-hidden"
                        onWheel={onWheel}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={endDrag}
                        onMouseLeave={endDrag}
                        onDoubleClick={onDblClick}
                        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
                    >
                        <img
                            src={src}
                            alt={caption || "screenshot enlarged"}
                            draggable={false}
                            className="select-none pointer-events-none block mx-auto"
                            style={{ transform: `translate(${tx}px, ${ty}px) scale(${scale})`, transformOrigin: "center center" }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

function HorizontalGallery({ screenshots }: { screenshots: { src: string; caption?: string }[] }) {
    const listRef = React.useRef<HTMLDivElement | null>(null);
    const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
    const [index, setIndex] = React.useState(0);

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const scrollTo = (i: number) => {
        const el = itemRefs.current[i];
        if (el) el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    const next = () => { const i = clamp(index + 1, 0, screenshots.length - 1); setIndex(i); scrollTo(i); };
    const prev = () => { const i = clamp(index - 1, 0, screenshots.length - 1); setIndex(i); scrollTo(i); };

    // 사용자가 드래그/휠로 스크롤했을 때도 가장 가까운 카드로 인덱스 동기화
    const onScroll = () => {
        const list = listRef.current; if (!list) return;
        const children = itemRefs.current.filter(Boolean) as HTMLDivElement[];
        let best = 0; let bestDist = Infinity; const sl = list.scrollLeft;
        children.forEach((c, i) => {
            const dist = Math.abs(c.offsetLeft - sl);
            if (dist < bestDist) { bestDist = dist; best = i; }
        });
        setIndex(best);
    };

    return (
        <div className="relative">
            {/* 좌/우 이동 버튼 */}
            <div className="absolute -top-10 right-0 flex gap-2">
                <Button size="icon" variant="outline" onClick={prev} aria-label="이전">◀</Button>
                <Button size="icon" variant="outline" onClick={next} aria-label="다음">▶</Button>
            </div>

            <div
                ref={listRef}
                onScroll={onScroll}
                className="flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
            >
                {screenshots.map((s, i) => (
                    <div
                        key={i}
                        ref={(el) => { itemRefs.current[i] = el; }}
                        className="snap-start shrink-0 basis-[360px]"   // ★ 한 장 폭 고정
                        style={{ scrollMarginInline: "12px" }}
                    >
                        {/* 작은 썸네일: 균일한 높이 */}
                        <ImageFigure src={s.src} caption={s.caption} thumbClass="w-full h-56 object-cover" />
                    </div>
                ))}
            </div>

            {/* 인디케이터 */}
            <div className="mt-2 flex justify-center gap-1">
                {screenshots.map((_, i) => (
                    <span
                        key={i}
                        className={["h-1.5 w-1.5 rounded-full", i === index ? "bg-foreground" : "bg-muted-foreground/30"].join(" ")}
                    />
                ))}
            </div>
        </div>
    );
}
