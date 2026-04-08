# K8s Build & Deploy

This example assumes that you have a Kubernetes cluster set up and `kubectl` configured to access it.

AKS (Azure Kubernetes Service) is used as the cloud provider but the login & authentication steps can be swapped out for other providers pretty easily.

Secrets assume Azure Service Principals and would need to be set up ahead of time.

Dummy Dockerfiles are included.

The workflow can easily be reused for different environments (dev, staging, prod).

## High-level workflow steps:
<!-- Show a mermaid diagram of the workflow -->
````mermaid
graph TD
    A[GitHub Actions Workflow Triggered] --> B[Build & Push Docker Images to Registry]
    B --> C[Deploy to Kubernetes]
````