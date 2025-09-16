import React from "react";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/portfolioData";


export default function Education() {
    return (
        <Section title="학력">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {education.map((e, i) => (
                    <Card key={i} className="border-muted/50">
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
        </Section>
    );
}