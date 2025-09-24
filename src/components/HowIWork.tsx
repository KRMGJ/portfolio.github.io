import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import { howIWork } from "@/data/portfolioData";


export default function HowIWork() {
    return (
        <Section title="업무 원칙">
            <div className="grid gap-3">
                {howIWork.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                        <ArrowUpRight className="h-4 w-4 mt-0.5 text-primary" />
                        <p className="text-muted-foreground">{item}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}