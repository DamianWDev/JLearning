# syntax=docker/dockerfile:1

FROM ubuntu:22.04

WORKDIR /app

COPY requirements.txt ./

RUN #mkdir "images"

RUN set -xe && apt-get update
RUN apt-get install python3-pip -y
RUN apt-get install libpq-dev -y
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
