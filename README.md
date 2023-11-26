# Final Project Pitch

For any cheese lovers out there, do you ever get optionitis when browsing the cheese section at Moore Wilson's?

The goal of this project is to create a social media platform to celebrate all things cheese. Here we have the bones of a basic app with CRUD functionality. As it stands, a user is able to record cheeses and add a rating out of a possible 10 Goldblums, update their cheeses, and delete them from their collection. But it could be so much more that that. I propose we build the following functionality:

Authentication

- Create a registration and login page.
- Ensure that only authenticated users can perform CRUD operations.

External API

- Add search functionality using an external API (https://cheesestore.github.io/#tag-Cheese) so that users don't have to type out all the cheesy details.

Improve the UI

- Designed the user interface using Figma for a more polished and professional.

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  You may also want to start a new branch

  ```sh
  cd my-fullstack-collection
  npm i
  git checkout -b <branchname>
  npm run dev
  ```

  </details>

<details>
  <summary>More about using <code>npm</code> vs <code>npx</code></summary>

- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
</details>

---

## Requirements

### Workflow

- Use the GitHub KANBAN to assign yourself a task, post comments in the tickets to describe what needs to be done/what you are working on.
- Move the tickets along the KANBAN as you progress.
- When you're ready to commit new changes, first commit to your branch create a pull request to dev.
- At the end of each sprint, there will be a review process before committing new features to dev.

- [ ] First, decide what you would like to keep a collection of. This could be a repo for keeping track of movies, books, gifs, cars, rocks, anything you fancy, but keep it simple!
  <details style="padding-left: 2em">
    <summary>More about your collection</summary>

  **Note:** the aim is to have some simple data. If you think you might need more than one database table, or have lots of details you want to store, how could you simplify the information you're keeping track of? Leave more complex data until later in the project. For example, I want to keep track of books that I want to read, ones that I have read, and ones that I own. To start with though, let's keep track of the books themselves. My data might look like:

  | id  | title                            | author           |
  | --- | -------------------------------- | ---------------- |
  | 1   | Ready Player One                 | Ernest Cline     |
  | 2   | Throwing Rocks at the Google Bus | Douglas Rushkoff |

Our first job is getting something showing on the front end from our database. Here's a list of steps in case they are useful. You can build in any order you like though ;)

## Back end

### 2. Building the database

- [x] Design a database to store a list of your things (e.g. books)
- [x] Build the migrations and seed data

### 3. Building the API

- [x] Build an API (back end route) to get the information from your database
- [x] Test your API with Insomnia

## Front end

### 4. Setting the stage

- [x] Build a React component with static html

### 5. Building the API client

- [x] Build an API client in the front end to request the information from your routes

### 6. Querying Data

- [x] Write a query with the `useQuery` hook to fetch the collection data from the API
- [x] Display the collection data you queried in a component (you may want to create a new component for this)

### 7. Create Data

- [x] (Optional) Create a new component for your new collection item form
- [x] Mutate data with the `useMutation` hook to create a new collection item via the API

### 8. Delete Data

- [x] Mutate data with the `useMutation` hook to delete an exisiting collection item via the API (you may want to add this to your collection display component)

### 9. Update Data

- [x] (Optional) Create a new component for your update collection item form
- [x] Mutate data with the `useMutation` hook to update an exisiting collection item via the API

---
