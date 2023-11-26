# 使用官方的 Node.js 映像作為基礎
FROM node:18.17.0

# 設置工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製構建好的 .next 目錄
COPY .next ./.next

COPY .env ./

# 複製其他必要的文件，例如 public 目錄、next.config.js 等
# 根據您的應用需求添加
COPY public ./public
COPY next.config.js ./

# 開放容器內部的 3000 端口
EXPOSE 3000

# 定義容器啟動後執行的命令
CMD ["npm", "start"]
