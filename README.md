# rn-assignment4-11264083
DCIT202 MOBILE APPLICATION DEVELOPMENT Assignment 4
Name: OWUSU EMMANUEL TAKYI
ID: 11264083
# Job Finder App

This is a Job Finder app built with React Native. It includes a SignUp screen and a Home screen that displays user information, a search bar, and job listings for featured and popular jobs.

## Components

### 1. SignUp

The `SignUp` component allows users to enter their name and email to log in. Upon login, it navigates to the Home screen, passing the name and email as parameters.

#### Usage

The component is structured as follows:

- **State Management**: Uses `useState` for managing the name and email input fields.
- **Navigation**: Uses `useNavigation` from React Navigation to navigate to the Home screen.
- **Styling**: Uses Tailwind CSS (`twrnc`) for styling.

### 2. Home

The `Home` component displays the user's name and email, a search bar, and lists of featured and popular jobs. It uses the `JobCard` component to display individual job listings.

#### Usage

The component is structured as follows:

- **Route Parameters**: Receives the user's name and email from the navigation route parameters.
- **Job Listings**: Filters jobs into featured and popular categories and displays them using horizontal and vertical ScrollViews.
- **Styling**: Uses Tailwind CSS (`twrnc`) for overall layout and styling.

### 3. JobCard

The `JobCard` component is used to display individual job listings. It can render both featured and regular job cards with different styles.

#### Usage

The component is structured as follows:

- **Props**: Accepts `job` and `featured` as props. The `job` prop contains job details, and `featured` is a boolean indicating whether the job is featured.
- **Styling**: Uses React Native's `StyleSheet` for specific component styling.

## Screenshots

### SignUp Screen

![SignUp Screen](./screenshots/signup_screen.png)

### Home Screen

![Home Screen](./screenshots/home_screen.png)

### JobCard Component

![JobCard Component](./screenshots/jobcard_component.png)

## Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/OwusuEmmanuelTakyi/rn-assignment4-11264083.git
