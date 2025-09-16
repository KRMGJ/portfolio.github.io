import React from "react";
import { Badge } from "@/components/ui/badge";
export default function Chip({ children }: { children: React.ReactNode }) {
    return <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">{children}</Badge>;
}