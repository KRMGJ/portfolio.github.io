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
        { label: "Github", href: "https://github.com/KRMGJ", icon: Github },
    ],
    icons: { Mail, Phone, MapPin },
    highlights: [
        "React + Spring Boot 기반 풀스택 개발",
        "AWS EC2/RDS 배포 및 Docker Compose 운영",
        "PostgreSQL 스키마 설계(모든 PK UUID, citext 확장) 경험",
    ],
} as const;

export const education = [
    { school: "배재대학교", major: "전자공학과", period: "2019.03 ~", icon: GraduationCap },
] as const;

export const certificates = [
    { name: "정보처리기사", year: "2025 (예정)", issuer: "한국산업인력공단", icon: Award },
    // { name: "SQLD (SQL Developer)", year: "2024", issuer: "한국데이터산업진흥원", icon: Award },
] as const;

export const skills = {
    fe: [
        "Semantic HTML",
        "Flexbox/Grid",
        "Animation",
        "JavaScript",
        "Async/Promise",
        "React",
        "Vite",
        "React Query",
        "Zustand",
        "JSP",
        "Bootstrap",
        "Tailwind CSS",
        "shadcn/ui",
        "웹 성능 최적화",
        "Lazy Loading / Code Splitting",
        "접근성/반응형",
    ],
    be: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "RESTful API",
        "Spring Security",
        "OAuth2",
        "JWT",
        "WebSocket (STOMP)",
        "JPA",
        "MyBatis",
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "Redis (Session)",
    ],
    infra: [
        "AWS EC2",
        "AWS RDS (PostgreSQL/MySQL)",
        "Route 53",
        "Elastic IP",
        "Nginx / Caddy",
        "Docker",
        "Docker Compose",
        "Vercel",
        "GitHub Actions (CI/CD)",
        "pm2 / systemd",
    ],
    tools: [
        "VS Code",
        "IntelliJ",
        "Spring Tool Suite",
        "Eclipse",
        "Git",
        "GitHub Desktop",
        "Postman",
        "pgAdmin",
        "DBeaver",
        "SQL Developer",
    ],
    soft: [
        "문제 해결",
        "분석적 사고",
        "창의적 문제 해결",
        "기술적 의사소통",
        "피드백 수용/제공",
        "협업 / 역할 유연성",
        "적응력 / 변화수용",
    ],
} as const;

export const webDevFocus = [
    { icon: Cpu, title: "Front-End", desc: "React + Vite, CSR/SSR, 상태관리(Zustand/React Query), 접근성/반응형 UI" },
    { icon: Database, title: "Data & API", desc: "RESTful 설계, Pagination/Sorting/Filtering 패턴, DTO 및 에러 응답 규약" },
    { icon: Wrench, title: "DX & 생산성", desc: "Tailwind + shadcn/ui, 재사용 가능한 컴포넌트/훅 라이브러리, 코드 스플리팅" },
    { icon: Rocket, title: "성능/품질", desc: "Lighthouse 점검, 번들 최적화, 이미지 최적화, CI/CD 품질 검사" },
] as const;

export type ProjectLink = { label: string; href: string };

