# JB
Personal site showcasing skills, portfolio and info about me. 

## Setup

I'm using [Yeoman](http://yeoman.io/) with its [webApp generator](https://github.com/yeoman/generator-webapp)

After cloning, you just need to run:

```
bower install
npm install 
```

In order to start localhost and get all gulp tasks running, run:
```
gulp serve
```

To compile and put files on production, run:
```
gulp
```
..as it's the default task. 

This project is using 
- jQuery
- underscore.js
- bootstrap
- SASS

Development version files are located in the **app** folder. Gulp hosts pre-compiled SCSS from **.tmp** folder. Compiled version will be placed in the **dist** folder.

Gulp tasks include also browser sync plugin also accross local network. Use _external localhost link_ to sync from another device

Enjoy!

## Progress

!RWD currently not supported ;( 

### Pages
******
#### Home (index.html)
*Done*

#### Webdev (webdev.html)
*Currenlty in progress. Will be used as a template for Calligraphy page*
##### Sections 
- **Header** - **DONE** :: version2; animations; menu; setTimeout triggers | **TODO** :: adding links to buttons in menu and the Git button; seearch (do I need it?)
- **Overview** - **DONE** :: animations; svg icons | **TODO** :: adding copies
- **Skills** - **DONE** :: AJAX loader for skills.json; setTimout & onWindowScroll triggers; skill levels | **TODO** :: changing '%' to strings ['basic','intermediate','advanced','expert']
- **Projects** - **DONE** :: AJAX loader for projects.json; setTimout & onWindowScroll triggers; lightbox; lightbox-category navigation built from projects.json unique _category_ key values | **TODO** :: passing preventDefault to lightbox also, not only thumbnails | adding additional phothos into the lightbox view
- **Testimonial** - **DONE** :: General one element scaffolding | **TODO** :: testimonials.json; AJAX loader for testimonials.json; one-element-focus infinite jQuery slider forEach .testimonial-element
- **Contact** - **DONE** :: scaffolding; social bubbles & :hover animations; google map import set to *Kazimierz* | **TODO** :: bubbles .on('click', **) actions
- **Footer** - **DONE** :: scaffolding; logo placement; shadows | **TODO** :: footer navigation

**SECTIONS TODO** :: 
none at the moment

#### Calligraphy (calligraphy.html)
*Will be created as a sibling page of WebDev with slightly different objects adapted to the content differences. It will also be created in reddish theme instead of the Webdev's blue one.*

#### About Me (about.html)
_I'm considering to create a very small page with some more information about me, short introduction, academic experience, hobbies and stuff like that. **Not needed in MVP**_
