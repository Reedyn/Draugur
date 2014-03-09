Draugur [![Gittip](http://img.shields.io/gittip/reedyn.svg)](https://www.gittip.com/reedyn/) [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Project Status](http://stillmaintained.com/reedyn/Draugur.png)](http://stillmaintained.com/reedyn/Draugur)
=======

Ghost theme based on the default Casper theme and inspired by GitHub and Medium for a simple design focused on readability. Good for code.

### [Demo](//gustavlindqvist.se) / [Download](https://github.com/reedyn/Draugur/releases/latest) / [Discussion](https://ghost.org/forum/themes/5427-draugur-minimalistic-theme)

## Features
#### Cover page
The landing page is very similar to the default one of Casper, although without the site logotype.

#### Built with SASS
If you know HTML and CSS making modifications to the theme should be super simple.

#### Mobile First - Responsive
Draugur is responsive with a mobile first approach.

#### Code Syntax Highlighting
Draugur has Syntax highlighting using Highlight.js and GitHub's syntax colors.

#### Optional Comments
Draugur has comments through Disqus.

#### Structured data
Draugur has structured data according to [schema.org](http://schema.org)

#### Development
The following features are currently under development:

 * Featured images
 * Advanced image support (Gallery, different sized such as covering full width, fit width etc)
 * Tags (not implemented right now as they aren't really being used by Ghost)

Ghost is still a work in progress with many features not yet implemented, as Ghost gets updated new features will be added to Draugur.

## Installation

 1. Download the theme using the link above.
 2. Extract using your preferred program
 3. Find the file called `links.hbs` in the folder `partials`
 4. Change the links to match your own accounts. You can change the icons displayed by changing the class of the `i` tag. [The complete list of icons can be found at Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/#brand).
 5. Find the file called `footer.hbs`, also in the folder `partials`
 6. Edit the footer information if you so please.
 7. Follow the installation instructions for a theme in the official [Ghost Documentation](http://docs.ghost.org/themes/)

### Adding comments (Disqus, although any comment-system should work)

 1. Find the file called `comments.hbs` in the `partials`-folder and the file called `post.hbs` in `root`.
 2. Add the following code to those files:

#### comment.hbs
```html
<section class="comments">            
    <div id="disqus_thread"></div>
    <script type="text/javascript">
        var disqus_shortname = 'yourdisqusshortnamehere';
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
</section> 
```

#### post.hbs
```html
            ...
            <section class="post-content">
                {{content}}
            </section>
            {{> comments}} <!-- Insert this line here -->
        </article>
        ...
```
## Screenshot

![](http://gustavlindqvist.se/content/images/2014/Feb/draugur-example.png)



