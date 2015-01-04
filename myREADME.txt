Udacity - Project nr. 4 - Optimizing web performances
Optimizing main.js
A Logbook

The optimized version is available online at 
http://bennythejudge.github.io


Notes on adherence to rubric
01. all 5 pages achieve a PageSpeed score of 90 or more
02. the static pages seem to be getting the required 60fps, and are quite uniform (see attached
    screenshots)
    pizza.html and main.js show 1 peak (below 60fps) when the page is first rendered which I have 
    not been able to eliminate.
    Scrolling instead seems consinstently at 60fps or above and quite uniform.
03. changes have been made. In terms of tools I have used uncss and devtools (audit and profiling) 
    in Chrome
04. comments have been added in main.js to signal changes
05. this file has been provided to document the changes, the tools used and articles and posts read.

Changes made to the source
01. improving all loops by caching variables
02. removing the getElementById at each iteration - it's not necessary plus deleting the variable at the end of the loop:
            var pizzasDiv = document.getElementById("randomPizzas");
            for (var i = 2; i < 100; i++) {
              // var pizzasDiv = document.getElementById("randomPizzas");
              pizzasDiv.appendChild(pizzaElementGenerator(i));
            }
            delete pizzasDiv;
05. caching document.body.scrollTop: 
    using the CPU profiling of devtools I noticed that get scrollTop had a 
    very high CPU usage, which draw me to this part of the code and helped me identify this 
    as a possible optimization. It seems to be quite effective in bringing most of the scrolling
    at or above 60fps. There are still spikes below the 30fps to be investigated
06. embedding CSS
    both css files have been inlined to prevent blocking the rendering process. Both have been cleaned from unused elements
    using the devtools audit feature
07. limiting updatePositions loop to the "visible" pizzas, that is to say the pizzas which are within the visible window in the 
    browser.
    First I need to obtain the size (http://www.w3schools.com/jsref/prop_win_innerheight.asp)
    Then inside the loop only change pizzas where the top is less than or equal to the window height
08. PageSpeed Insights recommended adding image size to the background pizza image
09. implementing the use of requestAnimationFrame as indicated by various sources, and in particular:
    http://www.html5rocks.com/en/tutorials/speed/animations/
    The change consists in not calling directly updatePositions to update the background sliding pizza, but to 
    let the browser do that in its own time using the requestAnimationFrame.

Optimizing index.html
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


Dated notes:
18/12: adding async to the Google analytics script - by definition one script that should not block

Other notes
- add media query to css/print.css

Tools, links, posts, readings and more
http://www.html5rocks.com/en/tutorials/speed/animations/
On the theme of using requestAnimationFrame instead of calling updatePositions directly
in order to be in sync with the refresh cycle of the browser and avoid causing reflowing and repainting

https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/
On the theme of how to avoid creating blockages of the CRP when using JavaScript resources.
How the approach has changed with the introduction of "async" but also on the risks and limitations
of using it.

https://blogs.oracle.com/greimer/entry/best_way_to_code_a
Learning that something that I have always done instictively in my scripts in Perl or Python, has a technical name: "caching". 


Other resources used during P4 work
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
http://www.w3schools.com/jsref/prop_win_innerheight.asp (about window size)



List of pages to be analyzed and optimized (using the github page as serving location):
http://bennythejudge.github.io/                        (OK)
http://bennythejudge.github.io/project-2048.html       (OK)
http://bennythejudge.github.io/project-webperf.html    (OK)
http://bennythejudge.github.io/project-mobile.html     (OK)
http://bennythejudge.github.io/views/pizza.html        (OK)



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



