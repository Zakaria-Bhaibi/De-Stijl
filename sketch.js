function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);
	//draw the blue rectangle
	fill(0, 0, 255);
	rect(0, 650, 100, 140);
	//draw the white rectangles
	//bottom left
	fill(255, 255, 255);
	rect(0, 300, 100, 350);
	//top left
	fill(255, 255, 255);
	rect(0, 50, 100, 250);
	//bottom middle
	fill(255, 255, 255);
	rect(100, 650,450, 140);
	//bottom right
	fill(255, 255, 255);
	rect(550, 650,150, 60);
	// draw the yellow rectangle
	fill(255, 255, 0);
	rect(550, 710,150, 80);

}
