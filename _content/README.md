# 홈페이지 운영 가이드 (검색·AI 인용)

이 폴더(`_content/`)는 사이트에 게시되지 않는다(Jekyll은 `_`로 시작하는 폴더를 내보내지 않음).

## 페이지 구조

- `_layouts/aply.html` — 모든 페이지 공통: `<head>`(제목·설명·canonical·OG), 헤더 메뉴, 푸터, 모달, 스크립트.
  메뉴·푸터·스크립트 버전을 바꿀 때는 이 파일만 고치면 된다. (예전 `index.html`의 역할)
- `_includes/jsonld.html` — 회사(Organization)·사이트(WebSite)·페이지(WebPage) 구조화 데이터.
- 각 페이지 파일(`main.html`=홈, `about.html`, `service.html`, `team.html`, `recruit.html`, `contact.html`,
  `board.html`, `aqr-banking-app-share.html`) — 맨 위 front matter + 본문.
  GitHub Pages가 빌드할 때 본문이 레이아웃에 들어가 **완성된 HTML**로 배포된다(자바스크립트 없이도 본문이 보임).
- 예전 주소 `/?p=about` 등은 홈에서 새 주소(`/about.html`)로 자동 이동한다.

front matter 예시:

```yaml
---
layout: aply
page_id: about            # app.js가 페이지 구분에 사용 (GA 이벤트·문의 폼 종류)
nav_name: 회사소개         # 브레드크럼 이름
schema_type: AboutPage    # 생략 시 WebPage
title: 회사소개·연혁 | 주식회사 어플라이(APLY)
description: 150자 안팎, 페이지마다 다르게. 큰따옴표(") 금지
last_modified: 2026-10-21 # 내용이 실제로 바뀐 날만 갱신 → sitemap.xml lastmod
# robots: noindex, follow # 검색 제외할 페이지만
# sitemap: false          # 사이트맵 제외할 페이지만
---
```

## 사실 정보는 한 곳씩 같이 고친다

회사 수치(설립, AQR 사용자 수, 계약 등)가 바뀌면 아래를 **함께** 고친다. 하나만 바뀌면 검색엔진·AI가 서로 다른 사실을 학습한다.

1. `about.html` 연혁 (원본)
2. `main.html` 회사 개요 표
3. `about.html` 자주 묻는 질문 — 화면 문장과 바로 아래 FAQPage JSON-LD를 **글자까지 같게**
4. `llms.txt` 주요 사실
5. `_includes/jsonld.html` (회사 설명·설립일·sameAs)

## 새 페이지·글 발행 게이트

전부 통과해야 발행:

- [ ] 이 페이지가 답하는 **질문 한 개**가 있다 (`backlog.md`에 등록)
- [ ] 첫 문단에 직답(한 문장, 수치·기준일 포함), h1 = 질문
- [ ] title·description 고유, front matter `last_modified` 정확
- [ ] 수치마다 기준일·출처, 자체 집계면 산출 방식 한 줄
- [ ] 구조화 데이터가 화면 텍스트와 일치
- [ ] 내부 링크: 홈/상위 1 + 관련 페이지 2 이상
- [ ] 이미지 alt
- [ ] 배포 후 아래 "검증" 명령으로 HTML에 본문·메타가 있는지 확인
- [ ] 사이트맵 포함 확인 → IndexNow 핑 → 서치어드바이저 수집 요청
- [ ] 데이터·허브급이면 `llms.txt` 항목 추가

## 배포 후 검증 (크롤러의 눈)

```bash
D=https://home.aply.biz
for p in / /about.html /service.html /aqr-banking-app-share.html; do
  echo "$p  title=$(curl -sL $D$p | grep -o '<title>[^<]*')  h1=$(curl -sL $D$p | grep -c '<h1')  ld=$(curl -sL $D$p | grep -c 'ld+json')"
done
curl -s $D/robots.txt | head -3
curl -s $D/sitemap.xml | grep -c '<loc>'
curl -s -o /dev/null -w '%{http_code}\n' $D/llms.txt
curl -sL $D/ | grep -oiE '<meta[^>]*robots[^>]*>'   # 비어 있어야 정상 (noindex 사고 방지)
```

## IndexNow (Bing·네이버 등에 변경 즉시 알림)

키 파일: `/9f4552f718ac8efe1e7ae5368e8e5624.txt` (지우지 말 것). 페이지를 발행·갱신하면:

```bash
curl -s -o /dev/null -w '%{http_code}\n' -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{"host":"home.aply.biz","key":"9f4552f718ac8efe1e7ae5368e8e5624","keyLocation":"https://home.aply.biz/9f4552f718ac8efe1e7ae5368e8e5624.txt","urlList":["https://home.aply.biz/","https://home.aply.biz/about.html"]}'
# 200 또는 202면 접수. 네이버는 https://searchadvisor.naver.com/indexnow 로도 같은 형식 사용 가능
```

## 계정이 필요한 등록 (담당자가 직접)

| 할 일 | 어디서 | 메모 |
|---|---|---|
| Google Search Console 도메인 속성 | search.google.com/search-console | DNS TXT 인증 권장 → sitemap.xml 제출 |
| Bing Webmaster Tools | bing.com/webmasters | GSC에서 가져오기 → ChatGPT 검색·Copilot이 Bing 색인 사용 |
| 네이버 서치어드바이저 | searchadvisor.naver.com | 소유확인(HTML 태그면 `_layouts/aply.html` `<head>`에 추가) → 사이트맵·RSS 제출 → 수집 요청 |
| GA4 속성 생성 | analytics.google.com | 현재 `UA-130136264-2`는 2023년 7월 수집 종료. `G-…` ID로 `_layouts/aply.html`의 gtag 교체 |

## 관련 문서

- `backlog.md` — 답할 질문 대기열 + 블로그 인벤토리
- `measure-log.md` — 기준선과 재측정 기록
