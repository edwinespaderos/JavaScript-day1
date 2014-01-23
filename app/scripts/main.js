console.log('El Edwin');

var wolf = {
	name: "Juan",
	legs: 4,
	ears: 2,
	tail: 1,
	food: ["fish", "rabbit", "hiker", "jogger"],
	
	eats: function(person){
		person.eaten = true
		console.log ('That was good!')
	}
	
};
 
var hiker = {
	 name: "Dan",	 
	 legs: 2,
	 hat: 1,
	 boots: true,
	 eaten: false,
	 backpack: ["flashlight", "map", "rope", "food"]

	

};

var jogger = {
	name: "Jane",
	legs: 2,
	shoes: true,
	fannypack: ["ipod", "snack", "wallet"],
	eaten: false,

};

// countEars: function(){
// 	console.log('I have' this.ears 'On my back')
// };