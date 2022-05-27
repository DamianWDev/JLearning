FROM python:3.10.4

RUN rm -Rf API; exit 0

WORKDIR /API

ENV PYTHONPATH=/

COPY ./requirements.txt ./

RUN #mkdir "images"

#RUN set -xe && apt-get update
#RUN apt-get install python3-pip -y
#RUN apt-get install libpq-dev -y
RUN pip3 install --no-cache-dir --upgrade -r requirements.txt

COPY . .

CMD python -m uvicorn app:app --host 0.0.0.0 --port 80
