# Game Price Monitor

Welcome to the Game Price Monitor project! This application helps users track and monitor the prices of their favorite games. The project is divided into two main components:

## Frontend (React)

The frontend of the application is built using React, a popular JavaScript library for building user interfaces. This folder contains all the necessary files and components to create a responsive and user-friendly web interface for interacting with the game price monitoring system.

### Getting Started with Frontend

1. Navigate to the "frontend" folder.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Access the web application at [http://localhost:3000](http://localhost:3000).

## Backend (Flask)

The backend of the application is powered by Flask, a lightweight web framework for Python. It utilizes Flask-RESTful for building the API and Flask-SQLAlchemy for interacting with the local database. The database stores information about the games, including their current prices and the lowest prices recorded.

### Getting Started with Backend

1. Navigate to the "backend" folder.
2. Create a virtual environment: `python -m venv venv`.
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On Unix or MacOS: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`.
5. Run the Flask application: `python server.py`.
6. The Flask API will be accessible at [http://localhost:5000](http://localhost:5000).

### Database

The backend uses Flask-SQLAlchemy to interact with a local SQLite database. The database schema is created automatically when the application is run for the first time.

## API Endpoints

The backend provides the following API endpoints for interacting with the game price monitoring system:

- **GET /api/games**: Retrieve a list of all games. (Type: `GET`)

- **POST /api/games**: Add a new game to the monitoring list. (Type: `POST`)

  - Request Body:
    ```json
    {
      "name": "Game Name",
      "link": "https://game-link.com",
      "header_img": "https://image-url.com/header.jpg",
      "current_price": "49.99€"
    }
    ```

- **DELETE /api/games**: Delete a game from the monitoring list. (Type: `DELETE`)
  - Request Body:
    ```json
    {
      "id": 1
    }
    ```

### Game Resource Fields

The API responses follow the following resource fields:

```json
{
  "id": 1,
  "name": "Game Name",
  "link": "https://game-link.com",
  "header_img": "https://image-url.com/header.jpg",
  "current_price": "49.99€",
  "lowest_price": "39.99€"
}
```

---
Feel free to explore and enhance the project according to your needs! If you have any questions or issues, please refer to the documentation of React, Flask, Flask-RESTful, and Flask-SQLAlchemy or reach out for support. Happy coding!
