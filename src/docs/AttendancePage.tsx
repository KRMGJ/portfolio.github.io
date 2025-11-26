import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { attendanceCaseStudyData } from "@/data/studyData";

export function AttendancePage() {
    return <ProjectCaseStudy data={attendanceCaseStudyData} />;
}