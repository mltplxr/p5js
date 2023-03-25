const palette = ["#222227","#2c2e3e","#30343e","#2b272e","#2b242a","#0b0b13","#0a0a0f"]

const alphaSeed = 200 //95

// num of letters in words
const wordMin = 30 //3
const wordMax = 80 //8



const amp = 1.25; //1.25 amplification, zoom

function setup() {
if ( windowWidth > windowHeight) {
	   createCanvas(windowHeight, windowHeight);
	} else {
	   createCanvas(windowWidth, windowWidth);
	}
  background("#FFF0F5"); 

  strokeWeight(1); //2
  stroke(0); 
	noFill()

	alphabet = createAlphabet(300) //26
	
	stroke( color( random(palette) ))
	
	randomSeed(Math.floor(Math.random() * 111)); //100000
    x = 10 //20 width page
	y = 80 //30 length page
	stepx = 40 //30
	stepy = 111 //40 determines how squashed the material is
	newline = false
	
	space = 1
	word = random(wordMin,wordMax)
	for (let i = 0 ; i < 20; i++) { //180 amount of material
		mvts = random(alphabet)

		// console.log( mvts )
		if (space < word) {
			stroke( color( random(palette) ))
		  distance = write(mvts, x, y) 
			space ++
		} else {
			if ( random(0,100) < 200 ) { //0,100 ,20
		  	// end of sentence
			  // circle( x + (1.5*distance) * amp, y+stepy/2, 3)
			  fill(0)
				circle( x + 7, y+stepy/ 4, 0.8 ) //+5, /2, 4
				noFill()
				newline = true
		  } else {
				// space
        distance = stepx // space	  
				space = 2 //0
			  word = random(wordMin,wordMax)
		  }
		}

	  x += distance	* amp
	  if ( x > width - distance	* amp) {
			// end of line
     newline = true
		}
		
		if ( newline ) {
			x = 10 //20
	  	y = y + stepy
		  space = 1 //0
			word = random(wordMin,wordMax)
			newline = false
		}
		
	}
	
}



function createAlphabet(nbLetters = 33) { //26
  randomSeed( alphaSeed );
	alphabet = []
	for (let i = 0 ; i < nbLetters; i++) { //0
    alpha_ = createLetter( random(10, 9) ) //5,7
		/*
		textSize(20);
    textWrap(CHAR);
		text(alpha_.toString(), 10,30, 300)
		*/
		alphabet.push( alpha_ )			
	}
	// console.log(alphabet)
	// console.log(alphabet.length)
	return alphabet
}

function createLetter(nb = 15) { //5
	const hMax = random(10,20) //0,10
	
  let mvts = []
	mvts.push( [8,11] ) //0,10 cursive vs rune
	for (let i = 0 ; i < nb; i++) {
		let x = random(40,10) //0,20
		let y = random(10,-10-hMax) //0,20
    mvts.push( [x,y] )
	}		
	mvts.push( [20,80] ) //20,10 (org) long letters (30,200)
	return mvts
}



function write(mvts, x, y) {
    push()
	  distance = 0 //0
		beginShape();
	    vertex( x + mvts[0][0] * amp, x + mvts[0][1] * amp) //00 01
			for (const m of mvts) {
				xx = x + m[0] * amp //0
				yy = y + m[1] * amp //1
				curveVertex(xx, yy)
				if ( m[0] > distance) { //0
           distance = m[0] //0
				}
			}
		  tot = mvts.length -2 //-1
	    vertex( x + mvts[tot][0] * amp, x + mvts[tot][1] * amp)
	//0 1
			endShape();
	  pop()
	return distance
}
// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  if (millis() - lapse > 4){ //400
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".png"); 
    lapse = millis();
  } 
  
}

