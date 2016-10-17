//sticky
$(".stickyKThree").fixTo("section#kthree", {
		mind: ".logoDegree"
	});
	$(".stickyFourSix").fixTo("section.foursix", {
		mind: ".logoDegree"
	});
	$(".stickyTen").fixTo("section.ten", {
		mind: ".logoDegree"
	});
	$(".stickyGED").fixTo("section.ged", {
		mind: ".logoDegree"
	});

//tooltips
	$(".certTip).tooltip({ 
		position: "bottom center", 
		offset: [0, 10], 
		tipClass: "certTip"
		});
	$(".asscTip").tooltip({ 
		position: "bottom center", 
		tipClass: "asscTip"style.css
		});
	$(".bachTip").tooltip({ 
		position: "bottom center", 
		tipClass: "bachTip"
		});
		
//Archive toggle
    $(function() {
        $('.archive').click(function() {
                $('.hidden').slideToggle("slow");
                $('.archive').toggleClass("arrowUp");
                $('.archive').toggleClass("arrowDown");
        })
    });