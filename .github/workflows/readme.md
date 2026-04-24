 Automated AWS Deployment Pipeline (CI/CD)
 -------------------------------------------
A professional React application deployment pipeline built with GitHub Actions, Docker, and AWS. This project demonstrates a "Zero-Trust" security architecture and automated staging-to-production workflows.

1 Key Features
Zero-Trust Security: Uses AWS OIDC (OpenID Connect) to authenticate GitHub Actions with AWS. No static Access Keys or Secrets are stored, reducing the risk of credential leakage.

Automated Containerization: Multi-stage Docker builds ensure a lightweight and secure production image, hosted on GitHub Container Registry (GHCR).

Headless Deployment: Uses AWS Systems Manager (SSM) to execute commands on EC2. This allows the server to remain secure with Port 22 (SSH) closed to the public internet.

Gated Environments: Implements a manual approval gate between Staging and Production environments.

Deterministic Rollback: Ability to revert the live site to any previous stable version in seconds using Git Commit SHAs.

2.Tech Stack
Frontend: React.js

Backend/Server: Node.js (Express)

Containerization: Docker

CI/CD: GitHub Actions

Cloud: AWS (EC2, IAM, OIDC, SSM)

Registry: GitHub Container Registry (GHCR)

3.Architecture Flow
Push: Developer pushes code to the main branch.

Build: GitHub Actions triggers a Docker build using the Git SHA as a unique version tag.

Staging: The image is pulled to EC2 and deployed on Port 8080 for validation.

Approval: A manual review is required in GitHub Actions to proceed.

Production: Upon approval, the stable image is deployed to Port 80.

4. Troubleshooting & Problem Solving
During the development of this pipeline, I successfully navigated several real-world DevOps challenges:

Linux Case-Sensitivity: Resolved Module Not Found errors by standardizing React component naming conventions for the Linux-based container filesystem.

Networking & Port Conflicts: Troubleshooted Connection Refused errors by identifying and removing legacy Nginx services and correcting YAML port-mapping configurations.

OIDC Configuration: Debugged IAM Trust Relationships to ensure the OIDC subject claim correctly matched the GitHub repository environment.

5. How to Use
Prerequisites
AWS Account with an EC2 instance (Amazon Linux 2023).

SSM Agent installed and running on EC2.

GitHub Actions Role with OIDC trust relationship configured.

Rollback Procedure
If a production failure occurs, you can trigger a rollback via the Actions tab:

Select the Secure AWS CI/CD Pipeline workflow.

Click Run workflow.

Provide the 7-character Git SHA of the last stable version.

Click Run.