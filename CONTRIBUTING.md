
# Contributing
When contributing to this project, please follow the [feature branch version control workflow](https://knowledge.kitchen/Feature_branch_version_control_workflow). 

## Download and Use
- Download the repository from github. 
- Navigate to the `backend` directory, and run `npm install`.  
- You also have to create a `.env` file in the `backend` folder and include the MongoDB and JWT access tokens. These have been provided on the private slack channel. 
- Navigate to the `frontend/admin` directory, run `npm install`.
- Navigate to the `frontend/reader` directory, run `npm install`.
- Navigate to the `backend` directory, run `nodemon`, and make sure the backend is always running. 
- Keep the terminal running the backend open. In another terminal, navigate to the `frontend/admin` directory, run `npm start` to launch the admin interface. Make sure the backend is running. 
- If you would like to launch the reader interface, navigate to the `frontend/reader` directory, run `npm start`, and also make sure the backend is running at the same time. 
- Only "Admin" users registered can add new users via the interface. Please create your own account with a gmail address in the database, and log in with the same gmail address. The credentials for the database is shared via private messages. Then you will be able to login via Google Authentification in the admin interface. No login is requried for the reader interface. 

## Pull Request Process
Please make sure to issue a pull request after a feature branch is pushed to the repository and wait for a teammate to check the new changes and accept the request. 

## Code of Conduct
### Our Pledge
We, the LightShare team, solemnly pledge to consecrate our lives to this project for the duration of this semester and beyond. We will give to the Professor, grader, tutor, and classmates the respect and gratitude that is their due. We will build this project with conscience and dignity. The quality of the product will be our number one consideration. We will respect the secrets our teammates have confided in us, even after the semester has ended and the members have died. We will maintain, by all the means in our power, the honor and the noble traditions of computer science students. We will treat each other equally and respectfully, regardless of level of experience, age, disease or disability, creed, ethnic origin, gender identity and expression, race, political affiliation, nationality, sexual orientation, social standing, and any other factors. We will not use our knowledge to violate human rights and civil liberties, even under threat. We make these promises solemnly, freely, and upon our honor. 

### Our Standards
- Use encouraging and inclusive language
- Respect and listem to others' ideas and viewpoints
- Provide and accept constructive criticism
- Avoid disclosing each other's private information online
- Avoid harrassing, insulting,or degrading others

### Definition of Done
The code implements the features detailed in user stories or tasks without introducing errors to the system and is reviewed and tested by at least another team member. 
