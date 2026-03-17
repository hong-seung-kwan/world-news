# 📰 World News

React + TypeScript로 제작한 뉴스 웹 사이트입니다.  
외부 뉴스 API를 통해 실시간 데이터를 불러오고, 성능 최적화 및 SEO 개선을 적용한 프로젝트입니다.

배포 주소: https://world-news-lyart.vercel.app/

---

## 프로젝트 소개

- 글로벌 뉴스 API 연동
- 카테고리별 뉴스 필터링 기능
- 메인 이미지 로딩 최적화 (LCP 개선)
- SEO 기본 설정 적용 (meta description, robots.txt)
- Lighthouse 점수 개선 경험

---

## 🛠 사용 기술

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- 외부 News API

---

## ⚡ 성능 최적화 작업

Lighthouse 점수 개선을 목표로 다음과 같은 작업을 진행했습니다.

- 메인 이미지에 `fetchPriority="high"` 적용
- `React.memo` 적용으로 불필요한 리렌더링 최소화
- 외부 이미지 오류 대비 fallback 이미지 처리
- production build 기준 Lighthouse 측정
