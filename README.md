# Dashboard

## Overview

This is a **React-based dashboard** built with **Vite**, providing an interactive and responsive user interface for managing various components. The project leverages modern libraries like **Tailwind CSS** for styling, **react-mosaic-component** for layout management, and **react-select** for enhanced dropdown functionality. For the backend, the project uses **json-server** to provide a mock API for data management. Additionally, Docker is used to containerize the application.

## Features

- **Fast Development**: Built with **Vite** for a faster and more efficient development environment.
- **Responsive Layout**: The dashboard is fully responsive using **Tailwind CSS** for utility-first styling.
- **Dynamic Layout Management**: Uses **react-mosaic-component** to allow users to rearrange and resize panels dynamically.
- **Customizable Dropdowns**: Powered by **react-select** for creating rich, customizable dropdowns with search and multi-select options.
- **Mock API**: **json-server** is used to provide a simple backend API for managing data, making development easier with mock response.
- **Docker Support**: The project includes Docker configuration to build and run the application in a containerized environment.

## Tech Stack

- **Vite**: Build tool for modern front-end development.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **react-mosaic-component**: Library for building resizable and rearrangeable tiled layouts.
- **react-select**: Flexible and customizable dropdown components.
- **json-server**: Mock REST API server for simulating a backend.
- **Docker**: Container platform for running the application in isolated environments.

## Installation

To get started with the project, follow the steps below:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v14+ recommended
- **yarn**: For package management
- **Docker**: For containerization

### Setup

1. Clone the repository:

`git clone https://github.com/SerhiiStaryk/mosaic-dashboard.git`

2. Install dependencies:

`yarn install`

3. Run the development server:

`yarn dev`

4. Start the **json-server** (optional, for mock API):

`yarn server`

This will launch the **json-server** on `http://localhost:8000`.

5. Open the project in your browser:

`http://localhost:5173`

### Docker Setup
You can build and run the application using Docker.

1. Build the Docker image:

`docker build -t dashboard .`

2. Run the application using docker-compose:

`docker-compose up`

## Usage

The dashboard provides a flexible interface where users can:

- Drag and rearrange panels dynamically using **react-mosaic-component**.
- Use search and filtering capabilities in dropdowns with **react-select**.
- Interact with a mock API powered by **json-server**, allowing easy data manipulation during development.
- Easily customize the layout and components through **Tailwind CSS** classes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Vite**
- **React**
- **Tailwind CSS**
- **react-mosaic-component**
- **react-select**
- **json-server**

---

Let me know if you'd like to modify or add anything else!
