# What is an Instance?
- An Instance refers to a virtual machine from a public or private cloud network with computing resources available over the cloud  which can be accessed remotely. 
- An instance works exactly like the physical machine without the need of physical set up i.e hardware.
- An Instance in the cloud can be easily moved from one physical machine to another and can also be easily scaled up or down according to one's requirement without actually going down.
 

# How to create an Instance?
1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.
2. If you already have an instance running, click on running instances otherwise skip this step and choose Launch Instance.
3. Choose an Amazon Machine Image (AMI), find an Amazon Linux AMI at the top of the list and choose Select.
4. Choose an Instance Type i.e the amount of resources you need and then Choose Next: Configure Instance Details.
5. Configure Instance Details, Choose Next: Add Storage.
6. Select the amount and type of storage you want, Choose Next: Add Tags.
7. Name your instance and choose Next: Configure Security Group. 
8. Configure Security Group, set Assign a security group to Select an existing security group or you can create the following security group that allows SSH.
    - Type: SSH
    - Protocol: TCP
    - Port Range: 22
    - Source: Anywhere 0.0.0.0/0 
9. Choose Review and Launch.
10. Choose Launch.
11. Select the check box for the key pair that you created, and then choose Launch Instances.