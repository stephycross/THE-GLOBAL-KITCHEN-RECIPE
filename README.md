# The Global Kitchen API 

## Name: BONGYEN STEPHY CROSS
## Github repo: https://github.com/stephycross/THE-GLOBAL-KITCHEN-RECIPE
## Matric No.: LMUI250731
## E-mail: **crossstephy1@gmail.com**
## Course: **FULLSTACK DEVELOPMENT WITH JAVASCRIPT**

 
## Tech Stack 
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Configuration:** dotenv, cors, nodemon, eslint
 
## Features 
- **Recipe Management:** Create, Read, Update, and Delete (CRUD) recipes.
- **Advanced Filtering:** Retrieve all recipes with the ability to filter by category.
- **3-Tier Architecture:** Clean separation of concerns across Routes, Controllers, and Services.
- **Robust Validation:** Strict Mongoose schema rules (required, min, enum, trim) guaranteeing data hygiene.
- **Global Error Handling:** Unified error catching that prevents server crashes and returns consistent JSON responses (including proper 404s).
 
## Installation & Setup 
1. Clone the repository: 
   ```bash 
   git clone https://github.com/stephycross/THE-GLOBAL-KITCHEN-RECIPE.git
   ``` 
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your port and database URI:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/globalKitchenDb
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
