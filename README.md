To use this plug-in you'll want to include the css and js file in your website folder. you need an existing for-id pair between your gallery images and your text describing each image. If you are unfamiliar with this, the html doc will show you exactly what this looks like. When you have your for-id pair name, simply enter it below:
<script>
        gallery.init({
          descriptionimage: 'your for-id pair name here'
        });
</script>
Copy and past this entire snippet and place it right before your body end. Again, this is in the html doc for you to see.

Lastly, do not forget to include the link to the css doc in the head of your html. Copy and paste the below snippet. You'll also need to change the corresponding for-id pair name and gallery name in the css doc to your names for those selectors
<link type="text/css" rel="stylesheet" href="plugin.css">
Enjoy your gallery plug-in!!