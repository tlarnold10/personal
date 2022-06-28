FROM node:10.19.0

ADD node_modules /personalSite/node_modules
ADD /src /personalSite/src
ADD /public /personalSite/public
ADD /package-lock.json /personalSite
ADD /package.json /personalSite
ADD /tsconfig.json /personalSite

WORKDIR /personalSite

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]