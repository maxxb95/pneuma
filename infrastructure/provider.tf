provider "aws" {
  region     = var.region
}

# Shared location for terraform state files.
# files will be put in s3 under s3://<bucket>/<key>
terraform {
  backend "s3" {
    # Cannot use variables here
    bucket  = "pneuma-infrastructure"
    region  = "us-east-1"
    key     = "pneuma-website/terraform.tfstate"
  }
}
