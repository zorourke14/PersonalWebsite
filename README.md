# 3D Developer Portfolio

Welcome to my 3D Developer Portfolio project! This portfolio showcases my skills in using modern technologies, deployed with enterprise-grade DevOps practices and cloud infrastructure. 

## Tech Stack

- **React.js**: For building dynamic user interfaces.
- **Three.js**: For creating and rendering 3D graphics.
- **EmailJS**: For handling form submissions and sending emails.
- **Vite**: For a fast development environment.
- **Tailwind CSS**: For utility-first styling and responsive design.

## DevOps & Cloud Infrastructure

This portfolio demonstrates production-ready DevOps practices and cloud engineering skills:

### Infrastructure as Code
- **Terraform**: Complete infrastructure provisioning on Oracle Cloud Infrastructure (OCI)
- **Docker & Docker Compose**: Containerized application with multi-service orchestration
- **Nginx**: Production reverse proxy with SSL termination and security configurations

### CI/CD Pipeline
- **Jenkins**: Containerized CI server with pipeline automation and multi-stage build capabilities
- **GitHub Actions**: Continuous deployment pipeline with secure SSH deployment to production
- **Pipeline as Code**: Jenkinsfile-based build automation demonstrating industry-standard practices
- **Hybrid CI/CD Architecture**: Separated CI (Jenkins) and CD (GitHub Actions) for scalable pipeline design
- **Build Orchestration**: Docker Compose managing application, proxy, and CI/CD infrastructure services
- **Environment Management**: Production environment protection with encrypted secrets management

### Cloud Architecture
- **Oracle Cloud Infrastructure**: Cost-effective cloud deployment with VPC, security groups, and compute instances
- **Let's Encrypt**: Automated SSL certificate management with Certbot
- **HTTPS Everywhere**: Security-first approach with TLS 1.2/1.3 encryption

### Production Features
- **Reverse Proxy Configuration**: Nginx handling SSL termination and load balancing capabilities
- **Container Orchestration**: Docker Compose managing application, proxy, and CI/CD services
- **Security Hardening**: Firewall rules, SSH key authentication, and minimal attack surface
- **CI/CD Integration**: Jenkins pipeline framework ready for automated testing and quality gates

### Architecture Overview
```
Developer Push → Jenkins (CI: Build/Validate) → GitHub Actions (CD: Deploy) → OCI Instance → Live Website
Internet → Domain (zack-orourke.com) → OCI Public IP → Nginx (SSL) → Dockerized React App
```

The deployment showcases enterprise-level practices including separated CI/CD responsibilities, infrastructure automation, containerization, security best practices, and scalable cloud architecture. The Jenkins implementation demonstrates understanding of modern CI/CD tooling and pipeline design patterns used in production environments.

## Weblink

- **Checkout my website**: [zack-orourke.com](https://zack-orourke.com)