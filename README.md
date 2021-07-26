# Pneuma Management Website

# Local development
Prerequisites: node/npm

1. npm install
2. npm run start

# Deploy to AWS
Prerequisites: terraform, node/npm

1. Set up AWS credentials:
	i. export AWS_REGION=us-east-1
	ii. export AWS_ACCESS_KEY_ID={YOUR_KEY_ID}
	iii. AWS_SECRET_ACCESS_KEY={YOUR_SECRET_KEY} 
2. Enter the infrastructure directory: `cd infrastructure`
3. Initialize terraform: `terraform init`
4. Build latest code: `npm install && npm run build`
5. Apply terraform: `terraform apply`

# Deploy to Google Cloud
Prerequisites: gcloud cli, node/npm

1. Configure Gcloud cli: `gcloud auth login` 
2. Set project ID: `export PROJECT_ID=pneuma-312021`
2. gcloud app deploy --project=$PROJECT_ID  