# personal-profile-page

The goal is to create a personal profile page for both a coding demonstration and for application purposes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. copy `.env.template` to `.env` and set configuration accordingly
2. run `npm install`
3. run `npx prisma db push` to create the database

Afterwards, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## docker-compose

1. create `postgres-password.txt` in `prisma` folder and enter a password
2. run `docker-compose up` to start database

## Documentation

[UML diagrams](docs/README.md)
