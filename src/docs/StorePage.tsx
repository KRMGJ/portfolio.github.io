import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { storeCaseStudyData } from "@/data/studyData";

export function StorePage() {
    return <ProjectCaseStudy data={storeCaseStudyData} />;
}
