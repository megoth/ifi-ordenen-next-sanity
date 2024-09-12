# Ifi-ordenen webpage

This is the website of Hennes Majestet Keiserpingvinen den Fornemmes orden. It is
using [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io), and [Vercel](https://vercel.com).

## Setting up local development

Rename the `.env.test` file to `.env` and store the environment variables that Next and Sanity will use to pull data
from the Sanity API. You can get or create the tokens, ids, and secrets
from [manage.sanity.io](https://manage.sanity.io).

Once those env variables are ready, you can run the following commands to get Next's development server up and running:

```bash
npm install

# Run the frontend
npm run dev

# Run Sanity Studio
npm run start:sanity
```

The website will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.

## Updating webpage

To update [ordenen.ifi.uio.no](https://ordenen.ifi.uio.no/) set up a local development and do the following steps:

- Run `npm run build` after doing all change
- Push changes to Git
- Log in to a Ifi server
- Run `/projects/ifi-ordenen/update.sh`

### Note for former students (aka old people like Arne)

You might need to set up local 2FA authentication via [passord.uio.no](https://passord.uio.no/). You can then log on to
UiO servers via rlogin.uio.no, and then continue to log onto an Ifi server via login.ifi.uio.no.
