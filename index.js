function buttonClick () {
	const light = document.getElementById("light")
	const button = document.getElementById("switch") 
	const LIGHT_ON = "/home/brianhysinger/Documents/Roadie/smalldogpic.jpeg"	
	const LIGHT_OFF = "/home/brianhysinger/Documents/Roadie/bigdogdownload.jpeg"
	if (light.src.includes(LIGHT_OFF)){
			light.src = LIGHT_ON
			button.innerText = "Roadie thinks she is This"
			button.style.backgroundColor = "yellow"
	} else{
			light.src = LIGHT_OFF
			button.innerText = "but is really That"
			button.style.backgroundColor = "red"
	}
}

