# 🍳 CI CD Recipes

THis repo is meant to be a collection of examples of CI/CD pipelines & starter patterns for different use cases, with a focus on GitHub Actions. Each example lives in a separate directory and has its own README with more details.

The Actions files are purposely nested under `<dir>/.github/workflows` to mirror where they would actually live in a real repo, to make it easier to copy and paste. They will not run if you fork the repo because they are not in the root `.github/workflows` directory.

## Current examples:

- [K8s Build & Deploy](k8s-build-deploy/README.md): Example of building and deploying to Kubernetes with caching.
- [k6 Load Tests](k6-load-tests/load-tests/README.md): Example of using k6 for load testing, with options for running locally or in Github Actions, and using the web dashboard. Example load test hitting the k6 demo site is included.