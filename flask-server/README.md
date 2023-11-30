# AcademyManagement

# docker build:

docker build -t flaskapp .

# docker run, run container for first time

docker run -t --name flaskapp-container -p 80:80 -v $(pwd):/code flaskapp

# docker remove

rm flaskapp-container

# docker start an existing container, but better practice to just delete container and start

docker start -ai flaskapp-container
