FROM postgres

RUN mkdir -p /root/code

# insert initial sql
# ./postgres-database/createPlayer.sql:/docker-entrypoint-initdb.d/init.sql

# COPY .createPlayer.sql ./docker-entrypoint-initdb.d/init.sql

WORKDIR /root/code
# COPY . .

# RUN psql -U postgres academy < createPlayer.sql

# COPY . .

# # RUN apt-get update
# # RUN apt-get install -y python3-pip
# # RUN pip3 install --no-cache-dir -r requirements.txt