# trunk-ignore(checkov/CKV_DOCKER_3)
# trunk-ignore-all(terrascan/AC_DOCKER_0047)
# trunk-ignore-all(trivy/DS002)
FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install -g next@latest && npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1