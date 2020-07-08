  $(document).ready(function(){
	$("#mainBody").delay(3000).fadeTo(1000, 1);
	$("#div1").delay(900).fadeTo(10, 1);
	$("#div2").delay(2000).fadeTo(10, 1);
	$("#div3").delay(3000).fadeTo(10, 1);
	$("#arrow").delay(3000).fadeTo(1000, 1);

	setTimeout(function(){firstH1Animate();}, 900);
	setTimeout(function(){secondH1Animate();}, 2000);
	setTimeout(function(){subheaderAnimate();}, 3000);
	
	// 


  });


function firstH1Animate() {
	//First
	// Wrap every letter in a span
	var textWrapper2 = document.querySelector('.ml6 .letters');
	textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: false})
	.add({
		targets: '.ml6 .letter',
		translateY: ["1.1em", 0],
		translateZ: 0,
		duration: 1000,
		delay: (el, i) => 100 * i
	});
}


function secondH1Animate() {
	// Wrap every letter in a span
	var textWrapper3 = document.querySelector('.ml7 .letters');
	textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	anime.timeline({loop: false})
	.add({
		targets: '.ml7 .letter',
		translateY: ["1.1em", 0],
		translateZ: 0,
		duration: 1000,
		delay: (el, i) => 100 * i
	});
}

function subheaderAnimate() {
	//Subheading
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
	.add({
	  targets: '.ml3 .letter',
	  opacity: [0,1],
	  easing: "easeInOutQuad",
	  duration: 1500,
	  delay: (el, i) => 20 * (i+1)
	});
}

function scroll(area) {
    $('html,body').animate({
        scrollTop: $(area).offset().top},
        1300);
};

function fadeToMore(section){
	$("#page").toggleClass(section + "Colour");
	$("#pageContents").fadeOut(1000);
	setTimeout(function(){$(window).scrollTop(0);}, 1000);
	$("#"+ section +"More").delay(1000).fadeIn(1500);
}

function fadeToLess(section){
	$("#page").toggleClass(section + "Colour");
	$("#"+ section +"More").fadeOut(1500);
	$("#pageContents").delay(1000).fadeIn(1000);
	setTimeout(function(){$('html,body').animate({scrollTop: $("#"+ section).offset().top});}, 1000);
}

