// Education.tsx
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { education, certificates } from "@/data/portfolioData";

export default function Education() {
    return (
        <Section title="">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">학력</h2>
                    <div className="grid gap-4">
                        {education.map((e, i) => (
                            <Card key={i} className="border-muted/50 h-full">
                                <CardContent className="p-5 flex items-start gap-3">
                                    <e.icon className="h-6 w-6 mt-1" />
                                    <div>
                                        <div className="font-medium">{e.school} · {e.major}</div>
                                        <div className="text-sm text-muted-foreground">{e.period}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">자격증</h2>
                    <div className="grid gap-4">
                        {certificates.map((c, i) => (
                            <Card key={i} className="border-muted/50 h-full">
                                <CardContent className="p-5 flex items-start gap-3">
                                    <c.icon className="h-6 w-6 mt-1 text-primary" />
                                    <div>
                                        <div className="font-medium">{c.name}</div>
                                        <div className="text-sm text-muted-foreground">{c.issuer} · {c.year}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
