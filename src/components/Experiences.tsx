import React from "react";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/portfolioData";


export default function Experiences() {
    return (
        <Section title="경험 및 활동">
            <div className="grid sm:grid-cols-2 gap-4">
                {experiences.map((ex, i) => (
                    <Card key={i} className="border-muted/50">
                        <CardContent className="p-5 flex items-start gap-3">
                            <ex.icon className="h-6 w-6 mt-1 text-primary" />
                            <div>
                                <div className="font-medium">{ex.role}</div>
                                <div className="text-sm text-muted-foreground">{ex.period}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{ex.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}