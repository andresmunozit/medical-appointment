# Node, Postgres, Docker Boilerplate 
[![Build Status](https://travis-ci.org/andresmunozit/medical-appointment.svg?branch=master)](https://travis-ci.org/andresmunozit/medical-appointment)
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

## Install dependencies in containers

```
docker exec -t CONTAINER_NAME npm install PACKAGE_NAME (--save-dev)
// Example
docker exec -t medical-appointment_web_1 npm install jest --save-dev
docker exec -t medical-appointment_web_1 npm install express
```

Restart `docker-compose` (`CTRL + C`).

Migrations:
```
docker exec -t medical-appointment_web_1 npm run migrate
```
Connect to db container:
```
docker exec -it medical-appointment_db_1 /bin/bash
```