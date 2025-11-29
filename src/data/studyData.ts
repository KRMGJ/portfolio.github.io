import type { CaseStudyData } from "@/components/ProjectCaseStudy";

export const blogCaseStudyData: CaseStudyData = {
    title: "1차 개인 프로젝트 — 블로그 웹앱",
    subtitle: "일기장처럼 사용할 수 있는 개인 블로그",
    summary:
        "게시판 CRUD, 소셜 로그인(OAuth), 댓글/좋아요/검색, YouTube 기반 뮤직 플레이어까지 포함한 학습용 풀스택 프로젝트.",
    role: "Full‑Stack (개인)",
    period: "2024‑05‑10 ~ 2024‑05‑31",
    members: "1명",
    tags: ["React", "TypeScript", "Spring Boot", "MySQL", "REST API", "OAuth", "YouTube API"],
    features: [
        { title: "회원", items: ["회원가입/로그인/로그아웃", "메일 인증, 비밀번호 찾기", "마이페이지, 내 글 보기"] },
        { title: "게시판", items: ["게시글 CRUD", "좋아요, TOP3 인기 게시글", "댓글 작성"] },
        { title: "검색", items: ["제목/내용 검색"] },
        { title: "뮤직 플레이어", items: ["YouTube 링크 음악추가", "랜덤/반복 재생, 볼륨 조절"] },
    ],
    architecture: {
        environment: "Windows 10",
        stack: "React, TypeScript, Spring Boot, MySQL, REST API, Gradle",
        api: "Google/Naver/Kakao OAuth, YouTube Data API v3",
    },
    outcomes: ["소셜 로그인, REST 통신 이해", "CRUD/검색/WebSocket 경험", "React + Spring Boot 풀스택 학습"],
    screenshots: [
        { src: "/images/blog/erd.webp", caption: "ERD" },
        { src: "/images/blog/cover.webp", caption: "메인 페이지" },
        { src: "/images/blog/detail.webp", caption: "게시글 상세" },
        { src: "/images/blog/mypage.webp", caption: "마이페이지" },
    ],
    links: [
        { label: "website", href: "https://blog-gamma-ashy-41.vercel.app/" },
        { label: "GitHub Front", href: "https://github.com/KRMGJ/Blog_Front" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/Blog_Back" },
    ],
};

export const formCaseStudyData: CaseStudyData = {
    title: "2차 개인 프로젝트 — 설문조사 웹앱 (Form)",
    subtitle: "설문 생성/배포, 응답 관리, 결과 시각화",
    summary:
        "설문 작성·배포(도메인/비밀번호/기간/응답 제한), 응답 세션 추적, 실시간 통계와 AI 요약/인사이트 제공. FE는 React + Zustand/React Query, BE는 Spring Boot, DB는 PostgreSQL(UUID, citext) 기반.",
    role: "Full‑Stack (개인)",
    period: "2025‑08‑29 ~ 2025‑09‑23",
    members: "1명",
    tags: ["React", "TypeScript", "Vite", "Zustand", "React Query", "TailwindCSS", "shadcn/ui", "Spring Boot", "PostgreSQL", "Docker", "OpenAI API"],
    features: [
        { title: "설문 작성 & 관리", items: ["제목/설명/카테고리/상태", "섹션 그룹화/순서", "문항 타입(단답/서술/객관식/체크박스/날짜/평점)"] },
        { title: "배포 & 제어", items: ["로그인 필요, 1인 1회", "도메인/비밀번호/기간/응답수 제한", "게이트(약관 동의/나이 확인)"] },
        { title: "응답 수집", items: ["세션 추적(시작/제출, 채널/디바이스)", "답변 저장(텍스트/숫자/날짜/JSON)", "운영자 메모/핀"] },
        { title: "통계 & 분석", items: ["실시간 통계(조회/응답/소요시간)", "AI 요약/인사이트", "스냅샷(JSON) 기반 후처리"] },
    ],
    architecture: {
        environment: "Windows 10, Docker",
        stack: "React, TypeScript, Vite, Zustand, React Query, TailwindCSS, Spring Boot, PostgreSQL",
        api: "OpenAI API (gpt-3.5-turbo)",
    },
    outcomes: ["코드/상태 관리 단순화", "배포 자동화 & 환경 분리", "OpenAI 설문 문항 생성"],
    screenshots: [
        { src: "/images/form/erd.webp", caption: "ERD" },
        { src: "/images/form/home.webp", caption: "랜딩/추천 설문" },
        { src: "/images/form/create.webp", caption: "설문 생성" },
        { src: "/images/form/analytics.webp", caption: "통계/분석" },
        { src: "/images/form/response-detail.webp", caption: "응답 상세" },
    ],
    links: [
        { label: "website", href: "https://www.mg03.cloud/" },
        { label: "GitHub Front", href: "https://github.com/KRMGJ/Form-F" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/Form-B" },
    ],
};

export const storeCaseStudyData: CaseStudyData = {
    title: "1차 팀 프로젝트 — Store_24",
    subtitle: "편의점형 커머스: 상품/장바구니/결제, 주문조회, 리뷰",
    summary:
        "소상공인 대상 전자상거래 데모. 상품 목록/상세/리뷰, 장바구니·주문/결제(다양한 결제수단), 주문조회/상태 추적, 검색·정렬을 구현.",
    role: "Full-Stack (팀, 담당: 회원(정보 조회/수정), 상품 등록·수정·삭제, 결제 모듈, 장바구니, 검색·정렬)",
    period: "2024-06-13 ~ 2024-06-28",
    members: "4명",
    tags: ["React", "TypeScript", "Spring Boot", "MySQL", "REST API", "Gradle", "OAuth", "Daum 주소검색", "Toss Pay"],
    features: [
        { title: "회원", items: ["회원가입/로그인/로그아웃", "메일 인증, 비밀번호 찾기", "마이페이지(정보 조회/수정)"], },
        { title: "상품", items: ["상품 등록/수정/삭제(관리)", "목록/상세/구매, 리뷰", "장바구니 수량/삭제/총액"], },
        { title: "결제", items: ["배송지 도로명 주소 검색, 연락처 입력", "신용카드·네이버페이·카카오페이·토스·페이코·계좌이체"], },
        { title: "주문 조회", items: ["주문 내역 목록/상세", "배송 상태 추적, 재구매/리뷰/문의 액션"], },
        { title: "검색/정렬", items: ["상품명/카테고리 검색", "가격/이름 정렬"], },
    ],
    architecture: {
        environment: "Windows 10",
        stack: "React, TypeScript, Spring Boot, MySQL, REST API, Gradle",
        api: "daum 주소검색 API, Toss Payments API",
    },
    outcomes: ["REST API·CRUD·DTO 구조 이해", "주문/결제 흐름 UX 설계 경험", "OAuth/주소검색/결제 연동 경험"],
    screenshots: [
        { src: "/images/store/erd.webp", caption: "ERD" },
        { src: "/images/store/cart.webp", caption: "장바구니" },
        { src: "/images/store/orders.webp", caption: "주문 목록/상세 액션" },
        { src: "/images/store/list.webp", caption: "상품 목록·카테고리·검색" },
    ],
    links: [
        { label: "GitHub Front", href: "https://github.com/KRMGJ/store24H-front" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/store24H-back" },
    ],
};

export const whereToGoCaseStudyData: CaseStudyData = {
    title: "2차 팀 프로젝트 — Where To Go",
    subtitle: "여행/로컬 정보 탐색 · 소모임 플랫폼",
    summary:
        "축제 정보와 소모임을 연결하는 커뮤니티 플랫폼. 축제/모임 등록·검색·리뷰·채팅 기능과 관리자 공지/회원 관리까지 포함.",
    role: "Full-Stack (팀, 담당: 모임 및 게시판, 축제, 관리자, 검색/필터, 채팅, 알림)",
    period: "2024-07-01 ~ 2024-08-09",
    members: "4명",
    tags: ["React", "TypeScript", "Spring Boot", "MySQL", "REST API", "Gradle", "HTML/CSS/JavaScript", "Kakao Map API", "한국관광공사 API"],
    features: [
        { title: "회원", items: ["회원가입, 메일 인증, 로그인/로그아웃", "비밀번호/아이디 찾기", "마이페이지(정보 수정)", "온도 기능"], },
        { title: "관리자", items: ["1:1 문의 응답", "공지사항 작성", "회원/모임/게시글 관리", "축제 정보 수정"], },
        { title: "모임", items: ["모임 개설, 수정, 삭제", "가입 신청 수락/거절", "모임 개설자와 1:1 채팅"], },
        { title: "게시판", items: ["게시물 등록/수정/삭제", "사진첩"], },
        { title: "검색/필터", items: ["모임 카테고리/지역 필터링", "태그 검색", "축제 지역 필터링"], },
        { title: "축제", items: ["별점 리뷰", "찜(좋아요)", "별점 Top5", "카카오맵 길찾기"], },
    ],
    architecture: {
        environment: "Windows 10",
        stack: "React, TypeScript, Spring Boot, MySQL, REST API, Gradle",
        api: "Kakao Maps API, 한국관광공사 축제 정보 API",
    },
    outcomes: [
        "UI/UX 디자인 중심으로 사용자 경험을 더 깊이 이해",
    ],
    screenshots: [
        { src: "/images/wtg/erd.webp", caption: "ERD" },
        { src: "/images/wtg/home.webp", caption: "메인 대시보드" },
        { src: "/images/wtg/festival-list.webp", caption: "축제 목록" },
        { src: "/images/wtg/festival-detail.webp", caption: "축제 상세" },
        { src: "/images/wtg/group-detail.webp", caption: "모임 상세" },
        { src: "/images/wtg/gallery.webp", caption: "사진첩" },
        { src: "/images/wtg/chat.webp", caption: "채팅방" },
        { src: "/images/wtg/alert.webp", caption: "채팅 알림" },
        { src: "/images/wtg/admin.webp", caption: "회원 관리 (관리자)" },
    ],
    links: [
        { label: "GitHub Front", href: "https://github.com/KRMGJ/WhereToGo_F" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/WhereToGo_B" },
    ],
};

export const youtubeCaseStudyData: CaseStudyData = {
    title: "YouTube Music (Spring MVC & Oracle)",
    subtitle: "YouTube Data API 기반의 레거시 웹서비스 구현",
    summary:
        "Spring Boot가 아닌 순수 Spring MVC + JSP + MyBatis + Oracle 환경에서 구축한 레거시 아키텍처 프로젝트. YouTube Data API를 통해 영상, 채널, 댓글, 플레이리스트 정보를 가져오며, JSP 기반으로 검색/정렬/플레이리스트 관리 UI를 구성.",
    role: "Full-Stack (개인)",
    period: "2025-09-26 ~ 2025-10-10",
    tags: ["Spring MVC", "JSP", "Oracle", "MyBatis", "YouTube API", "OAuth2", "Bootstrap"],
    features: [
        {
            title: "핵심 기능",
            items: [
                "YouTube Data API 연동 (영상/채널/댓글/플레이리스트)",
                "Oracle 기반 DB 스키마 및 시퀀스 설계",
                "AJAX 비동기 검색 및 더보기 UI 구현",
                "조회수순, 최신순, 길이순 정렬 기능",
                "OAuth2 로그인 및 사용자별 플레이리스트 관리"
            ],
        },
        {
            title: "백엔드 설계",
            items: [
                "Controller-Service-DAO 3계층 구조로 분리",
                "MyBatis XML Mapper 기반 쿼리 관리 및 동적 조건 처리",
                "Oracle 트랜잭션 관리 및 제약조건 설계",
                "예외처리 및 API Quota 초과 대응 로직 구현"
            ],
        },
    ],
    architecture: {
        environment: "Spring MVC + JSP + Oracle + MyBatis",
        stack: "Java 11, Servlet, JSP, JSTL, Bootstrap, jQuery",
        api: "YouTube Data API v3 (search, playlist, comment, channel)"
    },
    outcomes: [
        "Boot 환경 없이 완전한 Spring MVC 구조 실현",
        "YouTube API를 통한 실시간 데이터 처리 성공",
        "JSP 기반에서도 현대적 UX 구현 가능성을 검증"
    ],
    screenshots: [
        { src: "/images/youtube/erd.webp", caption: "ERD" },
        { src: "/images/youtube/main.webp", caption: "메인 화면" },
        { src: "/images/youtube/search.webp", caption: "검색 결과 페이지" },
        { src: "/images/youtube/playlist.webp", caption: "플레이리스트 목록" },
        { src: "/images/youtube/playlist-detail.webp", caption: "플레이리스트 상세" },
        { src: "/images/youtube/detail.webp", caption: "영상 상세 페이지" }
    ],
    links: [
        { label: "GitHub", href: "https://github.com/KRMGJ/Music" }
    ]
};

export const fundingCaseStudyData: CaseStudyData = {
    title: "3차 팀 프로젝트 — Crowd Funding Platform",
    subtitle: "크리에이터 등록 → 프로젝트 생성 → 후원/정산까지의 전주기 플랫폼",
    summary:
        "Oracle 11g + MyBatis 기반의 크라우드 펀딩 서비스. 크리에이터 등록, 프로젝트 생성·승인, 후원/결제 흐름, 정산 스케줄러, 알림(SSE), 관리자 대시보드까지 핵심 도메인을 수직 통합. FE는 React + TypeScript + shadcn/ui, BE는 Spring Boot 3.x.",
    role: "PM & Full-Stack(요건 설계, DB/백엔드/프론트 총괄)",
    period: "2025-09-01 ~ 2025-10-25",
    members: "3명",
    tags: [
        "React", "TypeScript", "Vite", "TailwindCSS", "shadcn/ui",
        "Spring Boot", "Java 21", "Oracle 19c", "MyBatis",
        "REST API", "JWT", "SSE"
    ],
    features: [
        {
            title: "크리에이터/회원",
            items: [
                "크리에이터 등록(서류 업로드, 검수/승인)",
                "팔로우/언팔로우, 크리에이터 페이지",
                "프로젝트 별 후원자 수 집계, 배송 상태 관리"
            ]
        },
        {
            title: "프로젝트",
            items: [
                "프로젝트 생성 마법사(카테고리/목표금액/기간/썸네일)",
                "관리자 승인 워크플로우",
                "프로젝트 상세(진행률, 남은일, 후원자 수, 조회/좋아요)"
            ]
        },
        {
            title: "후원/결제",
            items: [
                "리워드 구성(옵션/재고/가격)",
                "후원 생성(추가후원금, 배송정보)·취소",
                "결제 플로우 모사 및 상태 전이(BE 트랜잭션 관리)"
            ]
        },
        {
            title: "정산/스케줄러",
            items: [
                "일일 배치: WAITING→PAID 정산 처리",
                "지표 테이블 집계(매출/성공률/카테고리별 통계)",
                "관리자 정산 요약 페이지"
            ]
        },
        {
            title: "알림/운영",
            items: [
                "SSE 알림 허브(BACKING_SUCCESS, SHIPPING_SENT 등)",
                "관리자 공지·신고/문의 응대",
                "로그/예외 처리, 감사 추적 필드(createdAt/updatedAt)"
            ]
        },
        {
            title: "프론트 UX",
            items: [
                "목록(정렬/필터)·무한스크롤",
                "카드/차트 컴포넌트, 반응형 UI",
                "에디터(프로젝트 소개), 토스트/로딩 스피너"
            ]
        }
    ],
    architecture: {
        environment: "Windows 10",
        stack: "React, TypeScript, Vite, TailwindCSS, shadcn/ui, Spring Boot 3.x, Oracle 19c, MyBatis",
        api: "REST API(JWT 인증), SSE 알림, Object Storage(파일 업로드)"
    },
    outcomes: [
        "팀 개발 프로세스 정립: 요구분석→스키마→API 스펙→FE 통합",
        "도메인 모델·트랜잭션 경계 확립으로 ORA 오류 감소",
        "정산/알림/통계 등 운영 관점 기능 완성도로 실서비스 수준 검증"
    ],
    screenshots: [
        { src: "/images/funding/erd.webp", caption: "ERD" },
        { src: "/images/funding/home.webp", caption: "메인" },
        { src: "/images/funding/detail.webp", caption: "프로젝트 상세" },
        { src: "/images/funding/backing.webp", caption: "후원 플로우" },
        { src: "/images/funding/creator.webp", caption: "크리에이터 페이지" },
        { src: "/images/funding/admin-dashboard.webp", caption: "관리자 대시보드" },
        { src: "/images/funding/settlement.webp", caption: "정산 페이지" }
    ],
    links: [
        { label: "GitHub Front", href: "https://github.com/KRMGJ/Funding-F" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/Funding-B" }
    ]
};

export const attendanceCaseStudyData: CaseStudyData = {
    title: "eGovFrame 기반 근태 관리 시스템",
    subtitle: "출퇴근·휴가/연차·리포트를 통합한 사내 근태 관리",
    summary:
        "eGovFrame + Spring MVC 환경에서 근태/휴가/연차 도메인을 재설계한 프로젝트. 출퇴근 기록, 휴가/연차 신청·승인, 연차 자동지급 스케줄러, 부서별 월간 리포트·CSV 다운로드, 권한 기반 관리자 화면까지 포함한 레거시 근태 시스템 모던화 작업.",
    role: "Full-Stack (개인)",
    period: "2025-10-01 ~ 2025-12-31 (예정)",
    members: "1명",
    tags: [
        "eGovFrame",
        "Spring MVC",
        "Spring Security",
        "Spring Session JDBC",
        "JSP",
        "Oracle",
        "MyBatis",
        "JPA",
        "Legacy Modernization"
    ],
    features: [
        {
            title: "출퇴근 관리",
            items: [
                "출근/퇴근 기록, 지각·조퇴·결근 판정",
                "하루/주간/월간 근태 현황 조회",
                "직원별 최근 근태 요약 위젯(대시보드)"
            ]
        },
        {
            title: "휴가/연차 관리",
            items: [
                "휴가/연차 신청·승인(관리자 워크플로우)",
                "연차 잔여일수 조회 및 연차 사용 이력",
                "입사일·근속연수 기반 연차 자동지급 스케줄러",
                "연차 지급/차감 로그(leave_grant_log) 관리"
            ]
        },
        {
            title: "관리자 기능",
            items: [
                "직원 등록/수정/퇴사 처리 및 계정 비활성화",
                "역할·권한 부여 및 사용 권한 관리",
                "부서별 근태/휴가 요약 대시보드"
            ]
        },
        {
            title: "리포트 & CSV",
            items: [
                "부서별 월간 근태·야근·휴가 집계 리포트",
                "월별 리포트 CSV 다운로드(한글 파일명 처리)",
                "운영을 위한 검색/필터·페이지네이션 UI"
            ]
        },
        {
            title: "보안 & 세션",
            items: [
                "Spring Security 기반 로그인/인가 처리",
                "Spring Session JDBC로 DB 세션 관리",
                "생성/수정 시간, 작성자 추적 필드로 감사 로그 강화"
            ]
        }
    ],
    architecture: {
        environment: "Windows 10, eGovFrame, Tomcat, Oracle",
        stack: "eGovFrame, Spring MVC, Spring Security, Spring Session JDBC, MyBatis, JPA, JSP, JSTL, Oracle",
        api: "내부 MVC 컨트롤러, CSV 다운로드 엔드포인트"
    },
    outcomes: [
        "레거시 eGovFrame 기반 근태 시스템을 분석하고 모듈 단위로 모던화하는 경험 축적",
        "근태/휴가/연차 비즈니스 규칙을 서비스 계층에서 모델링하여 유지보수성을 확보",
        "Oracle·MyBatis·JPA를 병행 사용하면서 데이터 접근 계층 설계 역량 강화",
        "운영 관점의 리포트·CSV 다운로드·권한 관리 등 실무 요구사항을 고려한 설계 경험"
    ],
    screenshots: [
        { src: "/images/attendance/dashboard.webp", caption: "메인 대시보드" },
        { src: "/images/attendance/employee-list.webp", caption: "직원 목록" },
        { src: "/images/attendance/employee-join.webp", caption: "직원 등록" },
        { src: "/images/attendance/attendance-my.webp", caption: "나의 출퇴근 현황" },
        { src: "/images/attendance/attendance-list.webp", caption: "출퇴근 내역 (관리자)" },
        { src: "/images/attendance/leave-request.webp", caption: "휴가 신청/승인 (관리자)" },
        { src: "/images/attendance/monthly-report.webp", caption: "부서별 월간 리포트" },
        { src: "/images/attendance/admin-users.webp", caption: "직원/권한 관리 (관리자)" }
    ],
    links: [
        { label: "GitHub", href: "https://github.com/KRMGJ/Attendance" }
    ]
};

