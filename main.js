canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

width_of_rover = 100;
height_of_rover= 100;

nasa_mars_images = ["nasa_image_1.jpg","nasa_image_2.jpg","nasa_image_3.jpg","nasa_image_4.jpg"];
random_no = Math.floor(Math.random() * 4);

background_image = nasa_mars_images[random_no];

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, width_of_rover, height_of_rover);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37')
    {
        left();
        console.log(left);
    }

    if(keyPressed == '38')
    {
        up();
        console.log(up);
    }

    if(keyPressed == '39')
    {
        right();
        console.log(right);
    }

    if(keyPressed == '40')
    {
        down();
        console.log(down);
    }
}
function left()
{
    if (rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function up()
{
    if (rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow key is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if (rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
    