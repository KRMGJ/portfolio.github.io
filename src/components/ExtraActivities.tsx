import React from "react";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { extraActivities } from "@/data/portfolioData";


export default function ExtraActivities() {
    return (
        <Section title="대외활동 및 기타">
            <div className="grid sm:grid-cols-2 gap-4">
                {extraActivities.map((act, i) => (
                    <Card key={i} className="border-muted/50">
                        <CardContent className="p-5 flex items-start gap-3">
                            <act.icon className="h-6 w-6 mt-1 text-primary" />
                            <div>
                                <div className="font-medium">{act.title}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{act.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}