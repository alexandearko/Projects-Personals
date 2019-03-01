var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
cantidad = aleatorio(10, 25);
document.addEventListener("keyup", moverRein);

var reinX = 250;
var reinY = 0;

var vacaX = new Array;
var vacaY = new Array;

var cerdoX = new Array;
var cerdoY = new Array;

var polloX = new Array;
var polloY = new Array;

var fondo =
{
	url: "tile.png",
	cargaOK: false
}

var vaca = 
{
	url: "vaca.png",
	cargaOK: false
};

var cerdo = 
{
	url: "cerdo.png",
	cargaOK: false
};

var pollo = 
{
	url: "pollo.png",
	cargaOK: false
};
var rein = 
{
	url: "R.png",
	cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

rein.imagen = new Image();
rein.imagen.src = rein.url;
rein.imagen.addEventListener("load", cargarRein);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas()
{
	vaca.cargaOK = true;
	mantenerPosicion();
}
function cargarCerdos()
{
	cerdo.cargaOK = true;
	mantenerPosicion();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	mantenerPosicion();
}
function cargarRein()
{
	rein.cargaOK = true;
	dibujar();
}

function mantenerPosicion()
{
		for(i = 0; i < cantidad; i++)
		{
			var animales = aleatorio(1,3);
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			switch(animales)
			{
				case 1:
				papel.drawImage(vaca.imagen, x, y);
				vacaX[i] = x;
				vacaY[i] = y;
				break;

				case 2:
				papel.drawImage(cerdo.imagen, x, y);
				cerdoX[i] = x;
				cerdoY[i] = y;
				break;

				case 3:
				papel.drawImage(pollo.imagen, x, y);
				polloX[i] = x;
				polloY[i] = y;
				break;
			}
		}
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOK)
	{
		for(var i=0; i<cantidad; i++){
			papel.drawImage(vaca.imagen, vacaX[i], vacaY[i]);		
		}
	}
	if(cerdo.cargaOK)
	{
		for(var i=0; i<cantidad; i++){
			papel.drawImage(cerdo.imagen, cerdoX[i], cerdoY[i]);		
		}
	}
	if(pollo.cargaOK)
	{
		for(var i=0; i<cantidad; i++){
			papel.drawImage(pollo.imagen, polloX[i], polloY[i]);		
		}
	}
	if(rein.cargaOK)
	{
		papel.drawImage(rein.imagen, reinX, reinY)
	}
}

function moverRein(evento)
{
	var movimiento = 10;
	var teclas = 
	{
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
	};
	switch(evento.keyCode)
	{
		case teclas.UP:
			reinY = reinY - movimiento;
			dibujar(reinX, reinY);
		break;
		case teclas.DOWN:
			reinY = reinY + movimiento;
			dibujar(reinX, reinY);
		break;
		case teclas.LEFT:
			reinX = reinX - movimiento;
			dibujar(reinX, reinY);
		break;
		case teclas.RIGHT:
			reinX = reinX + movimiento;
			dibujar(reinX, reinY);
		break;
	}
}

function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}