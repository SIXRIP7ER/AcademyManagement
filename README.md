# AcademyManagement

# docker build:

docker build -t flaskapp .

# docker run, run container for first time

docker run --name flaskapp-container -p 80:80 -v $(pwd):/code flaskapp

# docker start an existing container

docker start -ai flaskapp-container
