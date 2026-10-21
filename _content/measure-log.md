# 측정 기록

형식: [기준선] → [변경] → [재측정 예약] → [재측정 결과]. 재측정 결과가 채워져야 작업 완료.

## 2026-10-21 기준선 (변경 전, 운영 사이트 curl 실측)

| 항목 | 값 |
|---|---|
| 자바스크립트 없이 받은 홈 HTML의 본문 | 0자 (메뉴·푸터 링크만) |
| 서로 다른 HTML을 가진 페이지 수 | 1 (`/?p=…` 6개 주소 모두 16,696 bytes, canonical 전부 `/`) |
| 홈 `<h1>` | 0개 |
| JSON-LD | 0건 |
| robots.txt / sitemap.xml / llms.txt | 404 / 404 / 404 |
| 없는 주소 응답 | 404 + noindex (정상) |
| 애널리틱스 | UA-130136264-2 (2023년 7월 수집 종료 → 방문 데이터 없음) |
| GSC·Bing·서치어드바이저 | 미확인 (등록 후 기록) |

AI 인용 기준선 — 아래 질문을 Perplexity·ChatGPT(검색)·네이버 AI 브리핑에 던져 출처에 home.aply.biz가 뜨는지 O/X:

| 질문 | Perplexity | ChatGPT 검색 | 네이버 AI 브리핑 |
|---|---|---|---|
| 주식회사 어플라이는 어떤 회사야? | | | |
| AQR 입금요청 서비스는 어디서 만들었어? | | | |
| 어플라이 설립 연도 | | | |
| APLX 증강현실 솔루션 회사 | | | |
| 가장 많이 쓰는 뱅킹앱 2026 | | | |
| 카카오뱅크 토스 뱅킹앱 실행 점유율 | | | |
| DJI Cloud API 개발 업체 | | | |
| 어플라이 AQR 사용자 수 | | | |

## 2026-10-21 변경 (브랜치 seo/ssr-pages)

- 페이지별 완성 HTML(Jekyll 레이아웃), 페이지별 title·description·canonical·OG
- 홈 h1 + 회사 개요 표, 회사소개 FAQ(FAQPage), 서비스 ItemList, Organization·WebSite·WebPage·Breadcrumb JSON-LD
- robots.txt(AI 크롤러 허용), sitemap.xml(자동 생성), llms.txt, IndexNow 키
- 데이터 페이지 `/aqr-banking-app-share.html` 신설 (Dataset)

## 재측정 예약

- **배포일 + 14일** (오늘 배포 시 2026-11-04): 위 curl 기준선 재측정 + GSC 노출·색인 페이지 수 + AI 인용 표
- **배포일 + 28일**: GSC 검색어 Top → `backlog.md` 갱신
- **분기 1회**: 브라우징 끈 ChatGPT·Claude·Gemini에 "주식회사 어플라이가 뭐야?" (LLMO)

## 재측정 결과

(미기록)
