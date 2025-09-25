FROM node:22.0-bookworm-slim AS base

ENV HOSTNAME=0.0.0.0

RUN corepack disable && corepack enable

RUN apt-get update \
  && apt-get -qq install -y --no-install-recommends \
  tini build-essential  \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir /app && chown node:node /app

#######################################################################
FROM base AS builder

USER node

WORKDIR /app

COPY --chown=node:node package.json pnpm-lock.yaml ./

RUN NODE_ENV= pnpm install --ignore-scripts

COPY --chown=node:node next-env.d.ts next.config.ts postcss.config.cjs tailwind.config.ts ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node public ./public
COPY --chown=node:node src ./src

RUN npx next telemetry disable
RUN npx prisma generate
RUN pnpm next build

#######################################################################
FROM base AS prod

USER node

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public/
COPY --from=builder /app/.next/static ./.next/static

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "server.js"]
