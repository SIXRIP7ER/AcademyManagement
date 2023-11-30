# docker build:

docker build -t flaskapp .

# docker run

docker run --name postgres-database -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres

# docker run, run container for first time

docker run -t --name flaskapp-container -p 80:80 -v $(pwd):/code flaskapp

docker run -t -p 5433:5433 -d \
 --name custom_postgres_db \
 -e POSTGRES_PASSWORD=postgres \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_DB=academy \
 -v $(pwd):/root/code \
 postgres-db

docker run --rm --name custom_postgres -e POSTGRES_PASSWORD=postgres -p 5434:5434 -d postgres-db

docker exec -it custom_postgres_db psql -U postgres -d academy -f createPlayer.sql

psql -U postgres academy < createPlayer.sql
