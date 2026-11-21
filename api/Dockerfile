FROM node:22-alpine
WORKDIR /app
RUN npm init -y > /dev/null && npm install axios@1 --omit=dev
COPY netlify/functions/fetchContributions.js ./fetchContributions.js
COPY api/server.cjs ./server.cjs
ENV NODE_ENV=production
USER node
EXPOSE 3000
CMD ["node", "server.cjs"]
