import { GraduationCap, Award, Cpu, Database, Wrench, Rocket, Users, Briefcase, Lightbulb, Mail, Phone, MapPin, Github, Globe } from "lucide-react";


export const profile = {
    name: "장민규",
    title: "웹 개발자",
    tagline: "사용자 경험을 중시하며 최신 웹 기술로 창의적인 서비스를 만드는 신입 개발자",
    location: "대전 유성구",
    email: "dur369667@gmail.com",
    phone: "+82 10-9305-6649",
    links: [
        { label: "Notion", href: "https://www.notion.so/c197098381a141ff8db30429fa5dc17b?pvs=25#3c7aef3ec6da48128c09d07787a732e4", icon: Globe },
        { label: "Github", href: "https://github.com/your-id", icon: Github },
    ],
    icons: { Mail, Phone, MapPin },
};


export const education = [
    { school: "배재대학교", major: "전자공학과", period: "2019.03 ~", icon: GraduationCap },
];


export const certificates = [
    { name: "정보처리기사", year: "2025 (예정)", issuer: "한국산업인력공단", icon: Award },
    { name: "SQLD (SQL Developer)", year: "2024", issuer: "한국데이터산업진흥원", icon: Award },
];


export const skills = {
    fe: ["Semantic HTML", "Flexbox/Grid", "Animation", "JavaScript (ESNext)", "Async/Promise", "DOM 조작", "React", "JSP", "Bootstrap", "Tailwind CSS", "웹 성능 최적화", "Lazy Loading / Code Splitting"],
    be: ["Node.js", "Java", "RESTful API", "WebSocket", "OAuth", "JWT", "MySQL", "PostgreSQL", "Oracle"],
    tools: ["VS Code", "IntelliJ", "Spring Tool Suite", "Eclipse", "Git", "GitHub Desktop"],
    soft: ["문제 해결", "분석적 사고", "창의적 문제 해결", "기술적 의사소통", "피드백 수용/제공", "협업 / 역할 유연성", "적응력 / 변화수용"],
};


export const webDevFocus = [
    { icon: Cpu, title: "Front-End", desc: "React + Vite, CSR/SSR, 상태관리(Zustand/React Query), 접근성/반응형 UI" },
    { icon: Database, title: "Data & API", desc: "RESTful 설계, Pagination/Sorting/Filtering 패턴, DTO 및 에러 응답 규약" },
    { icon: Wrench, title: "DX & 생산성", desc: "Tailwind + shadcn/ui, 재사용 가능한 컴포넌트/훅 라이브러리, 코드 스플리팅" },
    { icon: Rocket, title: "성능/품질", desc: "Lighthouse 점검, 번들 최적화, 이미지 최적화, CI/CD 품질 검사" },
];


export const projects = [
    {
        name: "2차 팀 프로젝트 — Where To Go",
        tags: ["React", "Node", "REST", "Team"],
        summary: "여행/로컬 정보 탐색 웹앱. 검색/필터/위시리스트 UI, 카드형 리스트, 모달 상세 구현.",
        links: [{ label: "문서", href: "https://www.notion.so/2-Where-To-Go-560d7a75bb9b4731950adb53f126afc6?pvs=21" }],
    },
    {
        name: "1차 팀 프로젝트 — Store_24",
        tags: ["React", "Java", "Oracle", "Team"],
        summary: "편의점형 커머스 기능 데모. 상품/장바구니/결제 UX 시나리오, 관리자 화면 설계.",
        links: [{ label: "문서", href: "https://www.notion.so/1-Store_24-6ad69d299319406bb3bf402e5ff5d5bb?pvs=21" }],
    },
    {
        name: "1차 개인 프로젝트",
        tags: ["React", "Bootstrap", "Solo"],
        summary: "학습용 개인 웹앱. 폼 검증, 모듈식 컴포넌트, 라우팅, 코드 스플리팅 도입.",
        links: [{ label: "문서", href: "https://www.notion.so/1-8949d279e46643acb2568a2dcd556a1c?pvs=21" }],
    },
];


export const experiences = [
    { role: "학생 개발 동아리 활동", period: "2023.03 ~ 2024.12", desc: "웹 개발 스터디 및 미니 프로젝트 진행, 코드 리뷰 경험", icon: Users },
    { role: "인턴십 (웹 개발 지원) — 스타트업", period: "2024.07 ~ 2024.08", desc: "React 기반 프론트엔드 개발 보조 및 문서화 작업", icon: Briefcase },
];


export const extraActivities = [
    { title: "해커톤 참가", desc: "교내/외부 해커톤 2회 참가, 아이디어 기획 및 프로토타입 개발 경험", icon: Lightbulb },
    { title: "오픈소스 기여", desc: "작은 UI 라이브러리 버그 수정 및 PR 제출 경험", icon: Lightbulb },
];


export const howIWork = [
    "목표 달성도 중요하지만 과정에서 재미와 의미를 찾습니다.",
    "회사와 사용자 모두에게 긍정적 임팩트를 만드는 일을 선호합니다.",
    "문제가 생기면 상황 안에서 앞으로 나아갈 대안을 즉시 모색합니다.",
    "함께 정한 기한을 지키려고 노력합니다.",
];