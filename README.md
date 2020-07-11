# Node, Postgres, Docker Boilerplate
It's an application for managing medical appointments based on `Node.js`, `PostgreSQL`, etc.

## Setup development environment
- Create application files
- Write a description into `README.md`
- Create `package*` files
- Install dev dependencies
- Create scripts
- Create `Dockerfile`
    - Define the image
    - Define the working directory
    - Copy the package* files
    - Install dependencies
    - Copy the application files
    - Command to run the container
- Create `docker-compose.yml`
    - Specify version
    - Create `web` service
        - build
        - command
        - ports
        - env_file
        - volumes
    - Create `db` service
        - image
        - ports
        - env_file
- Create config files
- Create `.dockerignore` file
- Git init
- Create `.gitignore` file
- Delete intermediate `node_modules`
- Run Docker Compose