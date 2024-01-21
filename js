#!/usr/bin/env python3
# Imports
from sys import argv
from os import path, mkdir
import dukpy

# Actual code
if len(argv) > 0:
    try:
        if path.exists(argv[1]):
            if argv[1].endswith(".js"):
                interpreter = dukpy.JSInterpreter()
                if path.exists("./js_modules"):
                    interpreter.loader.register_path("./js_modules")
                else:
                    print("[INFO] I just created a js_modules folder where you can keep all your JS modules.")
                    mkdir("./js_modules")
                    interpreter.loader.register_path("./js_modules")
                file = open(argv[1], 'r')
                lines = file.readlines()
                for line in lines:
                    output = interpreter.evaljs(line)
                    if output is None:
                        print(" ")
                    else:
                        print(output)
            else:
                print("The file you gave me is not a JS file.")
        else:
            print("The file you gave me does not exist.")
    except:
        print("usage: js <file>.js")
else:
    print("usage: js <file>.js")
