import itlogger from "../websiteScreenShots/itlogger.png"
import githubfinder from "../websiteScreenShots/githubfinder.png"
import hangman from "../websiteScreenShots/hangman.png"
import todo from "../websiteScreenShots/todo.png"
import moviedb from "../websiteScreenShots/moviedb.png"
import studio from "../websiteScreenShots/studio.png"

const projectsData = [
    {
        id: 1,
        name: "IT Logger",
        description: "An application that fetches and stores data in an API for the purpose of effectively logging activity that would occur in a IT department. Implements Redux to control app level state, and has the ability to add, delete, and update 'log' and 'tech' data.",
        img: itlogger, 
        demoLink: "https://wvitlogger.netlify.app/",
        sourceCode: "https://github.com/willvuong/react-it-logger-app" 
    },
    {
        id: 2,
        name: "Github Finder",
        description: "An application that fetches queried data that is entered in the search bar from the GitHub API. Utilizes Context API to effectively control app level state. User data is retrieved and then destructured to display their name, location, bio, website, and recent projects.",
        img: githubfinder, 
        demoLink: "https://wvgithubfinder.netlify.app/",
        sourceCode: "https://github.com/willvuong/react-github-finder-app" 
    },
    {
        id: 3,
        name: "Movie Database App",
        description: "An application that queries specific data from a movie database API. A useState hook is intialized as null which it is then used to store queried data that is entered in the search bar. All movies that match the query is first searched through the API -> converted to JSON objects -> results sent to the 'Movies' component as props -> sent to the 'Movie' component where the object's data is then destructured and rendered onto the page",
        img: moviedb,
        demoLink: "https://wvmoviedb.netlify.app/",
        sourceCode: "https://github.com/willvuong/react-movie-app"
    },
    {
        id: 4,
        name: "Hangman Game",
        description: "Hangman game that records correct and wrong letters, and determines on whether you can play depending on whether you win or lose, through the use of React useStates and useEffect. React useStates are used as props to update what was being displayed on the screen (ie: wrongLetters that are entered updated the Figure component to render out a new body part)",
        img: hangman, 
        demoLink: "https://wvhangman.netlify.app/",
        sourceCode: "https://github.com/willvuong/react-hangman-app" 
    },
    {
        id: 5,
        name: "To-Do App",
        description: "A to-do list using React in order to add, delete and track task. Functions are passed into components as props in order editing the task list. React useStates were incorporated in order to display/close the '+' button (add new task) and to add new task components into the task useState object array.",
        img: todo, 
        demoLink: "https://wvtodo.netlify.app/",
        sourceCode: "https://github.com/willvuong/react-to-do-app"
    },
    {
        id: 6,
        name: "Studio 6ix: Barbershop Website",
        description: "A business page that displays information about the barbershop's work, services offered, staff members, and contact information for a simple and meaningful way. This website was built on Wordpress and uses plugins that effectively displays information through a slideshow, Instagram feed, and Google map widget.",
        img: studio,
        demoLink: "//www.studio6ix.ca",
        sourceCode: "//www.studio6ix.ca"
    }
]

export default projectsData;