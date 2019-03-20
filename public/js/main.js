function listTags(selector,tags){
	tags.map( tag =>{
		const tagList = "<li class='skill-tag' >"+tag+"</li>"
		$(selector).append(tagList);
	})
}

function pageChange(hash){
	if(hash===""){
		$(".page-view").hide();
		$("#introduction").show();
	}
	else {
		$(".page-view").hide();
		$(hash).show();
	}
	switch (hash) { 
		case '#introduction':
			$("body").css("background-color","#ffd6e7");
			break;
		case '#resume': 
			$("body").css("background-color","#ffbb96");
			break;
		case '#portfolio': 
			$("body").css("background-color","#efdbff");
			break;
		case '#contact': 
			$("body").css("background-color","#b5f5ec");
			break;	
	}
	
}


function scrollFunction() {
  if ($('html').scrollTop() > 20 ) {
    $("#top-button").css("display","block")
  } else {
    $("#top-button").css("display","none")
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html').scrollTop(0); // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){

	/*skills*/

	const front_end_skills = ["React", "Redux", "Redux-saga", "Pug(Jade)", "HTML", "CSS", "SCSS", "LESS", "Bootstrap", "ElementUI","Javascipt", "JQuery"]
	const back_end_skills = ["Node.js", "PHP","Mongodb", "Mongoosejs", "RESTful API", "express.js", "sql"]
	const language = ["JAVA", "Python"]
	const tools = ["Matlab", "Tensorflow", "Weka", "Jupyter notebook", "Figma", "Zeplin", "Photoshop", "Adobe pr cc", "Adobe Effects", "Adobe Illustration", "InDesign"]
	
	listTags(".front-end-skills",front_end_skills);
	listTags(".back-end-skills",back_end_skills);
	listTags(".language",language);
	listTags(".tools",tools);
	pageChange(location.hash);

	window.onscroll = function() {scrollFunction()};

	
});
  