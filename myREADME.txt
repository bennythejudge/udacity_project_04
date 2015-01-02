Logbook

index.html
1) using uncss I have removed 2 tags from the style.css
because they were not used (b and ol). I have also brought 
the body background in the existing tag entry - i believe it makes no difference.
2) inlined style.css: I decided that this stylesheet was small enough to be inlined which would avoid blocking the CRP.
3) google analytics script: added async; this script is the perfect example of a script that can be deferred
4) moved the loading of the Google font Open Sans 400 and 700 to the end of the body using a JavaScript to load the font using the WebFont library in the async version.
There is a downside: a FOUC is now visible in the rendering, with the font being changed on the fly during rendering.
5) perfmatters.js also deferred using async as it seems another perfect candidate script to be deferred.
6) images have been optimised using and online JPEG manipulation tool, by compressing and resizing them.
7) the mobile section of style.css (subject to media query) has been extracted and inlined

TODO:
******
-> USE GRUNT to minify etc.. and create a "production" version of the code in a separate folder
******
index.html
improve the CSS by creating ID or CLASS to avoid using
child selectors
E.g.:
header p span: here the browser for every span must check if it's the child of p and then of header.
add an id header-p-span and use it to qualify the span tag and use the ID in the CSS selector

Dated notes:
18/12: adding async to the Google analytics script - by definition one script that should not block

Other notes
- add media query to css/print.css

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
https://tinypng.com (image optimization)
http://www.picresize.com/results



List of pages to be analyzed and optimized (using the github page as serving location):
http://bennythejudge.github.io/                        (OK)
http://bennythejudge.github.io/project-2048.html       (OK)
http://bennythejudge.github.io/project-webperf.html    (OK)
http://bennythejudge.github.io/project-mobile.html     (OK)
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


Tackling main.js
1) improving all loops by caching the length (https://blogs.oracle.com/greimer/entry/best_way_to_code_a)
2) in the following snippet:
    a) remove the getElementById at each iteration - it's not necessary
    b) delete the variable at the end
            // This for-loop actually creates and appends all of the pizzas when the page loads
            // TODO: DO WE REALLY NEED TO getElementById for every loop? 
            // TODO: could we not get it once and then append to that?
            var pizzasDiv = document.getElementById("randomPizzas");
            for (var i = 2; i < 100; i++) {
              // var pizzasDiv = document.getElementById("randomPizzas");
              pizzasDiv.appendChild(pizzaElementGenerator(i));
            }
            delete pizzasDiv;
3)




