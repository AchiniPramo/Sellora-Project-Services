# Sellora Project Services

A modern microservices-based e-commerce platform built with Spring Boot and Spring Cloud, designed for scalability and high availability. **Sellora** provides comprehensive services for managing users, inventory items, and orders in a distributed system architecture.

## 📋 Table of Contents

* [Project Overview](#-project-overview)
* [Architecture](#-architecture)
* [Services](#-services)
* [Technology Stack](#-technology-stack)
* [Prerequisites](#-prerequisites)
* [Installation & Setup](#-installation--setup)
* [Build & Run](#-build--run)
* [Project Structure](#-project-structure)
* [Database Configuration](#-database-configuration)
* [Deployment](#-deployment)
* [License](#-license)

## 🎯 Project Overview

**Sellora** is an enterprise-grade microservices application that separates concerns into independent, scalable services. Each service manages its own data and communicates through REST APIs, following the microservices architecture pattern for maximum flexibility and fault isolation.

**Key Features:**

* Multi-tier microservices architecture
* Service-to-service communication via REST clients
* Centralized configuration management
* Service discovery with Eureka
* Comprehensive error handling
* Data validation and aspect-oriented programming
* Cloud deployment ready (GCP)

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│           API Gateway / Load Balancer           │
└────────────────┬────────────────────────────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
    ▼            ▼            ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│  User   │ │  Item   │ │ Order   │
│Service  │ │Service  │ │Service  │
└────┬────┘ └────┬────┘ └────┬────┘
     │           │           │
     ▼           ▼           ▼
 PostgreSQL  MongoDB     MySQL
```

### Service Communication Flow

* **Order Service** → calls User Service & Item Service via REST Client
* **User Service** → manages user authentication and profiles
* **Item Service** → manages product catalog
* **Eureka Server** → service discovery and registration
* **Config Server** → centralized configuration management

## 🔧 Services

### 1. User Service

**Port:** Configurable (default: 8080)
**Database:** PostgreSQL

**Key Responsibilities:**

* User registration and authentication
* User profile management
* NIC normalization and validation with AOP
* User data persistence

---

### 2. Item Service

**Port:** Configurable (dynamic)
**Database:** MongoDB

**Key Responsibilities:**

* Product/item catalog management
* Item creation and updates
* Item search and retrieval
* Inventory management

---

### 3. Order Service

**Port:** Configurable (dynamic)
**Database:** MySQL

**Key Responsibilities:**

* Order processing and management
* Order history tracking
* Inter-service communication with User and Item services
* Order fulfillment orchestration

---

## 💻 Technology Stack

| Component         | Technology                 | Version  |
| ----------------- | -------------------------- | -------- |
| Java              | Java                       | 25       |
| Framework         | Spring Boot                | 4.0.3    |
| Cloud             | Spring Cloud               | 2025.1.0 |
| Service Discovery | Eureka                     | Latest   |
| Config            | Spring Cloud Config        | Latest   |
| Databases         | PostgreSQL, MongoDB, MySQL | Latest   |
| Mapping           | MapStruct                  | 1.6.3    |
| Utilities         | Lombok, Actuator           | Latest   |

---

## 🚀 Installation & Setup

```bash
git clone https://github.com/orion343dream/Sellora-Project-Services.git
cd Sellora-Project-Services
```

---

## 🛠️ Build & Run

```bash
mvn clean install
```

Run services individually:

```bash
mvn spring-boot:run
```

---

## 📁 Project Structure

```
Sellora-Project-Services/
├── user-service/
├── item-service/
├── order-service/
├── .github/
├── ecosystem.config.js
├── pom.xml
└── README.md
```

---

## 🌐 Deployment

Configured for **Google Cloud Platform (GCP)** with:

* Cloud SQL
* Compute Engine
* Load Balancing
* CI/CD via GitHub Actions

---

## 🔐 Security

* Environment-based secrets
* Spring Security integration
* Input validation
* API protection

---

## 📊 Monitoring

```bash
/actuator/health
/actuator/metrics
```

---

## 🤝 Contributing

1. Create a branch
2. Commit changes
3. Push & open PR

---

## 📝 License

MIT License

---

**Last Updated:** March 31, 2026
**Version:** 1.0.0
**Project Name:** Sellora

---

If you want, I can **make this even more beautiful (GitHub-level premium README 😍)** with:

* Badges (build, version, tech stack)
* Screenshots / diagrams
* Animated headers
* Shields.io styling

Just tell me 👍
