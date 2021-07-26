resource "aws_cloudfront_distribution" "main" {
    origin {
        domain_name = aws_s3_bucket.web_bucket.bucket_regional_domain_name
        origin_id = "S3-${aws_s3_bucket.web_bucket.bucket}"
    }

    # By default, show index.html file
    default_root_object = "index.html"
    enabled = true

    # If there is a 404, return index.html with a HTTP 200 Response
    custom_error_response {
        error_caching_min_ttl = 3000
        error_code = 404
        response_code = 200
        response_page_path = "/index.html"
    }

    default_cache_behavior {
        allowed_methods = ["GET", "HEAD"]
        cached_methods = ["GET", "HEAD"]
        target_origin_id = "S3-${aws_s3_bucket.web_bucket.bucket}"
        # Forward all query strings, cookies and headers
        forwarded_values {
            query_string = true

            cookies {
                forward = "none"
            }
        }
        viewer_protocol_policy = "allow-all"
        min_ttl = 0
        default_ttl = 3600
        max_ttl = 86400
    }

    # aliases = ["${var.bucket_name}"]

    # Distributes content to US and Europe
    price_class = "PriceClass_100"
    # Restricts who is able to access this content
    restrictions {
        geo_restriction {
            # type of restriction, blacklist, whitelist or none
            restriction_type = "none"
        }
    }

    viewer_certificate {
        cloudfront_default_certificate = true
    }
}