export const projects = [
    {
        name: "2차 개인 프로젝트 — 설문조사 웹앱 (Form)",
        tags: ["React", "TypeScript", "Vite", "Zustand", "React Query", "Spring Boot", "PostgreSQL", "Docker", "Solo"],
        summary: "설문 생성/배포/응답/결과 시각화 풀스택 웹앱. 재사용 가능한 UI/훅, 상태 관리 일원화, 반응형 UI 구현.",
        links: [
            { label: "문서", href: "https://garrulous-erica-128.notion.site/2-Form-277c10a0c0d28076b251ef181043722e?pvs=73" },
        ] as ProjectLink[],
        role: "Full-stack(개인)",
        contributions: [
            "PostgreSQL 기준 스키마 설계: citext 확장, 모든 PK UUID, surveys/sections/questions/options/responses 등 핵심 테이블 구성",
            "React + Vite + Tailwind + shadcn/ui로 UI 컴포넌트 시스템 구축",
            "Zustand/React Query로 상태/비동기 캐싱 전략 수립",
        ],
        outcomes: [
            "코드/상태 관리 일원화로 화면 전환 및 응답 처리 단순화",
            "배포 자동화 및 환경 분리로 운영 안정성 향상",
            "OpenAI API 연동으로 설문 문항 자동 생성 기능 구현",
        ],
        web: { href: "https://www.mg03.cloud/" },
    },
    {
        name: "2차 팀 프로젝트 — Where To Go",
        tags: ["React", "TypeScript", "Vite", "Express", "REST", "MySQL","Team"],
        summary: "여행/로컬 정보 탐색 웹앱. 검색/필터/위시리스트, 카드형 리스트/모달 상세 구현.",
        links: [
            { label: "문서", href: "https://www.notion.so/2-Where-To-Go-560d7a75bb9b4731950adb53f126afc6?pvs=21" },
        ] as ProjectLink[],
        role: "Full-stack",
        contributions: [
            "검색/필터 UI 및 페이지네이션 패턴 구현",
            "컴포넌트 구조화, 상태/라우팅 설계",
            "RESTful 설계, Pagination/Sorting/Filtering 패턴 구현",
            "Kakao Maps API 연동",
            "공공 데이터 포털 API 연동",
        ],
        outcomes: [
            "카드/모달 조합으로 탐색 경험 개선",
            "사용자 흐름에 맞춘 UX 설계 경험 축적",
            "Kakao Maps API 및 공공 데이터 포털 API 연동 경험 축적"
        ],
        web: { href: null },
    },
    {
        name: "1차 팀 프로젝트 — Store_24",
        tags: ["React", "Java", "Spring Boot", "Spring Security", "MySQL", "Team"],
        summary: "편의점형 커머스 데모. 상품/장바구니/결제 UX 시나리오 및 관리자 화면 설계.",
        links: [
            { label: "문서", href: "https://www.notion.so/1-Store_24-6ad69d299319406bb3bf402e5ff5d5bb?pvs=21" },
        ] as ProjectLink[],
        role: "Full-stack",
        contributions: [
            "장바구니/결제 흐름 UI 설계", "관리자 테이블/필터 화면 제작",
            "JPA 기반 ORM 설계 및 API 구현",
            "Spring Security 기반 인증/인가 구현",
            "Toss Payments 가상 결제 연동",
        ],
        outcomes: [
            "상품/장바구니/결제 흐름에 맞춘 UX 설계 경험 축적",
            "JPA 기반 ORM 설계 및 Spring Security 이해도 향상",
            "Toss Payments 가상 결제 연동 향상",
        ],
        web: { href: null },
    },
    {
        name: "1차 개인 프로젝트 — 개인 블로그 웹앱",
        tags: ["React", "Bootstrap", "Vercel", "TypeScript", "Solo"],
        summary: "학습용 개인 웹앱. 폼 검증, 모듈식 컴포넌트, 라우팅, 코드 스플리팅 도입.",
        links: [
            { label: "문서", href: "https://www.notion.so/1-8949d279e46643acb2568a2dcd556a1c?pvs=21" },
        ] as ProjectLink[],
        role: "Full-stack(개인)",
        contributions: [
            "Vercel 배포 파이프라인 구성", "Form 검증/라우트 설계",
            "재사용 가능한 컴포넌트/훅 라이브러리 구축",
            "YouTube Data API v3 연동",
        ],
        outcomes: ["모듈식 컴포넌트 설계 경험 축적"],
        web: { href: "https://blog-gamma-ashy-41.vercel.app/" },
    },
] as const;

export const experiences = [
    {
        role: "프롬프트AI & Open API & 공공데이터를 활용한 웹/앱 개발자 양성 과정",
        period: "2024.03 ~ 2024.09",
        desc: "웹 개발 스터디 및 팀 프로젝트 진행, 코드 리뷰/깃 브랜치 전략 경험",
        icon: Users,
    },
    {
        role: "한국폴리텍대학 스마트소프트웨어 하이테크 과정",
        period: "2025.03 ~ 2025.12 (예정)",
        desc: "MyBatis, Spring MVC, eGovFrame 기반 웹 개발 심화 학습",
        icon: Briefcase,
    },
] as const;

export const howIWork = [
    "목표 달성도 중요하지만 과정에서 재미와 의미를 찾습니다.",
    "회사와 사용자 모두에게 긍정적 임팩트를 만드는 일을 선호합니다.",
    "문제가 생기면 상황 안에서 앞으로 나아갈 대안을 즉시 모색합니다.",
    "함께 정한 기한을 지키려고 노력합니다.",
    "Git Flow 기반 협업과 코드리뷰에 익숙하며, PR 설명/테스트 로그/이슈 링크로 문서화를 습관화합니다.",
] as const;

export const motto = {
    icon: Lightbulb,
    lines: ["문제의 본질을 정의하고, 작게 쪼개서 빠르게 검증합니다.", "사용자 경험과 개발자 경험을 동시에 개선합니다."],
} as const;
