var canvas;
var context;
var timer;
var interval;
var player;
var score = 0;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	canvas.style.backgroundColor="grey";
	
	var amount = 5;
	var items = [];
	var hazards = [];
	
	player = new GameObject({width:50, height:50})
	player.x = canvas.width/2;
	player.y = canvas.height - 50;
	player.vx = 0;
	player.vy = 0;
	player.ax = 1;
	player.ay = 1;
	player.force = 1;
	player.color = "#eeff00";
	
	for(var i = 0; i < amount; i++)
	{
		items[i] = new GameObject({width:20, height:20});
		hazards[i] = new GameObject({width:20, height:20});
		
		items[i].color = "#00ff00";
		hazards[i].color = "#ff0000";
	
		items[i].x = Math.random() * canvas.width;
		items[i].y = Math.random() * canvas.height;
		items[i].vy = Math.random() * 10 + 3;
		
		hazards[i].x = Math.random() * canvas.width;
		hazards[i].y = Math.random() * canvas.height;
		hazards[i].vy = Math.random() * 10 + 3;

	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	

	context.fillStyle = "white";
	context.font = "30px Arial";
	context.fillText("Score: " + score, 20, 40);
	
	if (a) 
	{
		player.vx += -player.ax * player.force;
	}

	if (d) 
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;

	player.x += player.vx;
	player.y += player.vy;



	
	for(var p = 0; p < items.length; p++)
	{	
		items[p].y += items[p].vy;

		if (items[p].y > canvas.height)
        {
            items[p].y = -items[p].height;
			items[p].x = Math.random() * canvas.width;
            items[p].vy = Math.random() * 10 + 3;
        }

		if (items[p].hitTestObject(player)) 
		{
			score++
			player.color = "#36e636";
			setTimeout(function() {player.color = "yellow";}, 500);
			items[p].x = Math.random() * canvas.width;
			items[p].y = -items[p].height;
			items[p].vy = Math.random() * 10 + 3; 
		}

		items[p].drawRect();
	}

	for(var p = 0; p < hazards.length; p++)
	{	
		hazards[p].x += hazards[p].vx;
		hazards[p].y += hazards[p].vy;

		if (hazards[p].y > canvas.height)
        {
            hazards[p].y = -hazards[p].height;
			hazards[p].x = Math.random() * canvas.width;
            hazards[p].vy = Math.random() * 10 + 3;
        }

		if (hazards[p].hitTestObject(player)) 
		{
			score = 0;
			player.color = "#e63636";
			setTimeout(function() {player.color = "yellow";}, 500);
			hazards[p].x = Math.random() * canvas.width;
			hazards[p].y = -items[p].height;
			hazards[p].vy = Math.random() * 10 + 3; 
		}

		hazards[p].drawCircle();
	}

	player.drawRect();


}


