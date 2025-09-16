import React from "react";


export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
            {children}
        </section>
    );
}
