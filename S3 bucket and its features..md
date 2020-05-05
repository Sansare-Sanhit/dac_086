# AWS S3(Simple Storage Service):
    * Amazon S3(Simple Storage Service) is a scalable, high-speed, low-cost web-based service designed for online backup and archiving of data and application programs. 
    * It allows to upload, store, and download any type of files and provides almost unlimited storage space. 
    * This service allows the subscribers to access the same systems that Amazon uses to run its own web sites. 
    * The subscriber has control over the accessibility of data, i.e. privately/publicly accessible.

#  Features of S3(Simple Storage Service):
1. Low cost and Easy to Use:
    - Using Amazon S3, the user can store a large amount of data at very low charges.

2. Secure:
    - Amazon S3 supports data transfer over SSL(Secure Sockets Layer) and the data gets encrypted automatically once it is uploaded. 
    - The user has complete control over their data by configuring bucket policies using AWS IAM(Identify and Access Management).

3. Scalable:
    - Using Amazon S3, there need not be any worry about storage concerns. 
    - We can store as much data as we have and access it anytime.

4. Higher performance:
    - Amazon S3 distributes content to the end users with low latency and provides high data transfer speeds.


# AWS Buckets:
   - Buckets are the storage mediums in AWS i.e we can store our data/information on cloud inside a bucket.
   - These buckets are globally unique. This means that while creating a bucket in AWS the bucket name should be unique across all the AWS accounts and regions.
   - Buckets are a part of S3(Simple Storage service) Service in AWS.

# Here are the steps to create a S3 bucket in AWS:
   1. After logging into the AWS console, select 'Services' from the top left corner. 
   2. Under Storage section, select 'S3'.
   3. Now, click on create bucket.
   4. As discussed earlier, enter a unique bucket name and the Region where the storage bucket need to be created.
   5. Once done with name and region, select the access settings for the bucket.
   6. Here, select the checkbox for 'Block all public access'(which is by default selected) if you want to keep the S3 bucket private and don't want any remote client to access the bucket.
   7. That's it, click on 'Create Bucket'.
   8. Upon successful creation of the bucket, click on the bucket name to access it and you can use it to host a website and many other such different applications and uses.