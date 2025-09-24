import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { formCaseStudyData } from "@/data/studyData";

export function FormPage() {
    return <ProjectCaseStudy data={formCaseStudyData} />;
}