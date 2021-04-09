
 	function getInputValue(){


 		var inputtitle = document.getElementById("Websitetitle").value;
 		var autorInput = document.getElementById("autor").value;
 		var inputKeywords = document.getElementById("websiteKeyword").value;
 		var inputDescription = document.getElementById("description").value;
 		var inputLaunguage = document.getElementById("selectLanguage").value;
 		var inputContentType = document.getElementById("contentType").value;




 		document.getElementById("demo").innerHTML ="&#60meta name = "+"&#8221;title&#8221;"+"&nbsp;"+"content="+"&#8221;"+inputtitle+"&#8221;&#62;\n"+"&#60meta name = "+"&#8221;author&#8221;"+"&nbsp;"+"content="+"&#8221;"+autorInput+"&#8221;&#62; \n"+"&#60meta name = "+"&#8221;keywords&#8221;"+"&nbsp;"+"content="+"&#8221;"+inputKeywords+"&#8221;&#62;\n"+"&#60meta name = "+"&#8221;description&#8221;"+"&nbsp;"+"content="+"&#8221;"+inputDescription+"&#8221;&#62;\n"+"&#60meta name = "+"&#8221;language&#8221;"+"&nbsp;"+"content="+"&#8221;"+inputLaunguage+"&#8221;&#62;\n"+"&#60meta http-equiv = "+"&#8221;Content-Type&#8221;"+"&nbsp;"+"content="+"&#8221;"+"text/html;"+"&nbsp;"+inputContentType+"&#8221;&#62;";
 	}

 	function countChars(obj){
 		var maxLength = 51;
 		var inputValue = obj.value.length;
 		var remaining= maxLength - inputValue;
 		if(remaining>=0){
 			document.getElementById("charNum").innerHTML = 'Website Name (*limit '+remaining+' characters )';
 		}else{
 			document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+(0+(-remaining))+' characters</span>';
 		}
 	}
 	function countCharsDec(obj){
 		var maxLength = 150;
 		var inputValue = obj.value.length;
 		var remaining= maxLength - inputValue;
 		if(remaining>=0){
 			document.getElementById("charNumDec").innerHTML = 'Website Name (*limit '+remaining+' characters )';
 		}else{
 			document.getElementById("charNumDec").innerHTML = '<span style="color: red;">You have exceeded the limit of '+(0+(-remaining))+' characters</span>';
 		}
 	}

 	function getCpy(){
 		var copyText =document.getElementById("demo");
 		copyText.select();
 		copyText.setSelectionRange(0, 99999);
 		document.execCommand("copy");
 		alert("Copied Meta Tag For SEO :)" );
 	}
