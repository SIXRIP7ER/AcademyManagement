FROM python:3.10-slim

WORKDIR /code

COPY . .

# RUN apt-get update
# RUN apt-get install -y python3-pip
RUN pip3 install --no-cache-dir -r requirements.txt


CMD ["python3", "-m", "app", "--host", "0.0.0.0", "--port", "8"]