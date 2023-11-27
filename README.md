# Final Project Pitch - Havarti Your Say

The goal of this project is to create a product for subscribers of The Cheese Wheel, a local cheese subscription business based in Wellington. Check out their website here: https://thecheesewheel.co.nz/.

Here we have the bones of a basic app with CRUD functionality. As it stands, a user is able to record cheeses and add a rating, update their cheeses, and delete them from their collection. But there's room for improvement! The team at the Cheese Wheel are keen to add the following functionality:

Authentication

- Create a registration and login page.
- Ensure that only authenticated users can perform CRUD operations.

Search and Filtering

- Add search functionality using the data from The Cheese Wheel Website.

Improve the UI

- Designed the user interface using Figma for a more polished and professional look.
- Let users save their favourite cheeses and post comments/ratings

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

## Requirements

### KANBAN workflow:

- Use the GitHub KANBAN to assign yourself a task, post comments in the tickets to describe what needs to be done/what you are working on.
- Move the tickets along the KANBAN as you progress.

### Git workflow:

main -> dev -> version branch for each sprint (e.g. 'V1' for the first sprint) -> feature branches

- When you're ready to commit new changes, first commit to your feature branch and create a pull request to the current version branch (e.g. V1).
- At the end of each sprint, there will be a review process before committing new features to dev.

Make sure that:

- file and function naming conventions are maintained across the app
- errors are well handled
- no sensitive data should be exposed on the client side
- it passes npm run lint without any code-related warnings or errors
- no unnecessary comments or log messages are remaining
- that Types are used where applicable, and any Type issues should be resolved
- user-facing updates (front end/ css crew) should be checked for accessibility concerns (using the WAVE tool)

## Naming conventions

| STACK LAYER | FUNCTION NAME   |
| ----------- | --------------- |
| Database    | getAllCheesesDb |
| Database    | getOneCheeseDb  |
| Database    | addCheeseDb     |
| Database    | deleteCheeseDb  |
| Database    | updateCheeseDb  |
| API Client  | getCheesesApi   |
| API Client  | getOneCheeseApi |
| API Client  | addCheeseApi    |
| API Client  | deleteCheeseApi |
| API Client  | updateCheeseApi |
| Component   | AddCheese       |
| Component   | App             |
| Component   | CheeseList      |
| Component   | DeleteCheese    |
| Component   | UpdateCheese    |

## Server API endpoints

| METHOD | ENDPOINT              | USAGE                     | RETURNS                  |
| ------ | --------------------- | ------------------------- | ------------------------ |
| GET    | `/api/v1/cheeses`     | Gets a list of cheeses    | An array of cheeses      |
| GET    | `/api/v1/cheeses/:id` | Get an individual cheese  | An array of blog posts   |
| POST   | `/api/v1/cheeses`     | Add a new cheese          | The newly created cheese |
| DELETE | `/api/v1/cheeses/:id` | Delete an existing cheese | Nothing (status OK)      |
| PATCH  | `/api/v1/cheeses/:id` | Update an existing cheese | The updated cheese       |
