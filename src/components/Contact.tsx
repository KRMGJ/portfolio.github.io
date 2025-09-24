import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolioData";


export default function Contact() {
    const { Mail, Phone, MapPin } = profile.icons;
    return (
        <>
            <Section title="Contact">
                <div id="contact" className="grid sm:grid-cols-2 gap-6">
                    <Card className="border-muted/50">
                        <CardContent className="p-6 space-y-4">
                            <div className="text-lg font-semibold">연락처</div>
                            <div className="flex flex-col gap-2 text-sm">
                                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> {profile.email}</a>
                                <a href={`mailto:dur369667@naver.com`} className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> dur369667@naver.com</a>
                                <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {profile.phone}</a>
                                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-muted/50">
                        <CardContent className="p-6 space-y-4">
                            <div className="text-lg font-semibold">빠른 링크</div>
                            <div className="flex flex-wrap gap-3">
                                {profile.links.map((l) => (
                                    <Button key={l.label} asChild variant="secondary">
                                        <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                                            {l.icon ? <l.icon className="h-4 w-4" /> : null}
                                            {l.label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>
            <footer className="py-12 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </footer>
        </>
    );
}