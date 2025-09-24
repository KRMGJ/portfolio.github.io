import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/data/portfolioData";


export default function Certificates() {
    return (
        <Section title="자격증">
            <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((c, i) => (
                    <Card key={i} className="border-muted/50">
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
        </Section>
    );
}