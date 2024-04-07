# Dev désappointé 🚀

## Table of Contents

- [Dev désappointé 🚀](#dev-désappointé-)
  - [Table of Contents](#table-of-contents)
  - [Introduction 📚](#introduction-)
  - [Getting Started 🚀](#getting-started-)
  - [Project Structure 📁](#project-structure-)
  - [Development Workflow 🛠️](#development-workflow-️)
  - [Testing 🧪](#testing-)
  - [Deployment 🚀](#deployment-)
  - [Contributing 🤝](#contributing-)

## Introduction 📚

"Dev désappointé" is a React-based project, built with TypeScript and styled using Tailwind CSS. It's configured with Vite for a fast and efficient development experience. The application serves as a phrase generator to entertain users while they wait.

## Getting Started 🚀

To get started with the project, follow these steps in your terminal:

1. **Clone the Repository**  
   `git clone https://github.com/Caro-L-dev/dev-desappointe.git`

2. **Navigate to the Project Directory**  
   `cd dev-désappointé`

3. **Install Dependencies**  
   `npm install`

4. **Start the Development Server**  
   `npm run dev`

The application will now be running in development mode. You can access it by navigating to `http://localhost:5173` in your web browser.

## Project Structure 📁

The project is structured as follows:

- `public/`: Contains static assets.
- `src/`: Contains the source code of the application.
- `components/`: Contains React components.
- `data/`: Contains data files, such as phrases for the phrase generator.
- `hooks/`: Contains reusable custom hooks.
- `routes/`: Contains navigation.
- `.gitignore`: Ignore node_modules folder.
- `vite.config.js`: Vite configuration file.
- `jest.config.js`: Jest configuration file.
- `tailwind.config.js`: Tailwind configuration file.
- `vercel.json`: Manage dynamic routes.
- `package.json`: Project metadata and dependencies.

## Development Workflow 🛠️

- **Development Mode**: Run `npm run dev` to start the development server.
- **Testing**: Run `npm run test` to execute tests using Jest and React Testing Library.
- **Building for Production**: Run `npm run build` to create an optimized build of the application.

## Testing 🧪

The project uses Jest and React Testing Library for testing. To run the tests, execute:
`npm run test`

## Deployment 🚀

Before deploying the application to Vercel, make sure to build the project:  
`npm run build`

Then, follow the deployment instructions provided by Vercel.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Create a New Branch**: Always create a new branch from `main` to test new features. Use a naming convention that clearly describes the feature or fix you're working on. For example, if you're adding a new phrase generator feature, you might name your branch `feature/phrase-generator`.

2. **Keep `main` Up to Date**: Before starting work on a new feature or fix, make sure your local `main` branch is up to date with the remote repository. You can do this by running:  
   `git checkout main`  
   `git pull`

3. **Submit a Pull Request**: Once you've made your changes and tested them, submit a pull request to the `main` branch.

---

🚀 Happy coding!
