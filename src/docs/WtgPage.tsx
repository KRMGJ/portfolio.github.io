import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { whereToGoCaseStudyData } from "@/data/studyData";

export function WhereToGoPage() {
    return <ProjectCaseStudy data={whereToGoCaseStudyData} />;
}
