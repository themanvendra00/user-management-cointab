# User Management System

## Introduction
This is a simple 2-page website built using Node.js and an SQL database. The project showcases basic CRUD operations, fetching data from an external API, storing it in a database, and displaying it on a user interface. The backend is built with Node.js, Express.js, Sequelize, Mysql2, cors, and dotenv, while the frontend is designed using HTML, CSS, and JavaScript.

## Deployed App
- Frontend deployed link: https://venerable-genie-da94b6.netlify.app/
- Backend deployed link: https://olive-worm-cap.cyclic.app/

## Video Walkthrough of the project
- https://drive.google.com/file/d/1l-l-kAEJmTjXvkJFYUWrtb8yr-ftZ_PD/view?usp=sharing

## Table of Contents
- Installation
- Usage
- Page 1: Home Page
- Page 2: User Detail Page

### Installation
1. Clone the repository: `https://github.com/themanvendra00/user-management-cointab.git`
2. Navigate to the project directory: `cd user-management-cointab`
3. Install backend dependencies: `npm install`
4. Navigate to the frontend directory: Run `index.html`

### Usage
- Run the backend server: npm start in the project root directory.
- Access the application: Open your web browser and go to http://localhost:8080.

### Page 1: Home Page

The home page contains three buttons:

1. `Fetch Users`: Clicking this button fetches around 100 records from the `Random User API` and stores them in a database table.
2. `Delete Users`: Clicking this button removes all entries from the database.
3. `User Details`: Clicking this button navigates to Page 2, where user details are displayed.

#### Validations:

- Clicking the Fetch Users button throws an error alert if a data fetch is already in progress.
- Clicking the Delete Users button displays an error alert before deleting all records.
- Clicking the User Details button takes the user to Page 2.

### Page 2: User Detail Page

Page 2 displays user data in a tabular view with `pagination` and `filtering by gender` options.

1. `Pagination Buttons`: These buttons allow navigation to the next and previous pages.
2. `Filter Button`: This button enables filtering users by the gender.

#### Validations:

- Pagination buttons facilitate easy navigation through different pages.
- The filter feature dynamically updates the table based on the chosen criteria.

### APIs Used
This project uses an external [API](https://randomuser.me/) to get the random user's data.

## API Endpoints
1. `POST` `/api/users/fetch-users` - fetches around 100 records from the `Random User API` and stores them in a database table.
2. `DELETE` `/api/users/delete-users` - removes all entries from the database.
3. `GET` `/api/users/user-details` - gets all the users from the database and also takes two params `page` and `gender`. Eg. `/api/users/user-details?page=1&gender=female`

### Snapshots
- Home Page
![image](https://github.com/themanvendra00/user-management-cointab/assets/114161535/7265ab31-f539-43bc-b5da-71fd4f6e35c8)<br>
![image](https://github.com/themanvendra00/user-management-cointab/assets/114161535/89430331-c364-47b1-9915-8538fb099c00)<br>
![image](https://github.com/themanvendra00/user-management-cointab/assets/114161535/874fb25e-8ab1-4b64-8ebc-52ea333ac713)

- User Detail Page
![image](https://github.com/themanvendra00/user-management-cointab/assets/114161535/4419f205-84e9-468c-9aef-957d1040d9fe)<br>
![image](https://github.com/themanvendra00/user-management-cointab/assets/114161535/0d77d182-cf6d-40ad-b6fc-e83ec914b5ce)


