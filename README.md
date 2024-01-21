# PyJS
A JS interpreter made in Python.

# How to install

## Linux/Mac
First, install Python. The way I like to install python is with ```brew install python3```, which should also install pip3.
Now, download the source code, unzip it, cd into the folder through Terminal/Konsole then type ```sudo install -v ./js /usr/local/bin```. After that, restart the terminal.
Before we run it though, type ```pip3 install dukpy```. This is an essential library that PyJS uses.
To test if it works, type ```js``` straight in terminal.

## Windows
Download the source code, install Python then move the js executable into the Windows folder.
After that, open cmd and type ```pip install dukpy```. Again, this is an essential library that PyJS uses.
To test if it works, type ```js``` straight in terminal.

# How to use
Create a file called <name>.js
Replace the <name> with whatever you want (no spaces).
Then in there, copy/paste the example code below.
After that, type ```js <file>.js```.
Again, replace the <file> with your js file's name.
Oh, and if you want to console.log(), there is no such thing here. You just type the name of the variable, and it prints it out.

# Example

```
'This is a test of the PyJS JavaScript interpreter.'
var o = 5;
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
e[o]
e[o] = 5;
e[o]
```
