# Azure Resume
My Azure Resume

# Section 1 Building 

- Created a GitHub Repo, cloned and started code to understand the project structure.

- Updated the HTML with resume info and wrote JavaScript code for the visitor counter.

- Tested website locally and pushed changes to GitHub.

# Section 2: Building the backend

- Created Cosmos DB account, database, container and data.

- Created Azure Function to interact with Cosmos DB counter data.

- Tested Function Locally and made sure I could view the counter data in the browser.

# Section 3: Deploying to Azure

- Deployed the Azure Function to Azure and grabbed its URL to update the JavaScript code.

- Deployed static website to blob container (Manually).

- Setup Azure CDN for HTTPS with custom domain support.

# Section 4: Building CD/CD pipeline

- Created GitHub workflow responsible for deploying the frontend of my project.

- Created unit tests to test Azure Functions code as a part of the deployment workflow.

- Created GitHub workflow responsible for deploying the backend of my project.

# Summary

A really fun project that got me hands on with Azure core concepts. One big roadblock I hit was trying to deploy my static website to Azure. The error I got was when deploying to the $web blob storage container via VSC. I found a work around however and instead of using VSC to deploy the website, I used Azure Storage Explorer and added the website manually to my storage account.


