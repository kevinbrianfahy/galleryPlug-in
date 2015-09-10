Thanks for downloading my plug-in! I've made this easy for you to use without having to dig into my index.html file.

To use this plug-in:
1. Copy and paste the contents of 'embedthis.html' wherever you want your gallery to be. 

2. You'll need to include the plugin.css and plugin.js files in your website folder. Then, on the page that you've copied 'embedthis.html', you need to include a link to each file. At the top of your doc, in your `<head>`, copy and paste this link:

`<link type="text/css" rel="stylesheet" href="plugin.css">`

At the bottom, just before `</body>`, copy and paste these scripts:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>`
`<script src='plugin.js'></script>`
`<script>`
        gallery.init({
          yourclassname: '.kgp-gal-img'
        });
`</script>`

If you want to change the class name of each li anchor tag in the embedthis file, you can. Simply replace '.kgp-gal-img' in the script with your class name and you're good to go.


Enjoy your gallery plug-in!!