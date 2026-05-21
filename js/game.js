var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	canvas.style.backgroundColor="grey";
	
	var amount = 25;
	var squares = [];
	var circles = [];
	
	player = new GameObject({width:50, height:50})
	player.x = canvas.width/2;
	player.y = canvas.height - 50;
	
	for(var i = 0; i < amount; i++)
	{
		squares[i] = new GameObject({width:20, height:20});
		circles[i] = new GameObject({width:20, height:20});
		
		squares[i].color = "#00ff00";
		circles[i].color = "#ff0000";
	
		squares[i].x = Math.random() * canvas.width;
		squares[i].y = Math.random() * canvas.height;
		squares[i].vy = Math.random() * 10 + 5;
		
		circles[i].x = Math.random() * canvas.width;
		circles[i].y = Math.random() * canvas.height;
		circles[i].vy = Math.random() * 10 + 5;

	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	for(var p = 0; p < squares.length; p++)
	{	
		squares[p].x += squares[p].vx;
		squares[p].y += squares[p].vy;

		if (squares[p].y > canvas.height)
        {
            squares[p].y = -squares[p].height;
            squares[p].vy = Math.random() * 10 + 5;
        }

		squares[p].drawRect();
	}

	for(var p = 0; p < circles.length; p++)
	{	
		circles[p].x += circles[p].vx;
		circles[p].y += circles[p].vy;

		if (circles[p].y > canvas.height)
        {
            circles[p].y = -circles[p].height;
            circles[p].vy = Math.random() * 10 + 5;
        }

		circles[p].drawCircle();
	}

	player.drawRect();


	

}


