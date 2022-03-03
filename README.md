<img src="./assets/avatar.svg" width="150" alt="Rushkoff Avatar" title="Rushkoff Avatar">

# Rushkoff Archive

This repository contains code to extract the posts stored at
https://api.archive.rushkoff.com/.

To use, run:

    posts2yaml.rb  # to get Markdown with a YAML metadata header
	
Or:

    posts2tsv.rb   # to get tab-delimited values suitable for spreadsheet import
	
Requires Ruby 2.x or later.

Note, there is currently a dump of the posts in YAML format under
[posts/](./posts), included for inspection. This may be altered/and or
serve as a basis for static site generation later.

