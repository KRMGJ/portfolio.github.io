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

const DEFAULT_TOC = [
    { id: "summary", label: "요약" },
    { id: "features", label: "핵심 기능" },
    { id: "outcomes", label: "성과" },
    { id: "screenshots", label: "스크린샷" },
    { id: "links", label: "참고 링크" },
] as const;

type TocItem = typeof DEFAULT_TOC[number];

export function ProjectCaseStudy({ data, toc = DEFAULT_TOC.slice() }: { data: CaseStudyData; toc?: TocItem[] }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

            {/* Layout: Left TOC / Right Content */}
            <div className="grid grid-cols-12 gap-8">
                <aside className="col-span-12 lg:col-span-3">
                    <nav className="lg:sticky lg:top-24 bg-muted/20 rounded-xl p-4 border border-muted/40">
                        <div className="text-xs font-medium text-muted-foreground mb-2">목차</div>
                        <ul className="space-y-1 text-sm">
                            {toc.map((t) => (
                                <li key={t.id}>
                                    <a href={`#${t.id}`} className="block rounded-md px-2 py-1 hover:bg-muted/50">
                                        {t.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="col-span-12 lg:col-span-9 space-y-10">
                    {/* Summary */}
                    <section id="summary" className="scroll-mt-24" style={{ marginBottom: '2.5rem' }}>
                        <Card className="border-muted/50">
                            <CardContent className="p-6 space-y-4">
                                <div className="text-xl font-semibold">요약</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{data.summary}</p>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <KV k="역할" v={data.role} />
                                    <KV k="기간" v={data.period} />
                                    {data.members ? <KV k="인원" v={data.members} /> : null}
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
                        {data.features.map((f) => (
                            <Feature key={f.title} title={f.title} items={f.items} />
                        ))}
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
                            <div className="grid gap-4">
                                {data.screenshots.map((s, i) => (
                                    <ImageFigure key={i} src={s.src} caption={s.caption} />
                                ))}
                            </div>
                        </Section>
                    ) : null}

                    {/* Links (again, optional footer area) */}
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
                </main>
            </div>
        </div>
    );
}

/* ----------------------------- helpers ----------------------------- */
function KV({ k, v }: { k: string; v: string }) {
    return (
        <div className="rounded-lg border border-muted/50 p-4">
            <div className="text-xs text-muted-foreground">{k}</div>
            <div className="font-medium">{v}</div>
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
        <Card className="border-muted/50" style={{ marginTop: '1rem' }}>
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

function ImageFigure({ src, caption }: { src: string; caption?: string }) {
    return (
        <figure className="space-y-2">
            <img src={src} alt={caption || "screenshot"} className="w-full rounded-lg border border-muted/50" />
            {caption ? <figcaption className="text-xs text-muted-foreground">{caption}</figcaption> : null}
        </figure>
    );
}
