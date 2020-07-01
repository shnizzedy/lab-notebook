# Jon's Lab Notebook

This blog uses [**The Interesting Times** theme for Jekyll](https://github.com/ohduran/the-interesting-times) by [Álvaro Duran](https://github.com/ohduran).

## Style guidelines

### external code transclusion

* Only in spec docs.
* Loads the full external script
1. Add a `<code />` element where you want the code to appear, and give that element an `id`.
2. Include
   ```HTML
   <script defer>external_code(url, elementID, codeLanguage)</script>
   ```
   somewhere in the page.

### lists

* Nested list items need exactly three spaces (`   `) of indentation in this flavor of Markdown.

### octicons

* For any [octicon](https://primer.style/octicons/), use the following Liquid syntax
   ```Liquid
   {% octicon octicon-name height:integer class:"right left" aria-label:alt-text %}
   ```
   For example, to load the pull request octicon with alt text PR:
   ```Liquid
   {% octicon git-pull-request height:12 class:"right left" aria-label:PR %}
   ```

---

## The Interesting Times - Jekyll Theme

[Live Demo](https://alvaroduran.com/the-interesting-times) &nbsp; | &nbsp; [Download](https://github.com/ohduran/the-interesting-times/archive/master.zip) &nbsp; | &nbsp; [Support Alvaro on Patreon](https://patreon.com/alvaroduran)

![mediumish](https://github.com/ohduran/the-interesting-times/blob/5f555ad4522ea920b125d8c8c75cf150d16565e8/assets/images/the-interesting-times.png?raw=true)


### Copyright

Copyright (C) 2019 Alvaro Duran, https://www.alvaroduran.com

**The Interesting Times theme for Jekyll** is designed and developed by [Alvaro](https://alvaroduran.com) and it is *free* under [MIT license](https://alvaroduran.mit-license.org/).

<a href="https://patreon.com/alvaroduran" target="_blank">Support me on Patreon</a>

### Contribute

1. [Fork the repo](https://github.com/ohduran/the-interesting-times).
2. Clone a copy of your fork on your local
3. Create a branch off of master and give it a meaningful name (e.g. my-new-feature).
4. Make necessary changes, commit, push and open a pull request on GitHub.

Thank you!
