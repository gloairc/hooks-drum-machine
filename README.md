# Project 4 - BeatIT!
Get to Play, Save, Replay & Edit you very own beat sequence.
Simple step sequencer built with React Hooks, adapted from [hooks-drum-machine](https://github.com/kenwheeler/hooks-drum-machine)

### Members
Mitch, Gloria

## Working App
[Click here!](https://sei26-project4.herokuapp.com/)
  
## Technologies used:
- MERN Stack (MongoDB, Express.js, React, Node.js)
- Dependencies: 
  1. axios
  2. @material-ui/core + @material-ui/icons
  3. bcrypt
  4 cookie-parser
  5. jsonwebtoken
  6. react-bootstrap + bootstrap
  7. react-router-dom, react-dom, react-cache
  8. Tone.js
    
## More about our project
### General Approach
While looking for an exciting project to work on, both of us came across apps that play instruments. 
Mitch chanced upon an [article](https://medium.com/open-graphql/building-a-real-time-collaborative-beatbox-with-react-graphql-96246e9fed80) that led us to the [hooks-drum-machine repo](https://github.com/kenwheeler/hooks-drum-machine). Seeing that it was using the React which we were familiar with and the idea of working on a step sequencer sounds interesting, we decided to take the project further by adding a MongoDB + Express.js + Node.js backend so that one can not only play it, but save, replay and edit!

We started with deciding the scope of our project, filtering what was MVP and what were additional feature -> User Journey -> Wireframe -> Delegation & Timeline.

The feature which we will be adding in this version of BeatIT! (ver 1) are:
**User-Related**
  - Add Account
  - Edit Account
  - Change Password
  - Beat Sequence created are private (only creator can see it)
  
**Beat Sequencer-Related**
  - Save
  - Clear Row, clear Grid
  - Hear the sound of instrument on click
  - Change the name of the beat sequence
    
Read more in our user stories in the link below!
    
### User Stories, Wireframe
- [Link to User Story] (https://docs.google.com/document/d/11PR2Pvzlb_E6eEDnZxj19IQ0kj8GwzNpXalNAsgoKBc/edit?usp=sharing)
- [Link to Wireframe]  (https://www.figma.com/file/XGSvtv1WkJQuKWl8GaR6Dp/Project-4-cool-app-name-wireframe?node-id=0%3A1)

### Major Hurdles
1.  Having to go back to the bare minimum MongoDB Schema
- We initially planned our schema to emcompass the future additional features that we wanted to have (user can add, upload, remove instruments & soundtrack). However, 2 days into our 5-day project timeline, we found it hard to fit our planned schema into the way the original hook-drum-machine was coded (foresee numerous data manipulation). Considering the time limitation, we decided to drop our planned schema and adapt the schema to how the original repo was coded.

2. User Authorisation and Authentication 
- We faced the issue of page refreshing every time we click on a route in the Navbar. This cause the logged in users to be logged out with every page toggle or refresh.
We finally found the reason why - using Nav.Link from react-bootstap, which was different from Link to in react-router-dom. 

3. Node Module Bug
- ~~had to replace some lines in react-cache node module (see below)~~
- ~~currently unable to deploy to Heroku (need to replace that node module, but unable to do so for now)~~
- Installing the `react-cache`package via `npm install` command has issues and prevents the app from running correctly locally. Resolved this by copying the files from the repo stated below (also see instructions).
- Previously unable to deploy on Heroku due to an issue with the node module, `react-cache`.
- This has been fixed as of 22/02/21. The following files were used from (this repo)[https://github.com/jaredpalmer/the-platform/tree/c1d20b31a49ab5df01f21448e2e6129ffd51a57e/example/vendor/react-cache]:
  i. react-cache.development.js
  ii. react-cache.production.min.js
    
### Future Addition Features
- [ ] Add/ Upload/ Remove instruments & soundtracks, even your own!
- [ ] Re-order the the instrument rows
- [ ] Add grid to make it a 2-, 3-grid sequence
= [ ] Share beat sequence created to everyone (a public listing page)
- [ ] Drum Kit (user-friendly buttons to play the drums, without a sequencer)

## Installation Instructions
 - git clone, npm install (root folder as well as client-react folder)
 - Copy the contents in the `fix/` folder into `client-react/node_module/` folder, if running locally
 - after which, you can `npm run start-local` for both server and client (run `npm start` in `client-react` folder) for running app locally
