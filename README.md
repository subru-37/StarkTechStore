# Stark Tech Store
An E-Bay like E-Commerce application for the sale and purchase of electronic goods.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [API Documentation](#api-documentation)
4. [Technologies Used](#technologies-used)

## Prerequisites

- [npm](https://nodejs.org/en/download/package-manager)

## Setup

1. Clone the repository

   ```bash
   git clone https://github.com/subru-37/StarkTechStore.git
   ```
2. Install dependencies

    ```bash
    cd StarkTechStore
    npm install
    ```
5. Running the Application

    ```
    npm run dev -- --host
    ```

## API Documentation

All the APIs are written through RTK Query and Supabase Client functions

1. `CategoryDetailsApi`: Fetches the different types of categories from the database
2. `ProductDetailsApi`: Fetches the details of individual product as well as the entire list based on given filters. (Pagination to be implemented)

## Technologies Used

<div style="display:flex; align-items:center; justify-content:center;width:1000px">
  <img style="width:60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png?size=48"></img>
  <img style="width:60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png?size=48"></img>
  <img style="width:60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png?size=48"></img>
  <img style="width:60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png?size=48"></img>
  <img style="width:60px" src="https://avatars.githubusercontent.com/u/54469796?s=40&v=4"></img>
  <img style="width:60px" src="https://avatars.githubusercontent.com/u/13142323?s=48&v=4"></img>
</div>
