
 	function getInputValue(){


 		var inputtitle = document.getElementById("Websitetitle").value;
 		var autorInput = document.getElementById("autor").value;
 		var inputKeywords = document.getElementById("websiteKeyword").value;
 		var inputDescription = document.getElementById("description").value;
 		var inputLaunguage = document.getElementById("selectLanguage").value;
 		var inputContentType = document.getElementById("contentType").value;




 		document.getElementById("demo").innerHTML ="&#60meta name = "+"&quot;title&quot;"+"&nbsp;"+"content="+"&quot;"+inputtitle+"&quot;&#62;\n"+"&#60meta name = "+"&quot;author&quot;"+"&nbsp;"+"content="+"&quot;"+autorInput+"&quot;&#62; \n"+"&#60meta name = "+"&quot;keywords&quot;"+"&nbsp;"+"content="+"&quot;"+inputKeywords+"&quot;&#62;\n"+"&#60meta name = "+"&quot;description&quot;"+"&nbsp;"+"content="+"&quot;"+inputDescription+"&quot;&#62;\n"+"&#60meta name = "+"&quot;language&quot;"+"&nbsp;"+"content="+"&quot;"+inputLaunguage+"&quot;&#62;\n"+"&#60meta http-equiv = "+"&quot;Content-Type&quot;"+"&nbsp;"+"content="+"&quot;"+"text/html;"+"&nbsp;"+inputContentType+"&quot;&#62;";
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
