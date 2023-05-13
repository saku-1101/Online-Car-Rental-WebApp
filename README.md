31748 Programming on the Internet - Autumn 2023 Assignment 2

<img src="https://github.com/saku-1101/Online-Car-Rental-WebApp/blob/21584b6bce042d2a4ce6c36e53e7319847ec087c/assets/Logo-removebg.png?raw=true" width="200px">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)


# Online-Car-Rental-WebApp

This Online-Car-Rental-WebApp stands for quick and reliable online car rental for customers. Simple and highly-user-centered UI and persisted session data boost UX during the shopping.


## Deployment

The app is fully deployed on [Vercel](https://vercel.com/docs) (13/5/2023)

https://online-car-rental-web-app-wjrg.vercel.app/

(Please be mindful that it might be unavailable due to the Supabase plan issue.)

## Demo

https://github.com/saku-1101/Online-Car-Rental-WebApp/assets/74392116/a74bd858-c0d0-45c0-a210-e31eff79359c


## 🚀 Run Locally
Before you run the project locally, you must meet the prerequisites.
- Install Git CLI
- All the secrets
    - .env
    - In .env, you're required to replace DATABASE_URL screats to connect to postgreSQL on Supabase from Prisma ORM.
    - For more information, please visit [Prisma | Supabase Docs](https://supabase.com/docs/guides/integrations/prisma)

Once you got all requirements, it's time to clone the project!

```bash
  git clone https://github.com/saku-1101/Online-Car-Rental-WebApp.git
```

Go to the project directory:

```bash
  cd Online-Car-Rental-WebApp
```

Migrate the database:

```bash
  npx prisma migrate dev --name init
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Yey🎉

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features

- Customer registration
- Online Order Form with email address checker
- Customers can delete the item
- Customers can adjust the renting days
- Shopping cart can be easily moved around using the mouse
- Invalid state cannot be accepted pushing each button
- Temporal Data is stored in each session
## Tech Stack

**🌼Client:** Next.js, TypeScript, Apollo GraphQL Client, TailwindCSS, DaisyUI

**🦄Server:** Node.js, Apollo GraphQL Server, Prisma

**🐬Database:** Supabase, PostgreSQL

**🐝Deploy:** Vercel

**Others:** GraphQL codegen, Prettier, ESLint, Postman, Figma
## API Reference

I kindly ask you to refer to have a look at `./graphql/schemas/schema.ts`, which is a GraphQL shema. There're all what you need to query and mutate the data from frontend using GraphQL Client.


## Lessons Learned

- How to develop a frontend-oriented full stack application using BaaS - Supabase.
- How to use ORM - In order to avoid using SQL and more focus on data rather than SQL, I decided to use ORM. It enabled me not to write sql, besides, Prisma, which is an ORM that I used, dynamically assigned data type to the return Obj. This was a mindbrewing fit with TypeScript.
- Tailwind is just an amazing one. Looking up the documentation how to translate CSS to the way of Tailwind was only the frustration.
- The first DB scheme design is very crucial - Well design first with ER Diagram.
- Hydration issues in Next.js - It basically happens when the rendering result differs between Client side and Server side. For example, if JavaScript is executed before the component is rendered, the internal state of the component may become inaccurate. This is called a "hydration error," where there is a potential for rendering inconsistencies due to React's state on the browser being different from the state on the server. As this app has blower session storage, when I reload the page with having updated sessionStorage data from Server side default data, the hydration error came out. This was solved using the feature of `useEffect` (and `useState`). `useEffect` is used to execute side effects after the component is rendered. In this case, setHasMounted sets to true when the component is mounted.
Then, if (!hasMounted) { return null; } prevents JavaScript from executing before the component is mounted by returning null before the component is rendered. This prevents the hydration error.
In summary, by preventing JavaScript from executing before the component is rendered, the state of React on the browser matches the state on the server, thus avoiding the hydration error. 
- Using "as" for the type assertion. - To force adjusting the an obj to a type.
- How to design APIs
- Vercel - Frontend App is the way easier than deploying full stack app - especially with Vercel. It showed me a precise error and it made fixing bug quicker.
- Component Oriented, Atomic Design - They are to be obtained to boost frontend development productivity. It also serves consistency and simplicity of UI/UX.
