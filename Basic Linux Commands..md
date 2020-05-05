# *Some basic Linux Commands*

**cd**
      -cd is change directory command it will take you to another directory.

**sudo su**
	-sudo su command will take you to the root user.

**pwd**
	-print working directory `pwd` will print thw path of the directory you are working in currently.

**mkdir**
	- make directory `mkdir` this command will create a directory with any specified name.

**vi** 
	-vi command is used to create a file and then use command `i` i.e insert command to make the file accessible to write in it.
	- then press escape and then command `:w` is used to write in the file.
	- then press escape (esc) and then type command `:q` to save and exit the changes made in the file.

**ls** 
	list `ls` command will list all the files present in the current directory.

#### **the navigation key on the keyboard can be used to see the recent used or executed commands**

    -**using key combination ctrl+R and then typing atleast first letter of the command we want to search we had used recently we can search for specific commands**
	-this is called as reverse search mechanism.    


# *Creating Multiple Directories in Linux*

**mkdir {1..50}**
	- Using this command we can create multiple directories in the linux operating system.
	- This command makes directories with the names as '1','2','3' and so on till '50'.

**mkdir day{1..50}**
	- If we simply add any name before the braces in the command then this name will be added before the number eg: 'day1','day2','day3' and so on till 'day50'.