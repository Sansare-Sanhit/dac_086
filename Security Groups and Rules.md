# AWS Security Groups:
1. AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic. 
2. When you launch an instance on Amazon EC2, you need to assign it to a particular security group, you can assign up to five security groups to the instance.
3. After that, you can set up ports and protocols, which remain open for users and computers over the internet.
4. AWS Security Groups are very flexible. 
5. You can use the default security group and still customize it according to your requirement(although this is not recommended) or you can create a security group that you want for your specific applications.
6. For each security group, you add rules that control the inbound traffic to instances, and a separate set of rules that control the outbound traffic.

# Inbound Rules:
Inbound means incoming traffic coming to your EC2 instances. For that you have to add inbound rule. For web server generally we use port 80.

# Outbound Rules:
Outbound means outgoing traffic from your EC2 instances. To connect to internet or any browser you have to add outbound rule.