Thanks for downloading my plug-in! This is a simple but elegant gallery that allows the user to learn about each gallery item before deciding to click it. It will enlarge the image of the gallery item being hovered over by the mouse while sliding in a description of the image beneath it. The user can decide to click on that image (which opens in a separate page) or move the mouse to the next item to learn about that instead. The demo shows three gallery items but the plug-in will provide five.

You can view this in action at http://kevinbrianfahy.github.io/galleryPlug-in/

I've made this easy for you to use without having to dig into my index.html or style.css files that I use for presentation, or be stuck using my class and id names.

To use this plug-in:

1. Copy and paste the contents of 'embedthis.html' wherever you want your gallery to be. You'll notice each img has a class name and a for attribute matching the id of the div the describes it. The class name and the for-id pair name can be changed to your liking without affecting the plug-in, as you'll read in step 3.
2. You'll need to include the plugin.css and plugin.js files in your website folder. Then, on the page that you've copied 'embedthis.html', you need to include a link to each file. At the top of your doc, in your `<head>`, copy and paste this link:

        <link type="text/css" rel="'stylesheet" href="plugin.css">

    At the bottom, just before `</body>`, copy and paste these scripts:

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>  
        <script src='plugin.js'></script>
        <script>  
        gallery.init({  
          yourclassname: '.kgp-gal-img'  
        });  
        </script>

3. If you want to change the class name of each li anchor tag in the embedthis file, you can. Simply replace '.kgp-gal-img' in the script you copied and pasted with your class name and you're good to go. The matching for-id pair names in the image and description paragraphs can be changed after 'description-'. The number is just a placeholder so feel free to insert whatever description you'd like after 'description-'. Just remember the for and the id must be the same. If you are inclined to change the name entirely, that also will not affect the plug-in as long you also change the `[id^="description-"]` selector in the plugin.css file.


Enjoy your gallery plug-in!!