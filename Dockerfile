# Build stage using Maven and Temurin JDK 17
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copy dependency configuration and source code
COPY pom.xml .
COPY src ./src
COPY WebContent ./WebContent

# Package application and copy webapp-runner
RUN mvn clean package -DskipTests

# Runtime stage using lightweight JRE
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy packaged WAR and embedded Tomcat runner
COPY --from=build /app/target/onlinebookstore-modern.war ./app.war
COPY --from=build /app/target/dependency/webapp-runner.jar ./webapp-runner.jar

# Dynamic port for cloud providers (Render, Railway, Koyeb, Fly.io)
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "java -jar webapp-runner.jar --port ${PORT:-8080} app.war"]
