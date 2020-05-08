# Accessing the AWS instance remotely:
   - The instance that we have made earlier can be accessed using any remote computer.
   - Windows instance can be accessed using remote desktop client on the machine which is used for accessing the instance we have created.
   - But here for the linux instance, we are using a software, MobaXterm to access the linux instance.
   - Here are the steps we need to follow to access the linux instance:
     1. Open MobaXterm Application.
     2. Click on Session (Top left corner).
     3. Here select the port using which the connection is to be made(SSH in our case).
     4. Enter the public IP of the instance we have created in the 'Remote Host section'.
     5. Enter the Username of the instance we have created in the 'Username section' (ec2-user in our case).
     6. Under advanced SSH settings add the private key used for the instance we created.
     7. Click on 'Okay'.

   - Now, if the connection is successful, terminal of linux would be launched in the application's console.
   - This is the linux instance's terminal that we have created.