# Rushkoff Archive

<img src="./assets/avatar.svg" width="150" alt="Rushkoff Avatar" title="Rushkoff Avatar">

This is the source code repository for the Rushkoff Archive website, currently at:

https://rushkoff.github.io/rushkoff-archive/

## What's here

The top-level folder contains support code, configuration, and documentation, like this README.md file.

Folders within are:

 - `.github/workflows/` - Configuration for the GitHub [Action][actions] which rebuild the site.
 - `assets/` - Images and other what-not used in documentation etc. (not those used for the site).
 - `src/` - The actual Jekyll site.
 - `scripts/` - Scripts used for the initial population and subsequent maintenance of the repository.

## For Content Editors:

There used to be a non-techy friendly UI for editing the content at [Forestry.io][forestry] but that application was end-of-lifed in April 2023. A replacement may be implemented, perhaps using the successor to Forestry, [TinaCMS][tinacms], but this is work in progress at the time of writing.

In the mean time you can edit the articles directly in GitHub's UI, see [EDITORS.md](./EDITORS.md) for more information.

There is a GitHub Action which rebuilds the website whenever changes are committed to the master branch of this repository. To check the state of this action look on the [Actions Tab][actions] of this project.  You can also trigger the action manually there.

If there are problems building, contact a developer who has access to the project. A sensible way to do this is to submit an issue describing a problem in the [Issues][issues] tab on the GitHub project page. When doing this it is extremely helpful to explain what the problem is - and importantly - how a developer would recreate the problem you're seeing.

## For Development

Developers can clone this repository, and assuming Jekyll and the other prerequisites are installed on their development computer, build a copy there.

Pushing changes back to the `master` branch should trigger a site rebuild.

More details in [DEVELOPERS.md](./DEVELOPERS.md).

[forestry]: https://forestry.io
[tinacms]: https://tina.io
[actions]: https://github.com/rushkoff/rushkoff-archive/actions
[issues]: https://github.com/rushkoff/rushkoff-archive/issues
