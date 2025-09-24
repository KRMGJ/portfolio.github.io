import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";

export default function Projects() {
    return (
        <Section title="프로젝트">
            <div id="projects" className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <Card key={p.name} className="group border-muted/50 hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <Badge key={t} variant="outline">{t}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>

                            {/* 역할 */}
                            {p.role && (
                                <p className="text-sm font-medium text-foreground">역할: {p.role}</p>
                            )}

                            {/* 기여 */}
                            {p.contributions && (
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {p.contributions.join(", ")}
                                </p>
                            )}

                            {/* 성과 */}
                            {p.outcomes && (
                                <div className="text-sm text-foreground">
                                    <p className="font-medium">성과:</p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        {p.outcomes.map((o: string, idx: number) => (
                                            <li key={idx}>{o}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex gap-3 flex-wrap">
                                {p.links.map((l) => (
                                    <Button key={l.href} variant="secondary" size="sm" asChild>
                                        <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            {l.label} <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                ))}
                                {p.web.href && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={p.web.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                                            웹사이트 <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}