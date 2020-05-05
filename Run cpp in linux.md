# How to execute a C++ program in Linux:
*We will need to set-up an environment on our local linux machine to compile and run our C++ programs successfully. For that we need to follow a few simple steps which are as follows.*

1. Open the terminal.

2. Type the following commands to update the list of packages on your linux machine and then to install the gcc or g++ complier.
    - sudo apt-get update
    - sudo apt-get install g++

To check gcc version type any of these commands.
    - g++ --version or gcc –v



3. Now go to that folder where you want to create your C/C++ programs. Suppose I am creating my programs in the Documents directory. Now type the following commands.
    - cd Documents/ (changes the current directory to documents)
    - sudo mkdir programs (males a new directory named as programs)
    - cd programs/ (changes the current directory from documents to programs)

4.  Open the file using any editor.
    - sudo gedit hello.cpp (for C++ prgrams).

5. Now add a C++ code in the file, save the code and exit.

6. Type the following command to compile the program.
    - g++ filename.cpp -o executable_file_name
    - Here, *filename.cpp* is the C++ program file and -o option is used to show the errors in the code. If no error founds then this will generate an executable file as executable_file_name.
    - e.g: g++ hello.cpp -o helloworld
    - Here, helloworld is the executable file which is generated. 

7. So we can execute the file by giving the following command.
    - ./helloworld

