var newAva = document.getElementById('avatar');
var about = document.getElementById('aboutTag');
var portfolio = document.getElementById('portfolioTag');

about.addEventListener("mouseover", function() {
	newAva.src = 'monkey.png';
});

about.addEventListener("mouseout", function() {
	newAva.src = 'epothos.png';
});


portfolio.addEventListener("mouseover", function() {
	newAva.src = 'monkey.png';
});

portfolio.addEventListener("mouseout", function() {
	newAva.src = 'epothos.png';
});



