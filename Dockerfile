# pnpm 공식 이미지 사용
FROM docker.io/pnpm:8
WORKDIR /app

# 빌드된 결과물과 필요한 파일들 복사
COPY .next ./.next
COPY public ./public
COPY package.json pnpm-lock.yaml ./

# 프로덕션 의존성만 설치
RUN pnpm install --prod --frozen-lockfile

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["pnpm", "start"]