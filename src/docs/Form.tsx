import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// 섹션 ID와 목차 정의
const TOC = [
    { id: "summary", label: "요약" },
    { id: "features", label: "핵심 기능" },
    { id: "architecture", label: "설계 · 프로세스" },
    { id: "outcomes", label: "성과" },
    { id: "screenshots", label: "스크린샷" },
    { id: "links", label: "참고 링크" },
] as const;

export default function FormCaseStudy() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* 헤더 */}
            <header className="space-y-3 mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">2차 개인 프로젝트 — 설문조사 웹앱 (Form)</h1>
                <p className="text-muted-foreground">AI 분석과 배포 제약을 갖춘 설문 제작/응답/분석 풀스택 플랫폼.</p>
                <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Vite", "Zustand", "React Query", "TailwindCSS", "shadcn/ui", "Spring Boot", "Spring Security", "MyBatis", "PostgreSQL", "Redis", "Docker", "OpenAI API", "OAuth2"].map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                </div>
            </header>

            {/* 본문 레이아웃: 좌측 목차 · 우측 콘텐츠 */}
            <div className="grid grid-cols-12 gap-8">
                {/* 목차 (lg 이상에서 스티키) */}
                <aside className="col-span-12 lg:col-span-3">
                    <nav className="lg:sticky lg:top-24 bg-muted/20 rounded-xl p-4 border border-muted/40">
                        <div className="text-xs font-medium text-muted-foreground mb-2">목차</div>
                        <ul className="space-y-1 text-sm">
                            {TOC.map((t) => (
                                <li key={t.id}>
                                    <a href={`#${t.id}`} className="block rounded-md px-2 py-1 hover:bg-muted/50">
                                        {t.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* 콘텐츠 */}
                <main className="col-span-12 lg:col-span-9 space-y-10 gap-8">
                    {/* 요약 카드 (첫 부분 요약) */}
                    <section id="summary" className="scroll-mt-24 mb-10" style={{ marginBottom: '2.5rem' }}>
                        <Card className="border-muted/50">
                            <CardContent className="p-6 space-y-4">
                                <div className="text-xl font-semibold">요약</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    설문 생성/편집, 배포/제어(도메인·비밀번호·기간·응답 제한), 응답 수집/세션 추적, 실시간 통계와 AI 요약/인사이트를 제공하는 풀스택 설문 플랫폼입니다. FE는 React + Zustand/React Query, BE는 Spring Boot, DB는 PostgreSQL(UUID, citext), 배포는 Vercel/AWS RDS/Docker 조합으로 구성했습니다.
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <KV k="역할" v="Full‑stack (개인)" />
                                    <KV k="인원" v="1명" />
                                    <KV k="기간" v="2025‑08‑29 ~ 2025‑09‑23" />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    <Button asChild size="sm" variant="secondary">
                                        <a href="https://www.mg03.cloud/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            데모 사이트 <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                    <Button asChild size="sm" variant="outline">
                                        <a href="https://github.com/KRMGJ/Form-f" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            GitHub Front <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                    <Button asChild size="sm" variant="outline">
                                        <a href="https://github.com/KRMGJ/Form-b" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            GitHub Back <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                    <Button asChild size="sm" variant="outline">
                                        <a href="https://garrulous-erica-128.notion.site/2-Form-277c10a0c0d28076b251ef181043722e" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            원문 Notion <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* 핵심 기능 */}
                    <Section id="features" title="핵심 기능">
                        <Feature title="설문 작성 & 관리" items={[
                            "제목/설명/카테고리/상태, AI 추천 질문",
                            "섹션 단위 그룹화/순서 관리",
                            "문항 타입(단답/서술/객관식/체크박스/날짜/평점) · 필수/범위/분기",
                            "옵션 추가/삭제 및 기타 응답"
                        ]} />
                        <Feature title="배포 & 제어" items={[
                            "로그인 필요, 1인 1회, 도메인/비밀번호/기간/응답수 제한",
                            "배포 링크별 만료/비번/응답 제한",
                            "참여 게이트(나이 확인/약관 동의)"
                        ]} />
                        <Feature title="응답 수집" items={[
                            "응답 세션 추적(시작/제출, 채널, 디바이스)",
                            "답변 저장(텍스트/숫자/날짜/JSON)",
                            "운영자 메모/핀"
                        ]} />
                        <Feature title="통계 & 분석" items={[
                            "실시간 통계(조회/응답/소요시간)",
                            "AI 요약/인사이트",
                            "스냅샷(JSON) 기반 후처리"
                        ]} />
                    </Section>

                    {/* 설계 / 프로세스 */}
                    <Section id="architecture" title="설계 · 프로세스">
                        <Card className="border-muted/50" style={{ marginTop: '1rem' }}>
                            <CardContent className="p-5 space-y-3 text-sm text-muted-foreground">
                                <Item label="FE">React + TypeScript + Vite · Zustand(전역) · React Query(서버)</Item>
                                <Item label="BE">Spring Boot · REST · OpenAI 연동</Item>
                                <Item label="DB">PostgreSQL · citext · PK=UUID</Item>
                                <Item label="Infra">Docker · Vercel(프론트) · AWS RDS(DB)</Item>
                            </CardContent>
                        </Card>
                    </Section>

                    {/* 성과 */}
                    <Section id="outcomes" title="성과">
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>코드/상태 관리 단순화</li>
                            <li>배포 자동화 & 환경 분리</li>
                            <li>OpenAI 설문 문항 생성</li>
                        </ul>
                    </Section>

                    {/* 스크린샷 */}
                    <Section id="screenshots" title="스크린샷">
                        <div className="grid gap-4">
                            <ImageFigure src="/images/form/home.png" caption="랜딩/추천 설문" />
                            <ImageFigure src="/images/form/create.png" caption="설문 생성" />
                            <ImageFigure src="/images/form/analytics.png" caption="통계/분석" />
                            <ImageFigure src="/images/form/response-detail.png" caption="응답 상세" />
                        </div>
                    </Section>

                    {/* 참고 링크 */}
                    <Section id="links" title="참고 링크">
                        <div className="flex flex-wrap gap-2">
                            <Button asChild size="sm" variant="secondary">
                                <a href="https://garrulous-erica-128.notion.site/2-Form-277c10a0c0d28076b251ef181043722e" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                    Notion 문서 <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </Button>
                            <Button asChild size="sm" variant="outline">
                                <a href="https://www.mg03.cloud/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                    데모 사이트 <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </Button>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
}

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

function Item({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[72px_1fr] gap-4">
            <span className="text-foreground font-medium">{label}</span>
            <span className="text-muted-foreground">{children}</span>
        </div>
    );
}

function Feature({ title, items }: { title: string; items: string[] }) {
    return (
        <Card className="border-muted/50" style={{ marginTop: '1rem' }}>
            <CardContent className="p-5 space-y-2">
                <div className="font-medium">{title}</div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {items.map((t, i) => (<li key={i}>{t}</li>))}
                </ul>
            </CardContent>
        </Card>
    );
}

function ImageFigure({ src, caption }: { src: string; caption?: string }) {
    return (
        <figure className="space-y-2">
            <img src={src} alt={caption || "screenshot"} className="w-full rounded-lg border border-muted/50" />
            {caption ? <figcaption className="text text-muted-foreground">{caption}</figcaption> : null}
        </figure>
    );
}
