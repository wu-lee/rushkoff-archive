<img src="./assets/avatar.svg" width="150" alt="Rushkoff Avatar" title="Rushkoff Avatar">

# Rushkoff Archive

This repository contains code to extract the posts stored at
https://api.archive.rushkoff.com/.

To execute the extraction, run:

    posts2yaml.rb  # to get Markdown with a YAML metadata header
	
Or:

    posts2tsv.rb   # to get tab-delimited values suitable for spreadsheet import
	
Requires Ruby 2.x or later.

Note, there is currently a dump of the posts in YAML format under
[docs/_articles/][1], included for inspection. This is a work in
progress.

This dump additionally also serves as a basis for a [GitHub Pages][2]
static site generation at https://wu-lee.github.io/rushkoff-archive/
but could be altered later. When pages here are edited, the site
should get upated accordingly as soon as the changes are pushed into
the repository on GitHub.

[1]: ./docs/_articles
[2]: https://pages.github.com/
