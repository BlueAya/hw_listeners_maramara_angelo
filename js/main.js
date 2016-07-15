// This event listener listens for when the user clicks on the text that possesses the id of 'clickhere' and then creates the clickable link that takes you to the source of the poem onto the page.

var clickhere = document.getElementById('clickhere');

clickhere.addEventListener('click', function () {
    var myElement = document.createElement('A');
    myElement.innerHTML = '<a target="_blank" href="http://www.familyfriendpoems.com/poem/summer">Family Friendly Poems</a>';
    document.getElementById('maincontent').appendChild(myElement);
});

//This event listener listens for when the user mouses over the first image with the class name of 'beachimg'. The image then proceeds to scale, doubling both in height and width.

var beachimg = document.getElementsByClassName('beachimg')[0];

beachimg.addEventListener('mouseover', function () {
    beachimg.setAttribute('style', 'transform: scale(2, 2);');
});

//This event listener listens for when the user moves their mouse off of the first image with the class name of 'beachimg'. The image then proceeds to scale, back to its original height and width. If this mouseout event had not been created, the image would remain scaled at double height and width unless you refresh the browser.

beachimg.addEventListener('mouseout', function () {
    beachimg.setAttribute('style', 'transform: scale(1, 1);');
});

//This event listener listens for when the user mouses over the second image with the class name of 'beachimg'. The image then proceeds to rotate 180 degrees.

var beachimg2 = document.getElementsByClassName('beachimg')[1];

beachimg2.addEventListener('mouseover', function () {
    beachimg2.setAttribute('style', 'transform: rotate(180deg);');
});

//This event listener listens for when the user moves their mouse off of the second image with the class name of 'beachimg'. The image then proceeds to return back to its original state.

beachimg2.addEventListener('mouseout', function () {
    beachimg2.setAttribute('style', 'transform: initial;');
});


//This event listener listens for when the user mouses over the third image with the class name of 'beachimg'. The image then proceeds to skew 10 degrees both on the X and Y-axis.

var beachimg3 = document.getElementsByClassName('beachimg')[2];

beachimg3.addEventListener('mouseover', function () {
    beachimg3.setAttribute('style', 'transform: skew(10deg, 10deg);');
});

//This event listener listens for when the user moves their mouse off of the third image with the class name of 'beachimg'. The image then proceeds to return back to its original state.

beachimg3.addEventListener('mouseout', function () {
    beachimg3.setAttribute('style', 'transform: initial;');
});
