import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolioData";


export default function Hero() {
    const { Mail, Phone, MapPin } = profile.icons;
    return (
        <header className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                            {profile.name} <span className="text-primary">{profile.title}</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{profile.tagline}</p>
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{profile.location}</span>
                            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" />{profile.email}</a>
                            <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${profile.phone}`}><Phone className="h-4 w-4" />{profile.phone}</a>
                            {profile.links.map((l) => (
                                <a key={l.label} className="inline-flex items-center gap-2 hover:underline" href={l.href} target="_blank" rel="noreferrer">
                                    {l.icon ? <l.icon className="h-4 w-4" /> : null}{l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button asChild size="lg"><a href="#projects">프로젝트 보기</a></Button>
                        <Button variant="secondary" asChild size="lg"><a href="#contact">연락하기</a></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}