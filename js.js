
        var ss,str,str1,str2,idnum,url_tail;
        url_tail="?1403346338379x1544598179x1403352469039-03e5ed69f90264de82e0fd5080ed0530?2";
        function getname()
        {
             ss=document.getElementById("form").src;
             str= String(ss);
             str1= str.split("%BC%A0");
             str2= str1[2].split(".");
             idnum=document.getElementById("idnum").value;
             
        }
        function last()
        {
            getname();
            if(idnum!="")
            {
                var num=idnum;
            }
            else
            {
                var num=parseInt( str2[0])-1;
                if(num<100)
                {
                    
                }
            }
            document.getElementById("idnum").value="";
            document.title="凡人修仙传"+ num+"集";
            var url_to ="http://180e.ysts8.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/2009/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0" +num+ ".mp3" +url_tail;
            document.getElementById("form").src= url_to ;
        }

        function next() 
        {
            
            getname();
            if(idnum!="")
            {
                var num=idnum;
            }
            else
            {
                var num=parseInt( str2[0])+1;
            }
            document.getElementById("idnum").value="";
            document.title="凡人修仙传"+ num+"集";
            var url_to ="http://180e.ysts8.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/2009/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0" +num+".mp3"+url_tail;
            document.getElementById("form").src=  url_to  ;
            
        }

        window.onload =function()
        {
            var audio= document.getElementById("form");
            audio.src="http://180e.ysts8.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/2009/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0001.mp3"+url_tail;
             getname();
             document.title="凡人修仙传"+ parseInt( str2[0])+"集";
            
            // var iframe = document.getElementById("form");
            // var iwindow = iframe.contentWindow;
            // console.log(iwindow);

            
            
            var button = document.getElementsByTagName("button");
            
             audio.onended=function() 
            {
                    button[1].click();
            };
        }
