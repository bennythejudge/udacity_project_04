Logbook

- add media query to css/print.css



18/12: adding async to the Google analytics script - by definition one script that should not block



Tools, links, readings and more

https://developer.chrome.com/devtools/docs/timeline
http://www.webpagetest.org

http://googlewebfonts.blogspot.co.uk/2010/09/optimizing-use-of-google-font-api.html
https://developers.google.com/fonts/docs/webfont_loader
https://github.com/typekit/webfontloader 
https://www.youtube.com/watch?v=vBHt61yDO9U 
http://gtmetrix.com/ 
http://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import/12380004#12380004 
https://www.youtube.com/watch?v=sqesm0euf9M (webfonts with Ilya Gregorik)
https://www.youtube.com/watch?v=YV1nKLWoARQ (Ilya Gregorik)



List of pages to be analyzed and optimized (using the github page as serving location):
http://bennythejudge.github.io/

http://bennythejudge.github.io/project-2048.html 
http://bennythejudge.github.io/project-webperf.html 
http://bennythejudge.github.io/project-mobile.html 
http://bennythejudge.github.io/views/pizza.html 


Checklist:
1) above the fold CSS vs. all the other CSS
2) image optimization
3) minify everything
4) compression? is that a web server level feature or can I implement it otherwise?
5) JavaScript: can it be deferred - async?



Optimizing fonts downloading:
"Optimizing font rendering with inlining
A simple alternative strategy to using the Font Loading API to eliminate the “blank text problem” is to inline the font contents into a CSS stylesheet:
CSS stylesheets with matching media queries are automatically downloaded by the browser with high priority as they are required to construct the CSSOM.
Inlining the font data into CSS stylesheet forces the browser to download the font with high priority and without waiting for the render tree - i.e. this acts as a manual override to the default lazyload behavior.
The inlining strategy is not as flexible and does not allow us to define custom timeouts or rendering strategies for different content, but it is a simple and robust solution that works across all browsers. For best results, separate inlined fonts into standalone stylesheet and serve them with a long max-age - this way, when you update your CSS you are not forcing your visitors to redownload the fonts."
From: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en (23/12/2014)


