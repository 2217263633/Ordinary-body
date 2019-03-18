
        var ss,str,str1,str2,idnum,url_tail;
        //该变量是取自 https://www.ysts8.com/play_1836_49_1_1.html 在这个页面里面有iframe,可以直接在firefox浏览器查看控制台，
        //对应格式复制黏贴即可，该网站一般一日更新多次，甚是麻烦，改日需要直接代码取iframe里面的内容，方可长期解决
        url_tail="?1231703970736x1552894683x1231710101396-274b87a413438a4cfbc17fda608658bd?3";
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
