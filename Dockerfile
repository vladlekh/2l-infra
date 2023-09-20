FROM mongo:6.0
COPY /secrets/mongodb-keyfile /data
RUN chmod 400 /data/mongodb-keyfile
RUN chown 999:999 /data/mongodb-keyfile