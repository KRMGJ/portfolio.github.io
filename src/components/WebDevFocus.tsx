import React from "react";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { webDevFocus } from "@/data/portfolioData";


export default function WebDevFocus() {
    return (
        <Section title="웹 개발 포커스">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {webDevFocus.map((f, i) => (
                    <Card key={i} className="border-muted/50">
                        <CardContent className="p-5 space-y-2">
                            <div className="inline-flex items-center justify-center rounded-2xl h-10 w-10 bg-primary/10">
                                <f.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="font-medium">{f.title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}