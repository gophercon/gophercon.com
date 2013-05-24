$(function() {

	var mainColor = '#eb5b4c';

	// ===== Create switcher ===== //

	var switcher = $("<div id=\"switcher-container\"><a id=\"handle\" class=\"in\" href=\"#\">Options<\/a><div id=\"switcher-options\"><strong>Color Options<\/strong><a class=\"main-color\" style=\"background: " + mainColor + "\" href=\"javascript:chooseStyle('none', 60)\" checked=\"checked\">Default style<\/a><\/div><\/div>");
	
	switcher.appendTo('body');
	
	// ===== Colors ===== //

	var blue = Array('blue', '#207cca', '<link rel="alternate stylesheet" title="blue" href="css/blue/base.css" /><link rel="alternate stylesheet" title="blue" href="css/blue/flexslider.css" /><link rel="alternate stylesheet" title="blue" href="css/blue/layout.css" />'),
		yellow = Array('yellow', '#F9D654', '<link rel="alternate stylesheet" title="yellow" href="css/yellow/base.css" /><link rel="alternate stylesheet" title="yellow" href="css/yellow/flexslider.css" /><link rel="alternate stylesheet" title="yellow" href="css/yellow/layout.css" />'),
		darkgreen = Array('darkgreen', '#2C6700', '<link rel="alternate stylesheet" title="darkgreen" href="css/darkgreen/base.css" /><link rel="alternate stylesheet" title="darkgreen" href="css/darkgreen/flexslider.css" /><link rel="alternate stylesheet" title="darkgreen" href="css/darkgreen/layout.css" />'),
		green = Array('green', '#7DC24B', '<link rel="alternate stylesheet" title="green" href="css/green/base.css" /><link rel="alternate stylesheet" title="green" href="css/green/flexslider.css" /><link rel="alternate stylesheet" title="green" href="css/green/layout.css" />'),
		crimson = Array('crimson', '#A50516', '<link rel="alternate stylesheet" title="crimson" href="css/crimson/base.css" /><link rel="alternate stylesheet" title="crimson" href="css/crimson/flexslider.css" /><link rel="alternate stylesheet" title="crimson" href="css/crimson/layout.css" />'),
		red = Array('red', '#CC0000', '<link rel="alternate stylesheet" title="red" href="css/red/base.css" /><link rel="alternate stylesheet" title="red" href="css/red/flexslider.css" /><link rel="alternate stylesheet" title="red" href="css/red/layout.css" />'),
		purple = Array('purple', '#6F5092', '<link rel="alternate stylesheet" title="purple" href="css/purple/base.css" /><link rel="alternate stylesheet" title="purple" href="css/purple/flexslider.css" /><link rel="alternate stylesheet" title="purple" href="css/purple/layout.css" />'),
		cyan = Array('cyan', '#38D4F6', '<link rel="alternate stylesheet" title="cyan" href="css/cyan/base.css" /><link rel="alternate stylesheet" title="cyan" href="css/cyan/flexslider.css" /><link rel="alternate stylesheet" title="cyan" href="css/cyan/layout.css" />'),
		teil = Array('teil', '#008080', '<link rel="alternate stylesheet" title="teil" href="css/teil/base.css" /><link rel="alternate stylesheet" title="teil" href="css/teil/flexslider.css" /><link rel="alternate stylesheet" title="teil" href="css/teil/layout.css" />'),
		black = Array('black', '#000', '<link rel="alternate stylesheet" title="black" href="css/black/base.css" /><link rel="alternate stylesheet" title="black" href="css/black/flexslider.css" /><link rel="alternate stylesheet" title="black" href="css/black/layout.css" />'),
		fuchsia = Array('fuchsia', '#F35FAB', '<link rel="alternate stylesheet" title="fuchsia" href="css/fuchsia/base.css" /><link rel="alternate stylesheet" title="fuchsia" href="css/fuchsia/flexslider.css" /><link rel="alternate stylesheet" title="fuchsia" href="css/fuchsia/layout.css" />'),
		brown = Array('brown', '#644436', '<link rel="alternate stylesheet" title="brown" href="css/brown/base.css" /><link rel="alternate stylesheet" title="brown" href="css/brown/flexslider.css" /><link rel="alternate stylesheet" title="brown" href="css/brown/layout.css" />'),
		navy = Array('navy', '#153450', '<link rel="alternate stylesheet" title="navy" href="css/navy/base.css" /><link rel="alternate stylesheet" title="navy" href="css/navy/flexslider.css" /><link rel="alternate stylesheet" title="navy" href="css/navy/layout.css" />'),
		orange = Array('orange', '#E95D22', '<link rel="alternate stylesheet" title="orange" href="css/orange/base.css" /><link rel="alternate stylesheet" title="orange" href="css/orange/flexslider.css" /><link rel="alternate stylesheet" title="orange" href="css/orange/layout.css" />');
	
	/* Add links to head */
	$('head')
		.append(blue[2])
		.append(yellow[2])
		.append(darkgreen[2])
		.append(green[2])
		.append(crimson[2])
		.append(red[2])
		.append(purple[2])
		.append(cyan[2])
		.append(teil[2])
		.append(black[2])
		.append(fuchsia[2])
		.append(brown[2])
		.append(navy[2])
		.append(orange[2]);
	
	/* Add links to switcher options */
	$('#switcher-options')
		.append("<a class=\"main-color\" style=\"background: " + navy[1] + "\" href=\"javascript:chooseStyle('" + navy[0] + "', 60)\">Navy<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + blue[1] + "\" href=\"javascript:chooseStyle('" + blue[0] + "', 60)\">Blue<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + yellow[1] + "\" href=\"javascript:chooseStyle('" + yellow[0] + "', 60)\">Yellow<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + darkgreen[1] + "\" href=\"javascript:chooseStyle('" + darkgreen[0] + "', 60)\">Dark Green<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + green[1] + "\" href=\"javascript:chooseStyle('" + green[0] + "', 60)\">Green<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + crimson[1] + "\" href=\"javascript:chooseStyle('" + crimson[0] + "', 60)\">Crimson<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + red[1] + "\" href=\"javascript:chooseStyle('" + red[0] + "', 60)\">Red<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + purple[1] + "\" href=\"javascript:chooseStyle('" + purple[0] + "', 60)\">Purple<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + cyan[1] + "\" href=\"javascript:chooseStyle('" + cyan[0] + "', 60)\">Cyan<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + teil[1] + "\" href=\"javascript:chooseStyle('" + teil[0] + "', 60)\">Teil<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + black[1] + "\" href=\"javascript:chooseStyle('" + black[0] + "', 60)\">Black<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + fuchsia[1] + "\" href=\"javascript:chooseStyle('" + fuchsia[0] + "', 60)\">Fuchsia<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + brown[1] + "\" href=\"javascript:chooseStyle('" + brown[0] + "', 60)\">Brown<\/a>")
		.append("<a class=\"main-color\" style=\"background: " + orange[1] + "\" href=\"javascript:chooseStyle('" + orange[0] + "', 60)\">Orange<\/a>");
	
	
	// ===== Controll Switcher ===== //
	
	var switcherContainer = $('#switcher-container');
	var handle = $('#switcher-container a#handle');
	
	switcherContainer.css('left', -220);
	
	handle.bind('click', function(event) {
		
		if ( $(this).hasClass('in') ) {
		
			$(this).removeClass('in');
			$(this).addClass('out');
			
			switcherContainer.animate({
				left: -10
			}, 'slow');
			
		} else {
		
			$(this).removeClass('out');
			$(this).addClass('in');
			
			switcherContainer.animate({
				left: -220
			});
			
		}
		
		return false;
		
	});
	
});