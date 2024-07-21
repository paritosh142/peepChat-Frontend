# peepChat

peepChat is a feature-rich chat application frontend built with React, Redux, and Material-UI. This project supports both user and admin functionalities, including user management, chat management, and message management. The application is deployed on Vercel and can be accessed [here](https://peepchat.vercel.app/).

## Features
- **Real-time Chat**: Engage in real-time conversations.
- **Group Chat**: Create and join group chats.
- **Admin Dashboard**: Manage users, chats, and messages.
- **Authentication**: Secure user authentication with protected routes.
- **Responsive Design**: Mobile-friendly interface.
## Tech Stack
- **Frontend**: React, Redux, Material-UI
- **Routing**: React Router
- **State Management**: Redux Toolkit
- **Styling**: Material-UI
- **Real-time Communication**: Socket.io-client
- **API Requests**: Axios
- **Other Libraries**: react-hot-toast, react-helmet-async, chart.js
## Setup and Installation
### Prerequisites
Node.js
npm or yarn
### Installation
**Clone the repository**:

```bash 
git clone https://github.com/paritosh142/peepChat.git
cd peepChat
```
Install the dependencies:

```bash
npm install
```
or

```bash
yarn install
```

Running the Application
Start the development server:

```bash
npm run dev
```
or

```bash
yarn dev
```
Open your browser and navigate to http://localhost:3000 to see the application running.

## Usage
- **Login**: Use your credentials to log in.
- **Chat**: Select a chat or group to start messaging.
- **Admin Dashboard**: Navigate to /admin for admin functionalities.
## Project Structure
```arduino
peepChat
├── public
├── src
│   ├── components
│   ├── constants
│   ├── pages
│   ├── redux
│   ├── socket
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── .eslintrc.js
├── package.json
├── vite.config.js
└── README.md
```

## Backend Repository
The backend repository for this project is available [here](https://github.com/paritosh142/peepChat-Backend.git). Make sure to clone and set up the backend server to fully utilize the functionalities of peepChat.
## License
This project is licensed under the MIT License.
