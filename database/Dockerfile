FROM postgres:15-alpine
COPY init.sql /docker-entrypoint-initdb.d/init.sql
ENV POSTGRES_DB=usersdb
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
EXPOSE 5432
