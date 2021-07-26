locals {
  mime_types = jsondecode(file("./mime.json"))
}

resource "aws_s3_bucket_object" "content_upload" {
	for_each = fileset("../build/", "**/*")
	bucket = aws_s3_bucket.web_bucket.id
	key = each.value
	source = "../build/${each.value}"
	etag = filemd5("../build/${each.value}")

    content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}
