# 빌드 스테이지
FROM node:18-alpine AS builder
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 기본 의존성 설치
RUN npm install

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 실행 스테이지
FROM node:18-alpine
WORKDIR /app

# 프로덕션에 필요한 파일만 복사
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

EXPOSE 80
CMD ["npm", "start"]