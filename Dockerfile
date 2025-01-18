# 실행 스테이지만 필요 (빌드는 GitHub Actions에서 수행)
FROM node:18-alpine
RUN npm install -g pnpm
WORKDIR /app

# 빌드된 결과물과 필요한 파일들 복사
COPY .next ./.next
COPY public ./public
COPY package.json pnpm-lock.yaml ./

# 프로덕션 의존성만 설치
RUN pnpm install --prod --frozen-lockfile

# 환경 설정
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Next.js 기본 포트 3000 사용
EXPOSE 3000

CMD ["pnpm", "start"]