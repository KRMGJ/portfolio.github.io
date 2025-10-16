import { GraduationCap, Award, Users, Briefcase, Lightbulb, Mail, Phone, MapPin, Github } from "lucide-react";

export const profile = {
    name: "장민규",
    title: "웹 개발자",
    tagline: "사용자 경험을 중시하며 최신 웹 기술로 창의적인 서비스를 만드는 신입 개발자",
    location: "대전 유성구",
    email: "dur369667@gmail.com",
    phone: "+82 10-9305-6649",
    links: [
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
    { school: "배재대학교", major: "전자공학과", period: "2019.03 ~ 2024.02", icon: GraduationCap },
] as const;

export const certificates = [
    { name: "정보처리기사", year: "2025 필기 합격", issuer: "한국산업인력공단", icon: Award },
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
    // soft: [
    //     "문제 해결",
    //     "분석적 사고",
    //     "창의적 문제 해결",
    //     "기술적 의사소통",
    //     "피드백 수용/제공",
    //     "협업 / 역할 유연성",
    //     "적응력 / 변화수용",
    // ],
} as const;

export type ProjectLink = { label: string; href: string };

export const projects = [
    {
        name: "3차 팀 프로젝트 — Crowd Funding Platform (개발중)",
        tags: ["React", "TypeScript", "Spring Boot", "Oracle", "MyBatis", "REST API", "Team"],
        summary:
            "오라클 DB와 MyBatis를 활용한 크라우드 펀딩 플랫폼. 사용자 인증, 프로젝트 생성, 후원, 댓글, 관리자 기능 구현.",
        role: "Project Manager & Full-stack Developer",
        contributions: [
            "오라클 DB 및 ERD 설계",
            "MyBatis 기반 Mapper 설계",
            "프로젝트 생성/후원/댓글 기능",
            "관리자 대시보드 및 통계 기능",
        ],
        outcomes: [
            "오라클 DB 및 MyBatis 경험",
            "팀 협업 및 PM 경험",
            "복잡한 트랜잭션 처리 경험"
        ],
        web: { href: null },
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/funding" }
        ]
    },
    {
        name: "3차 개인 프로젝트 — YouTube Music",
        tags: ["Spring MVC", "JSP", "Oracle", "MyBatis", "YouTube API", "Legacy System"],
        summary:
            "YouTube API를 활용해 영상 검색과 플레이리스트 관리 기능을 구현.",
        role: "Full-Stack Developer",
        contributions: [
            "Oracle DB 및 ERD 설계",
            "Spring MVC + MyBatis 구조 설계",
            "YouTube API 연동 (영상, 댓글, 채널)",
        ],
        outcomes: [
            "Spring MVC 기반 레거시 구조 완성",
            "Oracle/MyBatis로 안정적 데이터 관리",
            "YouTube API 연동 경험 축적",
            "JSP 환경에서 현대적 UX 구현"
        ],
        web: { href: null },
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/youtube" }
        ],
    },
    {
        name: "2차 개인 프로젝트 — 설문조사 웹앱 (Form)",
        tags: ["React", "TypeScript", "Vite", "Zustand", "React Query", "Spring Boot", "PostgreSQL", "Docker", "Redis", "OpenAI"],
        summary: "설문 생성/배포, 응답 관리, 결과 시각화",
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/form" },
        ] as ProjectLink[],
        role: "Full-stack(개인)",
        contributions: [
            "PostgreSQL 스키마 설계",
            "React + Tailwind UI 시스템",
            "Zustand/React Query 상태 관리",
        ],
        outcomes: [
            "코드/상태 관리 단순화",
            "배포 자동화 & 환경 분리",
            "OpenAI 설문 문항 생성",
        ],
        web: { href: "https://www.mg03.cloud/" },
    },
    {
        name: "2차 팀 프로젝트 — Where To Go",
        tags: ["React", "TypeScript", "Vite", "Express", "REST", "MySQL", "Team"],
        summary: "여행 검색, 필터, 위시리스트, 지도 연동",
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/wtg" },
        ] as ProjectLink[],
        role: "Full-stack",
        contributions: [
            "검색/필터 UI + 페이지네이션",
            "컴포넌트 구조화 & 라우팅",
            "REST API + 정렬/필터링",
            "Kakao Maps API 연동",
            "공공 데이터 API 연동",
        ],
        outcomes: [
            "카드/모달 UX 개선",
            "사용자 흐름 중심 UX",
            "외부 API 연동 경험",
        ],
        web: { href: null },
    },
    {
        name: "1차 팀 프로젝트 — Store_24",
        tags: ["React", "Java", "Spring Boot", "Spring Security", "MySQL", "Team"],
        summary: "상품, 장바구니, 결제, 관리자 기능",
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/store" },
        ] as ProjectLink[],
        role: "Full-stack",
        contributions: [
            "장바구니/결제 UI 설계",
            "관리자 테이블/필터 화면",
            "JPA 기반 ORM + API",
            "Spring Security 인증/인가",
            "Toss Payments 결제 연동",
        ],
        outcomes: [
            "결제 흐름 UX 설계",
            "ORM & Security 이해도 향상",
            "Toss 결제 연동 경험",
        ],
        web: { href: null },
    },
    {
        name: "1차 개인 프로젝트 — 개인 블로그 웹앱",
        tags: ["React", "Bootstrap", "Vercel", "TypeScript"],
        summary: "폼 검증, 모듈 컴포넌트, 라우팅",
        links: [
            { label: "문서", href: "https://portfolio-nu-rosy-28.vercel.app/blog" },
        ] as ProjectLink[],
        role: "Full-stack(개인)",
        contributions: [
            "Vercel 배포 파이프라인",
            "폼 검증 & 라우트 설계",
            "재사용 컴포넌트/훅",
            "YouTube Data API 연동",
        ],
        outcomes: [
            "모듈식 컴포넌트 설계",
        ],
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
    "목표 달성을 최우선으로 생각하며, 문제 해결을 위한 다양한 접근 방식을 모색합니다.",
    "팀워크를 중시하며, 열린 소통과 협력을 통해 시너지를 창출합니다.",
    "함께 정한 기한을 지키고, 책임감을 가지고 맡은 바를 완수합니다.",
    "Git Flow 기반 협업과 코드리뷰에 익숙하며, PR 설명/테스트 로그/이슈 링크로 문서화를 습관화합니다.",
] as const;

export const motto = {
    icon: Lightbulb,
    lines: ["문제의 본질을 정의하고, 작게 쪼개서 빠르게 검증합니다.", "사용자 경험과 개발자 경험을 동시에 개선합니다."],
} as const;
