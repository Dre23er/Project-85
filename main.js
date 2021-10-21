var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_image_imgTag = new Image();
	background_image_imgTag.onload = uploadBackground;
	background_image_imgTag.src = background_image;
	console.log(background_image_imgTag);

	greencar_imageTag = new Image();
	greencar_image_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
	console.log(greencar_imageTag)
}

function uploadBackground() {
	ctx.drawImage(background_image_imgTag,0,0, canvas.width, canvas.height);
}

function uploadgreencar() {
	
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10 
		console.log("when up arrow is pressed, x =" + greencar_x + "| y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y + 10 
		console.log("when up arrow is pressed, x =" + greencar_x + "| y = " + greencar_y)
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10 
		console.log("when up arrow is pressed, x =" + greencar_x + "| y = " + greencar_y)
	}
}

function right()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x + 10 
		console.log("when up arrow is pressed, x =" + greencar_x + "| y = " + greencar_y)
	}
}
