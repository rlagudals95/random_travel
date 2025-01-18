# 베이스 이미지
FROM node:18-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# 빌드 스테이지
FROM base AS builder
# package.json과 pnpm-lock.yaml 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 복사 및 빌드
COPY . .
RUN pnpm run build

# 실행 스테이지
FROM base
WORKDIR /app

# 프로덕션에 필요한 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

EXPOSE 80
CMD ["pnpm", "start"]