# ATG_Movie_Awards
Last modified: June 20, 2023 

This project is to display movies from OMDBApi(omdbapi.com) and saves movies into django framework. 

* Short video for explaination (might take some time to upload...)
===> https://youtu.be/TUWxVrtkMeE


"server" folder represents backend 
"client" folder represents frontend 

Requirements: 
* frontend - 'react-redux', 'react-bootstrap', 'react-router-dome', 'redux-thunk', 'redux-devtools-extension'

To run the project: 
* from the "server" folder: python3 -m venv venv 
* activate virtual environment: source venv/bin/activate(MacOs) 
* install requirements for the backend(i.e. django, mysql)
* migrate the mysql: python manage.py makemigrations => python manage.py migrate 
* run backend server: python manage.py runserver

* from the "client" folder: npm install => npm start 

! Small Problems: 
* Once sign-in user needs to visit user's page by clicking film icon again to fire the connection with database. 

References: 
[1] Yaser Az. "Building a MovieTVInfo Web Application Using ReactJS & Redux Tutorial," Youtube, Feb. 8, 2019. [Video file]. Available: https://www.youtube.com/playlist?list=PLG3RxIUKLJlbDDGeeoUCkinS2DUybp_1o. [Accessed: June 17, 2023].
[2] Great Adib. "Django React Redux FullStack," Youtube, Aug. 9, 2022. [Video file]. Available: https://www.youtube.com/playlist?list=PLPip5lOh2Z5BFRm0jTYvlI6wbkLrG1OY-. [Accessed: June 17, 2023].

... and many others!! 