((function(){window.AboutPage=function(){function a(){}return a.nav_links=$("#site_links"),a.navigation=$("#navigation"),a.original_width=""+a.nav_links.width()+"px",a.load=function(){var a;return a=this.navigation,this.nav_links.animate({width:"100px"},"slow").promise().done(function(){var b;return b=$('<img id="mypic" width="210" src="/images/me.png">').hide(),a.append(b),b.fadeIn("slow")})},a.unload=function(){var a,b;return a=this.nav_links,b=this.original_width,this.navigation.find("#mypic").fadeOut("fast",function(){return $(this).remove(),a.animate({width:b},"slow")})},a}()})).call(this);