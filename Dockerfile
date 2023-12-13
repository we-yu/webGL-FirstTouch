FROM node:16

# アプリケーションディレクトリを設定
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションの実行c
CMD ["node", "server.js"]
