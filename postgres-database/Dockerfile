FROM postgres

RUN mkdir -p /root/code
WORKDIR /root/code
COPY . .

# COPY . .

# # RUN apt-get update
# # RUN apt-get install -y python3-pip
# # RUN pip3 install --no-cache-dir -r requirements.txt


CMD ["psql", "-U", "postgres", "<", "createPlayer.sql"]