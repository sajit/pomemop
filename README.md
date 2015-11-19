#A mashup of different tools.
- maven
- grunt
- sass
- sass lint
- kss-node
- webjars

## An example project on how to build a maven based front-end libary  and then publish it as a webjar.

   Use the very helpful <a href="https://github.com/allegro/grunt-maven-plugin">Maven grunt plugin</a> to run grunt tasks.

## Please refer to <a href="//www.webjars.org/documentation" target="_blank">Webjar documentation</a>
on how to use webjars in a project.


Typical workflow
----------------
1. Use maven grunt plugin to lint sass, build css & the kss styleguide.
2. Run maven package to copy and bundle the compiled css file into a webjar

