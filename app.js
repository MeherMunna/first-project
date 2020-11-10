
function silderfunction(){
	
	if(document.getElementsByClassName("slideritems")[0].classList.contains("active")){
		document.getElementsByClassName("slideritems")[1].classList.add("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
	
		document.querySelector(".ffspan").classList.add("activespan");
		document.querySelector(".fspan").classList.remove("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".ffffspan").classList.remove("activespan");
		document.querySelector(".slideritems img").setAttribute("style","transition:all 1s;");
			
		
	}
	
	
	
	
    else if(document.getElementsByClassName("slideritems")[1].classList.contains("active")){
		
      document.getElementsByClassName("slideritems")[2].classList.add("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		
		document.querySelector(".fffspan").classList.add("activespan");
		document.querySelector(".fspan").classList.remove("activespan");				
		document.querySelector(".ffspan").classList.remove("activespan");				
		document.querySelector(".ffffspan").classList.remove("activespan");			
		
	}
	
		
    else if(document.getElementsByClassName("slideritems")[2].classList.contains("active")){
		
       document.getElementsByClassName("slideritems")[3].classList.add("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		
		document.querySelector(".ffffspan").classList.add("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".fspan").classList.remove("activespan");
		document.querySelector(".ffspan").classList.remove("activespan");
	}
	
	 else if(document.getElementsByClassName("slideritems")[3].classList.contains("active")){
		
        document.getElementsByClassName("slideritems")[0].classList.add("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		
		document.querySelector(".fspan").classList.add("activespan");
		document.querySelector(".ffspan").classList.remove("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".ffffspan").classList.remove("activespan");
	}
	
	
	
	else{alert("not correct");}	
			
}
setInterval(silderfunction,5000);













document.querySelector(".ffspan").addEventListener("click",function(){
	
	    document.getElementsByClassName("slideritems")[0].classList.contains("active")
		document.getElementsByClassName("slideritems")[1].classList.add("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
	
		document.querySelector(".ffspan").classList.add("activespan");
		document.querySelector(".fspan").classList.remove("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".ffffspan").classList.remove("activespan");
	
	
});
	
document.querySelector(".fffspan").addEventListener("click",function(){
	
	    document.getElementsByClassName("slideritems")[1].classList.contains("active")
		document.getElementsByClassName("slideritems")[2].classList.add("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		
		document.querySelector(".fffspan").classList.add("activespan");
		document.querySelector(".fspan").classList.remove("activespan");				
		document.querySelector(".ffspan").classList.remove("activespan");				
		document.querySelector(".ffffspan").classList.remove("activespan");				
	
	
});
	
document.querySelector(".ffffspan").addEventListener("click",function(){
	
	
        document.getElementsByClassName("slideritems")[2].classList.contains("active")
		document.getElementsByClassName("slideritems")[3].classList.add("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		document.getElementsByClassName("slideritems")[0].classList.remove("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		
		document.querySelector(".ffffspan").classList.add("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".fspan").classList.remove("activespan");
		document.querySelector(".ffspan").classList.remove("activespan");
			
		
	
	
});	

document.querySelector(".fspan").addEventListener("click",function(){
	
        document.getElementsByClassName("slideritems")[3].classList.contains("active")
		document.getElementsByClassName("slideritems")[0].classList.add("active");
		document.getElementsByClassName("slideritems")[3].classList.remove("active");
		document.getElementsByClassName("slideritems")[1].classList.remove("active");
		document.getElementsByClassName("slideritems")[2].classList.remove("active");
		
		document.querySelector(".fspan").classList.add("activespan");
		document.querySelector(".ffspan").classList.remove("activespan");
		document.querySelector(".fffspan").classList.remove("activespan");
		document.querySelector(".ffffspan").classList.remove("activespan");
		
	
});



//----------------Slider Programing End--------------------//
//----------------information Programing End--------------------//

document.querySelector("#download").addEventListener("click",function(){
	        document.querySelector(".rowdiv").classList.add("activerow");
			document.querySelector(".download").classList.add("activbgcolor");					
		
});
document.querySelector("#Notice").addEventListener("click",function(){
	        document.querySelector(".for-notice").classList.add("activerow");
			 document.querySelector(".rowdiv").classList.remove("activerow");				
			 document.querySelector(".notice").classList.add("activbgcolor");				
		
});
document.querySelector("#result").addEventListener("click",function(){
	        document.getElementsByClassName("rowdiv").classList.contains("activerow");
							
		
});
document.querySelector("#admit").addEventListener("click",function(){
	        document.getElementsByClassName("rowdiv").classList.contains("activerow");
							
		
});
document.querySelector("#rutin").addEventListener("click",function(){
	        document.getElementsByClassName("rowdiv").classList.contains("activerow");
							
		
});




//----------------Information Programing End--------------------//















