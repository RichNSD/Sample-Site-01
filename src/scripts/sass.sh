#!/usr/bin/env bash

# This script compiles all the .scss files in the src/scss directory
# and outputs the compiled .css files to the src/css directory.

# The script requires the sass command line tool to be installed.
# The following command will verify if it is installed, and if not, install it.

if ! command -v sass &> /dev/null
then
	echo "sass command not found. Installing..."
	npm install -g sass
fi


# Compile the .scss files

sass src/styles/scss:src/styles