import type { CaseStudyData } from "@/components/ProjectCaseStudy";

export const blogCaseStudyData: CaseStudyData = {
    title: "1차 개인 프로젝트 — 블로그 웹앱",
    subtitle: "일기장처럼 사용할 수 있는 개인 블로그",
    summary:
        "게시판 CRUD, 소셜 로그인(OAuth), 댓글/좋아요/검색, YouTube 기반 뮤직 플레이어까지 포함한 학습용 풀스택 프로젝트.",
    role: "Full‑stack (개인)",
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
        { src: "/images/blog/erd.png", caption: "ERD" },
        { src: "/images/blog/cover.png", caption: "메인 페이지" },
        { src: "/images/blog/detail.png", caption: "게시글 상세" },
        { src: "/images/blog/mypage.png", caption: "마이페이지" },
    ],
    links: [
        { label: "website", href: "https://blog-gamma-ashy-41.vercel.app/" },
        { label: "Notion", href: "https://garrulous-erica-128.notion.site/1-Blog-8f3b1e2b1f0a4e6f92e2f3c2a5e2b3d4" },
        { label: "GitHub Front", href: "https://github.com/KRMGJ/Blog_Front" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/Blog_Back" },
    ],
};

export const formCaseStudyData: CaseStudyData = {
    title: "2차 개인 프로젝트 — 설문조사 웹앱 (Form)",
    subtitle: "설문 생성/배포, 응답 관리, 결과 시각화",
    summary:
        "설문 작성·배포(도메인/비밀번호/기간/응답 제한), 응답 세션 추적, 실시간 통계와 AI 요약/인사이트 제공. FE는 React + Zustand/React Query, BE는 Spring Boot, DB는 PostgreSQL(UUID, citext) 기반.",
    role: "Full‑stack (개인)",
    period: "2025‑08‑29 ~ 2025‑09‑23",
    members: "1명",
    tags: ["React", "TypeScript", "Vite", "Zustand", "React Query", "TailwindCSS", "shadcn/ui", "Spring Boot", "PostgreSQL", "Docker", "OpenAI API"],
    features: [
        { title: "설문 작성 & 관리", items: ["제목/설명/카테고리/상태", "섹션 그룹화/순서", "문항 타입(단답/서술/객관식/체크박스/날짜/평점)"] },
        { title: "배포 & 제어", items: ["로그인 필요, 1인 1회", "도메인/비밀번호/기간/응답수 제한", "게이트(약관 동의/나이 확인)"] },
        { title: "응답 수집", items: ["세션 추적(시작/제출, 채널/디바이스)", "답변 저장(텍스트/숫자/날짜/JSON)", "운영자 메모/핀"] },
        { title: "통계 & 분석", items: ["실시간 통계(조회/응답/소요시간)", "AI 요약/인사이트", "스냅샷(JSON) 기반 후처리"] },
    ],
    outcomes: ["코드/상태 관리 단순화", "배포 자동화 & 환경 분리", "OpenAI 설문 문항 생성"],
    screenshots: [
        { src: "/images/form/home.png", caption: "랜딩/추천 설문" },
        { src: "/images/form/create.png", caption: "설문 생성" },
        { src: "/images/form/analytics.png", caption: "통계/분석" },
        { src: "/images/form/response-detail.png", caption: "응답 상세" },
    ],
    links: [
        { label: "website", href: "https://www.mg03.cloud/" },
        { label: "Notion", href: "https://garrulous-erica-128.notion.site/2-Form-277c10a0c0d28076b251ef181043722e" },
        { label: "GitHub Front", href: "https://github.com/KRMGJ/Form-F" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/Form-B" },
    ],
};

export const storeCaseStudyData: CaseStudyData = {
    title: "1차 팀 프로젝트 — Store_24",
    subtitle: "편의점형 커머스: 상품/장바구니/결제, 주문조회, 리뷰",
    summary:
        "소상공인 대상 전자상거래 데모. 상품 목록/상세/리뷰, 장바구니·주문/결제(다양한 결제수단), 주문조회/상태 추적, 검색·정렬을 구현.",
    role: "Full-stack (팀, 담당: 마이페이지·고객센터 제외 전반)",
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
    outcomes: ["REST API·CRUD·DTO 구조 이해", "주문/결제 흐름 UX 설계 경험", "OAuth/주소검색/결제 연동 경험"],
    screenshots: [
        { src: "/images/store/cart.png", caption: "장바구니" },
        { src: "/images/store/orders.png", caption: "주문 목록/상세 액션" },
        { src: "/images/store/list.png", caption: "상품 목록·카테고리·검색" },
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
    role: "Full-stack (팀, 담당: 회원가입/로그인, 마이페이지, 고객센터, 공지사항, 길찾기 제외 전체)",
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
    outcomes: [
        "UI/UX 디자인 중심으로 사용자 경험을 더 깊이 이해",
    ],
    screenshots: [
        { src: "/images/wtg/home.png", caption: "메인 대시보드" },
        { src: "/images/wtg/festival-list.png", caption: "축제 목록" },
        { src: "/images/wtg/festival-detail.png", caption: "축제 상세" },
        { src: "/images/wtg/group-detail.png", caption: "모임 상세" },
        { src: "/images/wtg/gallery.png", caption: "사진첩" },
        { src: "/images/wtg/chat.png", caption: "채팅방" },
        { src: "/images/wtg/alert.png", caption: "채팅 알림" },
        { src: "/images/wtg/admin.png", caption: "회원 관리 (관리자)" },
    ],
    links: [
        { label: "GitHub Front", href: "https://github.com/KRMGJ/WhereToGo_F" },
        { label: "GitHub Back", href: "https://github.com/KRMGJ/WhereToGo_B" },
    ],
};