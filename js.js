
        var ss,str,str1,str2,idnum;
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
            var url_to ="http://180e.ysts8.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/2009/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0" +num+".mp3?1831845711866x1543421699x1831851842526-70a79a8391c270f5491f63e7a424d91f?2";
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
            var url_to ="http://180e.ysts8.com:8000/%E7%8E%84%E5%B9%BB%E5%B0%8F%E8%AF%B4/2009/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0" +num+".mp3?1831845711866x1543421699x1831851842526-70a79a8391c270f5491f63e7a424d91f?2";
            document.getElementById("form").src=  url_to  ;
            
        }

        window.onload =function()
        {
             getname();
             document.title="凡人修仙传"+ parseInt( str2[0])+"集";
            
            // var iframe = document.getElementById("form");
            // var iwindow = iframe.contentWindow;
            // console.log(iwindow);
        }
