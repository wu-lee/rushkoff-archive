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
[src/_articles/][1], included for inspection. This is a work in
progress.

This dump additionally also serves as a basis for a [GitHub Pages][2]
static site generation at https://wu-lee.github.io/rushkoff-archive/
but could be altered later. When pages here are edited, the site
should get upated accordingly as soon as the changes are pushed into
the repository on GitHub.


## Running in development mode

To run Jekyll in development mode, see [3][].  In brief, assuming
you're on a Unix-like OS and have Git, Ruby, and Ruby's Bundler
command installed:

- Check out this repository locally: `git clone git@github.com:wu-lee/rushkoff-archive.git`
- Change to the `src` folder: `cd rushkoff-archive/src`
- Install Jekyll: `bundle install`
- Run Jekyll: `bundle exec jekyll serve`
- This should print out the server address to use, typically http://127.0.0.1:4000. Open that in a browser.
- Edits should trigger Jekyll to rebuild the site automatically.



[1]: ./src/_articles
[2]: https://pages.github.com/
[3]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
