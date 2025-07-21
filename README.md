# 💒 Wedding Invitation Card

Next.js로 만든 모던한 디지털 청첩장

아름다운 애니메이션과 감성적인 디자인으로 특별한 날을 더욱 특별하게 만들어보세요.

---

## 🌟 프로젝트 소개

디지털 시대에 맞는 모던한 웹 청첩장입니다. 종이 청첩장을 대신해 스마트폰, 태블릿, 컴퓨터 어디서든 아름답게 볼 수 있어요.

### 왜 디지털 청첩장인가요?

- 📱 **간편한 공유**: 카카오톡이나 문자로 쉽게 전달
- 🌍 **친환경적**: 종이를 사용하지 않아 환경보호에 기여
- 💰 **경제적**: 인쇄비와 배송비 절약
- 🔄 **실시간 수정**: 정보 변경시 즉시 반영 가능

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🎨 **반응형 디자인** | 모든 기기에서 완벽한 화면 |
| 🎵 **배경음악** | 감성적인 BGM으로 분위기 연출 |
| 🌸 **애니메이션** | 꽃잎 날리는 효과 등 부드러운 움직임 |
| 🗺️ **지도 연동** | 카카오맵으로 정확한 위치 안내 |
| 📞 **원터치 연락** | 전화, 카톡, 문자 바로 연결 |
| 🔗 **간편 공유** | URL 복사, SNS 공유 버튼 |
| ⚡ **빠른 로딩** | Next.js 최적화로 3초 안에 로딩 |

---

## 🛠️ 기술 스택

### Core
- **Next.js 14** - 리액트 프레임워크
- **React 18** - UI 라이브러리
- **SCSS** - CSS 전처리기

### 외부 서비스
- **카카오맵 API** - 지도 서비스
- **Web Audio API** - 배경음악 재생

---

## 🚀 빠른 시작

### 1. 환경 요구사항
```bash
Node.js: 18.0.0 이상
npm: 9.0.0 이상
```

### 2. 설치 및 실행
```bash
# 1. 프로젝트 클론
git clone https://github.com/your-username/wedding-invitation-card.git

# 2. 프로젝트 폴더로 이동
cd wedding-invitation-card/mcc

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

### 3. 브라우저에서 확인
```
http://localhost:3000
```

---

## 📁 프로젝트 구조

```
mcc/
├── 📂 public/           # 정적 파일
│   ├── 🎵 sounds/      # 배경음악
│   ├── 🖼️ img/         # 이미지
│   └── 🔤 fonts/       # 폰트
├── 📂 src/
│   ├── 📂 app/         # 페이지
│   │   └── 📂 wedding/ # 청첩장 페이지
│   └── 📂 components/  # 공통 컴포넌트
└── 📄 package.json
```

---

## 📱 사용법

### 메인 페이지
- `http://localhost:3000` 접속
- 원하는 청첩장 스타일 선택
- 미리보기 확인

### 청첩장 커스터마이징
각 청첩장의 정보를 수정하려면:
```javascript
// src/app/wedding/wedding-01/page.js
const weddingInfo = {
  bride: "신부이름",
  groom: "신랑이름",
  date: "2024년 12월 25일",
  time: "오후 2시",
  venue: "그랜드 볼룸"
}
```

---

## 🎨 주요 화면

### 신랑/신부 정보 확인


### 결혼식 날짜와 장소 확인
<img width="424" height="920" alt="스크린샷 2025-07-21 오전 10 36 48" src="https://github.com/user-attachments/assets/4e52b9e5-435c-48d6-9493-403654ddaefa" />

### 지도로 정확한 위치 확인
<img width="428" height="948" alt="스크린샷 2025-07-21 오전 10 37 08" src="https://github.com/user-attachments/assets/9273cc13-ede1-48c5-a0f8-a19a7e3fa1a6" />


### 연락처로 바로 연락
<img width="425" height="899" alt="스크린샷 2025-07-21 오전 10 37 45" src="https://github.com/user-attachments/assets/62824a92-1049-4971-a7a8-34332f712585" />

### SNS나 메신저로 공유
<img width="428" height="932" alt="스크린샷 2025-07-21 오전 10 38 11" src="https://github.com/user-attachments/assets/2614eed2-5b57-470d-8364-fa2cfc489ddb" />



