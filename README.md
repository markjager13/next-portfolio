# Portfolio Website 

### Project Introduction
This project was designed to introduce myself and showcase my technical background. I had already built a similar portfolio website using plain HTML, CSS, and JavaScript. However, I was excited to learn more about Next.js and some of the benefits it offers.

[Live Demo]()

### How I worked on this project
* I built the main section components and identified global component styles.
* I used dynamic routing and static generation to display the project details page.
* To help manage light & dark mode state, I used React Context API. 

### How to navigate this project
* Data fetching and static generation: [Example Code](https://github.com/markjager13/next-portfolio/blob/f4f0a6aa785ba497f6286cfaa8c47abc59ccb852/src/pages/project/%5Bpid%5D.js#L77)
* Styled-Components using props: [Example Code](https://github.com/markjager13/next-portfolio/blob/f4f0a6aa785ba497f6286cfaa8c47abc59ccb852/src/components/Projects/Projects.styled.js#L1)
* React Context used to create ToggleThemeContext for managing dark mode state: [Example Code](https://github.com/markjager13/next-portfolio/blob/f4f0a6aa785ba497f6286cfaa8c47abc59ccb852/src/context/ToggleThemeContext.js#L3)

### Why I built the project his way
* I chose to use Next.js so that I could learn more about Server Side Rendering (SSR) and static generation.
* I am considering adding blog posts to this site and, for this reason, Next.js is an excellent framework to use. 
* I also wanted to learn more about using Styled-Components and they seemed like a great way to handle theme changing. 

### If I had more time I would change the following
* There is a brief flash of white when refreshing the page while in dark mode. I would like to implement a fix for this.
  * Becasue of SSR, the website's first render doesn't happen on the user's device but, rather, on the server side. 
  * For this reason, the site has no idea what the user's color/theme preferences are before it reaches the client.
  * One way to solve this issue, is to add a funciton in my custom document.js file that gets the initial theme props and injects them into the page before the page loads.
* For now, my project data is simply stored in a local data file. However, it might be better to use GraphQL to manage my data.  

### Installation
* Clone the repo
* In your terminal, type `git clone URL` (substituting URL with the one that was copied to your clipboard)
* cd into the directory that was just created
* Type `npm install` to install all dependencies
* Type `npm run dev` to run the app locally

