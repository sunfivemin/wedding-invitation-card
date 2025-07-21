# 💒 Wedding Invitation Card

Next.js로 만든 아름다운 디지털 청첩장입니다. 부드러운 애니메이션과 감성적인 디자인으로 특별한 순간을 더욱 특별하게 만들어드립니다.

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [사용법](#사용법)
- [기여하기](#기여하기)
- [라이선스](#라이선스)

---

## 🎯 프로젝트 소개

이 프로젝트는 Next.js 14와 React 18을 사용해서 만든 모던한 디지털 청첩장입니다. 신랑/신부의 소중한 순간을 아름답게 표현하고, 손님들이 쉽게 정보를 확인할 수 있도록 디자인했습니다.

### ✨ 특징

- 🎨 **감성적인 디자인**: 로맨틱하고 세련된 UI/UX
- 📱 **모든 기기 지원**: 모바일, 태블릿, 컴퓨터에서 완벽하게 보여요
- 🎵 **배경음악**: BGM 재생 기능으로 분위기 업!
- 🌸 **부드러운 애니메이션**: 꽃잎이 날리는 등 아름다운 효과
- 🗺️ **지도 연동**: 카카오맵으로 쉽게 위치 확인
- 📞 **연락처 기능**: 전화, 카카오톡, 이메일로 바로 연락
- 🔗 **공유 기능**: SNS나 메신저로 쉽게 공유
- ⚡ **빠른 로딩**: Next.js의 최적화로 빠르게 열려요

---

## 🚀 주요 기능

### 청첩장 기능
- **신랑/신부 정보**: 이름, 사진, 소개
- **결혼식 정보**: 날짜, 시간, 장소
- **지도 연동**: 카카오맵으로 정확한 위치 안내
- **연락처 정보**: 전화, 카카오톡, 이메일
- **공유 기능**: URL 복사, SNS 공유
- **배경음악**: BGM 재생/정지 기능
- **반응형 디자인**: 모든 기기에서 완벽한 화면

---

## 🛠 사용한 기술

### Frontend
- **Next.js 14.1.1** - React 프레임워크
- **React 18** - 사용자 인터페이스 라이브러리
- **SCSS/Sass** - CSS 전처리기
- **CSS Modules** - 스타일 모듈화

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Git** - 버전 관리

### 폰트
- **Pretendard** - 메인 폰트 (다양한 굵기 지원)
- **Parisienne** - 장식용 폰트
- **RIDIBatang** - 한글 폰트

---

## 📁 프로젝트 구조

```
wedding-invitation-card/
├── mcc/                          # Next.js 프로젝트 폴더
│   ├── public/                   # 정적 파일들
│   │   ├── fonts/               # 폰트 파일들
│   │   ├── img/                 # 이미지 파일들
│   │   └── sounds/              # 음악 파일들
│   ├── src/
│   │   ├── app/                 # 페이지들
│   │   │   ├── wedding/         # 청첩장 페이지들
│   │   │   │   ├── components/  # 청첩장 컴포넌트들
│   │   │   │   ├── page.js      # 메인 청첩장 페이지
│   │   │   │   ├── wedding-01/  # 청첩장 스타일 1
│   │   │   │   └── wedding-02/  # 청첩장 스타일 2
│   │   │   └── styles/          # 스타일 파일들
│   │   └── components/          # 공통 컴포넌트들
│   ├── package.json
│   └── next.config.mjs
└── README.md
```

---

## 🚀 시작하기

### 필요한 것들
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치하고 실행하기

1. **프로젝트 다운로드**
   ```bash
   git clone https://github.com/your-username/wedding-invitation-card.git
   cd wedding-invitation-card/mcc
   ```

2. **필요한 패키지 설치**
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 배포용으로 빌드하기

```bash
# 배포용 빌드
npm run build

# 배포용 서버 실행
npm run start
```

---

## 📖 사용법

### 1. 메인 페이지
- 청첩장 템플릿들을 확인할 수 있어요
- 각 스타일을 클릭하면 해당 청첩장으로 이동합니다

### 2. 청첩장 기능
- 신랑/신부 정보 확인
  <img width="430" height="730" alt="스크린샷 2025-07-21 오전 10 27 24" src="https://github.com/user-attachments/assets/ef396f4e-b5f0-45e4-9965-4ade51545d0d" />
- 결혼식 날짜와 장소 확인
  <img width="420" height="779" alt="스크린샷 2025-07-21 오전 10 28 25" src="https://github.com/user-attachments/assets/e8ce88d1-aa31-4d96-be44-674e9c4f06e8" />

- 지도로 정확한 위치 확인
  <img width="429" height="725" alt="스크린샷 2025-07-21 오전 10 28 51" src="https://github.com/user-attachments/assets/f9b32a77-9dbb-4369-89d9-0e3b8d347ee2" />

- 연락처로 바로 연락
  <img width="431" height="859" alt="스크린샷 2025-07-21 오전 10 29 44" src="https://github.com/user-attachments/assets/85db64d1-309a-460c-8e8d-4defa400746b" />

- SNS나 메신저로 공유
<img width="426" height="971" alt="스크린샷 2025-07-21 오전 10 30 01" src="https://github.com/user-attachments/assets/bed2077c-c89f-4701-81e3-1e8dd2133852" />

---

## 🤝 함께 만들어가기

1. 이 저장소를 Fork하세요
2. 새로운 브랜치를 만드세요 (`git checkout -b feature/새로운기능`)
3. 변경사항을 저장하세요 (`git commit -m '새로운 기능 추가'`)
4. 브랜치에 올리세요 (`git push origin feature/새로운기능`)
5. Pull Request를 보내세요

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인해주세요.

## 📞 문의사항

프로젝트에 대한 질문이나 버그가 있으시면 이슈를 만들어주세요.

---

*이 프로젝트는 개인 학습과 포트폴리오 목적으로 만들었습니다.*
