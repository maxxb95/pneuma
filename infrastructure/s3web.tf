resource "aws_s3_bucket" "web_bucket" {
    bucket = var.bucket_name
    acl = "public-read"

    website {
        index_document = "index.html"
    }
}

resource "aws_s3_bucket_policy" "web_bucket" {  
  bucket = aws_s3_bucket.web_bucket.id
  policy = <<POLICY
{    
    "Version": "2012-10-17",    
    "Statement": [        
      {            
          "Sid": "PublicReadGetObject",            
          "Effect": "Allow",            
          "Principal": "*",            
          "Action": [                
             "s3:GetObject"            
          ],            
          "Resource": [
             "arn:aws:s3:::${aws_s3_bucket.web_bucket.id}/*"            
          ]        
      }    
    ]
}
POLICY
}

