# Accessing S3 from EC2 Instance:
Create an IAM instance profile that grants access to Amazon S3
1.	In AWS "Services" open the "Identify and Access Management"(IAM) console under the "Security, Identity and Compliance" section. It can also be searched from the top search bar, so you don’t have to look through hundreds of AWS services.
2.	Choose "Roles" in the IAM console and click on "Create role".
3.	Select AWS Service, and then choose EC2.
> Note: Creating an IAM role from the console with EC2 selected as the trusted entity automatically creates an IAM instance profile with the same name as the role name. However, if the role is created using the AWS Command Line Interface (AWS CLI) or from the API, an instance profile isn't automatically created.
4.	Select Next: Permissions.
5.	Search for the "AmazonS3FullAccess" managed policy and then select it. If you want to attach multiple policies to a role, you can do that as well.
> Note: We can also create a custom policy that grants access to specific buckets.
6.	Select Next: Tags, and then select Next: Review.
7.	Enter a Role name, and then select Create role.

# Attach the IAM instance profile to the EC2 instance:
1.	Open the Amazon EC2 console.
2.	Choose Instances.
3.	Select the instance that you want to attach the IAM role to.
4.	Choose the Actions tab, choose Instance Settings, and then choose Attach/Replace IAM role.
5.	Select the IAM role that you just created, choose Apply, and then choose Close. The IAM role is assigned to your EC2 instance.

# Validate permissions on your S3 bucket:
1.	Open the Amazon S3 console.
2.	Select the S3 bucket that you want to verify the policy for.
3.	Choose Permissions.
4.	Choose Bucket Policy.
5.	Search for statements with Effect: Deny.
6.	In your bucket policy, edit or remove any Effect: Deny statements that are denying the IAM instance profile access to your bucket. For instructions on editing policies, see Editing IAM Policies.

# Validate network connectivity from the EC2 instance to Amazon S3:
1. Verify that the EC2 instance has connectivity to S3 endpoints.
2. The instance must be one of the following:
	- EC2 instance with a public IP address and a route table entry with the default route pointing to an Internet Gateway.
	- Private EC2 instance with a default route through a NAT gateway.
	- Private EC2 instance with connectivity to Amazon S3 using a Gateway VPC Endpoint.

# Validate access to S3 buckets:
1.	Install the AWS CLI.
2.	Verify access to your S3 buckets by running the following command:
	- aws s3 ls
> Note: S3 objects that are encrypted with an AWS Key Management Service (AWS KMS) key, must have kms: Decrypt permissions granted in the IAM role attached to the instance and in the KMS key policy in order for a copy or download to be successful.