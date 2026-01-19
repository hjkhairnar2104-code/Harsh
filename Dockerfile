# ---------- Build Stage ----------
FROM eclipse-temurin:17-jdk AS builder
WORKDIR /app

COPY backend/mvnw .
COPY backend/.mvn .mvn
COPY backend/pom.xml .
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY backend/src src
RUN ./mvnw clean package -DskipTests

# ---------- Run Stage ----------
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

ENTRYPOINT ["java", "-jar", "app.jar"]
