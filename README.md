# Mint-Javascript-Search

To create a simple web app that allows you to search for something and then select the result to view on a new page.
 
 ￼<div style="text-align:center;">![Third screen recording](/static/img/search-screen-recording-3.gif)</div>
<br>
 
My first thoughts were that I'd like to create an application that was visual. I decided my data set would be a variety of images that were interesting to me.
<br>
<br>
From here I started to build the app in HTML, set up the folder structure and get the initial assets together. Such as the typeahead script and the link to bootstrap (Alternatively I could have made my own containers wth CSS, this would have removed the dependancy on Bootstrap for the small amount of CSS used). I also did basic styling to give the site a slightly better look. I then had to do some research for the JavaScript to be able to filter through the images.
<br>
<br>
The code was starting to come together and with some research from Jon Duckett's Javascript and Jquery book, the app began to take shape.
 

￼<div style="text-align:center;">![First screen recording](/static/img/image-screen-rec-1.gif)</div>
 
 <br>
Here we can see the code working, but it isn’t as dynamic as it could be. After researching this and speaking with another dev I found out that by styling the parentNode instead of the actual element, the images would then collapse rather than stay in place, like this:
 <br>
￼<div style="text-align:center;">![Second screen recording](/static/img/search-screen-recording-2.gif)</div>
 <br>
This is now visually much nicer as the images sit neatly in a grid and doesn’t feel so clunky. 
 <br>
As previously mentioned the images are in the HTML, but this isn’t very app like and might take a while to add hundreds of images. If I was to use a CMS like Wordpress I could use ACF(Advanced Custom Fields plugin), PHP and create a repeater. This would allow me to add the details and markup much easier and quicker within the CMS.
The code I would use for the PHP would look something like this:
 <br>
￼<div style="text-align:center;">![Php repeater](/static/img/php-repeater.png)</div>
 <br>
But as I am not using a CMS this isn’t how I would like to create this ‘app’, this is because there is no need for a CMS for this specific task and instead I can remove the markup inside the <div id=“gallery__container”> and create an array to store the images. Then loop through the array using a for loop and add them to DOM. This reduces the amount of markup needed to be written quite dramatically. It is similar to the code above as the JS will loop through the array and add the markup until there are no more images to add. The images can be stored in a separate JS file that is similar to a JSON file, this will need to be shared among both pages as they both require the data that is stored within the file. 
 <br>
 <br>
 The last bit to do was to create the pages for the selectable items. Changing the markup slightly can help link to new pages for the items. I did this by changing the DIV to an Anchor and adding a new page, in this instance the new page 'template' is details.html. The href allows the selected image to pass its name to the url as we see here in the for loop:
￼ <br>
￼<div style="text-align:center;">![For Loop](/static/img/for-loop.png)</div>
 <br>
Now that there is a new page, there needs to be another JS file specific to the details.html page. This is because the URL parameter needs to be returned so that an IF statement can be written within a For loop to get the correct image data.
 <br>
￼<div style="text-align:center;">![Details For Loop](/static/img/details-for-loop.png)</div>
 <br>
Now this provides searchable images that are linked to a separate page that pulls in the correct image and information about the image. As can be seen working below:
 <br>
￼<div style="text-align:center;">![Third screen recording](/static/img/search-screen-recording-3.gif)</div>
 <br>
#### Reflections
In my current job I do not get the opportunity to write much Javascript, and often spend most of my development time on frontend work involving Html, Css and some Php to include content within Wordpress CMS. This project has been a good challenge as it has enabled me to do solo research, such as find out what is needed for this web app. It has also allowed me to seek out help and engage with the developer community both on and offline.
<br>
I know that there are many ways to create a web app to search through data, and with more time, self initiated education and outside guidance from those more experienced than myself, I believe creating a web application using React would have been a better option as it is modular and the components are resusable.
<br>
I also know that the code I am using is quite old and there are newer ways to write the syntax, for instance using const or let for the variables, however using an older code language has its benefits as I now know what it looks like if I ever have to maintain it.
#### Things to improve
With more time spent there are quite a few improvements that could be made:
* Use newer technologies to build the web app eg React.
* Add some more styling when the images are hovered and when they disappear and make the actual pages look more interesting to grab users attention.  

#### Technologies
* HTML5
* CSS
* Javascript
* Bootstrap
* Typeahead

#### References<br>
<a href="https://twitter.github.io/typeahead.js/">typeahead</a> - twitter search <br>
<a href="https://github.com/LeoAJ/react-iTunes-search/blob/master/README.md">React iTunes Search</a> by <a href="https://github.com/LeoAJ">LeoAJ</a>
