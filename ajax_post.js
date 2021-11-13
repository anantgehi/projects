
    function buttonClickHandler() {
        console.log("success");
        document.getElementById("status2").innerHTML="<b>Requesting...</b>";
        var find = document.getElementById("find").value;
        // Instantiate an xhr object
        var jsonhttp = new XMLHttpRequest();
        
        if(jsonhttp){
        // Open the object
        jsonhttp.open('GET','https://api.instantwebtools.net/v1/airlines', true); //local file
        //true - Asynchronous(In background server transactions will happen, user can do other activities) 
        //false - Synchronous transfer(User will have to wait for server response to perform other activities) 
    
        //Send the request
        jsonhttp.send(null);
        
            
        //what to do when server responds
        // What to do when response is ready
        jsonhttp.onreadystatechange = function () {  //Responds HTTP server codes when anything happens
            
            if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
                jsonObj=JSON.parse(jsonhttp.responseText);
                
                /*All data fetch
                for(i=0;i<jsonObj.length;i++){
                document.getElementById("list").innerHTML+="<li>"+jsonObj[i].id+"&nbsp;"+jsonObj[i].name+"&nbsp;"+jsonObj[i].country+"&nbsp;"+jsonObj[i].logo+"&nbsp;"+jsonObj[i].slogan+"&nbsp;"+jsonObj[i].head_quaters+"&nbsp;"+jsonObj[i].website+"&nbsp;"+jsonObj[i].established+"&nbsp;"+"</li>"+"<br>";
                }
                */
                for(i=0;i<jsonObj.length;i++){
                if(jsonObj[i].id==find){
                    document.getElementById("list").innerHTML=
                    "<table border=\"1\" align=\"center\">"+
                    "<tr><td><b>ID</b></td><td>"            +jsonObj[i].id+"</td></tr>"+
                    "<tr><td><b>NAME</b></td><td>"          +jsonObj[i].name+"</td></tr>"+
                    //"<tr><td><b>COUNTRY</b></td><td>"       +jsonObj[i].country+"</td></tr>"+
                    //"<tr><td><b>LOGO</b></td><td>"          +jsonObj[i].logo+"</td></tr>"+
                    //"<tr><td><b>SLOGAN</b></td><td>"        +jsonObj[i].slogan+"</td></tr>"+
                    //"<tr><td><b>HEAD QUARTERS</b></td><td>" +jsonObj[i].head_quaters+"</td></tr>"+
                    //"<tr><td><b>WEBSITE</b></td><td>"       +jsonObj[i].website+"</td></tr>"+
                    //"<tr><td><b>ESTABLISHED</b></td><td>"   +jsonObj[i].established+"</td></tr>"+
                    "</table>";
                }
                 
                }
                document.getElementById("status2").innerHTML="<b>Received</b>"
            }

        }
    
    }

}


    function postHandler() {
        console.log("success");
        // Instantiate an xhr object
        const xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://api.instantwebtools.net/v1/airlines', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        
        var id = parseInt(document.getElementById("id").value);
        var name = document.getElementById("name").value;
        var country = document.getElementById("country").value;
        var logo = document.getElementById("logo").value;
        var slogan = document.getElementById("slogan").value;
        var head_quaters = document.getElementById("head_quaters").value;
        var website = document.getElementById("website").value;
        var established = document.getElementById("established").value;

        //send request
        var newairline = 
        {
            "id":id,
            "name":name,
            "country":country,
            "logo":logo,
            "slogan":slogan,
            "head_quaters":head_quaters,
            "website":website,
            "established":established
        };
        
        newairline=JSON.stringify(newairline);        
        
        /*
        var newairline = "{"+"\"id\""+":"+id+
            ",\"name\""+":"+`\"`+name+`\"`+
            ",\"country\""+":"+`\"`+country+`\"`+
            ",\"logo\""+":"+`\"`+logo+`\"`+
            ",\"slogan\""+":"+`\"`+slogan+`\"`+
            ",\"head_quaters\""+":"+`\"`+head_quaters+`\"`+
            ",\"website\""+":"+`\"`+website+`\"`+
            ",\"established\""+":"+established
        +"}";
        */
        console.log(newairline);
        xhr.send(newairline);
        document.getElementById("status1").innerHTML="<b>Sending...</b>" 
        xhr.onreadystatechange = function () {  //Responds HTTP server codes when anything happens
            
            if (xhr.status == 400) {
                document.getElementById("status1").innerHTML="<b>Duplicate Entry found...Try again</b>" 
            }
            else {
                document.getElementById("status1").innerHTML="<b>Posted Successfully...</b>"
            }
            
        }

    }
