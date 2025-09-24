import Section from "./Section";
import Chip from "./Chip";
import { Cpu, Database, Wrench, CheckCircle2 } from "lucide-react";
import { skills } from "@/data/portfolioData";


export default function Skills() {
    return (
        <Section title="기술 스택">
            <div className="grid lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2"><Cpu className="h-4 w-4" /> Front-End</h3>
                    <div className="flex flex-wrap gap-2">{skills.fe.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2"><Database className="h-4 w-4" /> Back-End & Infra</h3>
                    <div className="flex flex-wrap gap-2">{skills.be.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2"><Wrench className="h-4 w-4" /> Tools</h3>
                    <div className="flex flex-wrap gap-2 mb-6">{skills.tools.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                    <h3 className="font-semibold mb-3">Soft Skills</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {skills.soft.map((s) => (
                            <li key={s} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />{s}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}