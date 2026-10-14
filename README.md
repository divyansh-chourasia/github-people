# GitHub people

A React page that looks up a GitHub user and charts their public repos. A running copy is at https://github-people.netlify.app/

Sign-in is Firebase, already configured in `src/firebase.js`. `/` is the sign-in form. Email and password call `signInWithEmailAndPassword`. The Google button, and the Apple button, both open a Google popup. `/signup` creates an email account and then returns to `/`. Forgot password is text, with no handler. The GitHub, Twitter, LinkedIn, and Discord icons on the sign-in page are not links.

`/home` is the dashboard. The guard sends you to `/` once Firebase’s listener sets the user to null. The context starts as `{}`, so that redirect waits for the listener.

The left column lists Dashboard, Transaction, Schedule, Users, Settings, Help, and Contact us. Those rows are not links. The main area greets you with the Firebase email and shows how many GitHub requests are left, out of 60. The search box loads a username. On first load the page fetches `john-smilga`. An unknown name shows “there is no user with that username”. At zero requests left, the search button hides and the page says the hourly limit is used up.

Under the search, four counts come from the user: public repos, followers, following, and gists. The charts are FusionCharts, built from the user’s repos (up to 100): a column of the most starred repos, a doughnut of stars per language, and a bar of the most forked. Log out returns to `/`.

## Run

```bash
npm install
npm start
```

The dev server opens http://localhost:3000.
