FROM python:3.5.6-jessie

WORKDIR /app
COPY main.py /app/
COPY requirements.txt /app/

CMD pip3 install -r requirements.txt
ENTRYPOINT [ "python3", "main.py" ]