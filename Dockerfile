FROM nikolaik/python-nodejs
RUN mkdir -p /app
WORKDIR /app
COPY . .

ENV SET_CONTAINER_TIMEZONE=true CONTAINER_TIMEZONE=America/Sao_Paulo TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN pip install --no-cache-dir -r requirements.txt

RUN python DownloadData.py

RUN cd frontend && npm install && npm run build && cd ..


CMD [ "python", "./main.py" ]