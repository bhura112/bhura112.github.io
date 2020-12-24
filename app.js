function loadScript()
{
        var header = document.querySelector(".main-head");
        var main = document.querySelector(".main-section");
        var menuIcon = document.querySelector(".head-menu-icon");
        var headNav   = document.querySelector(".head-nav");
        var headLinks = document.querySelector(".head-nav-links");
        var line1 = document.querySelector(".icon-line1");
        var line2 = document.querySelector(".icon-line2");
        var line3 = document.querySelector(".icon-line3");
        menuIcon.onclick = function() { 

                

             if(headLinks.style.display == 'none') {
                    headNav.classList.add("head-nav-clicked");
                    line1.classList.add("line1-anim");
                    line2.classList.add("line2-anim");
                    line3.classList.add("line3-anim");
                    headLinks.style.display= 'flex';
                   
                }
             else
             {
                    headLinks.style.display = 'none';
                    line1.classList.remove("line1-anim");
                    line2.classList.remove("line2-anim");
                    line3.classList.remove("line3-anim");
                    headNav.classList.remove("head-nav-clicked");
             }
        }

        window.addEventListener('scroll',function(){    
                if(window.pageYOffset > 100)
                {
                        if(!header.classList.contains('shadow'))
                        {
                                header.classList.add('shadow');
                        }
                }
                else{
                        header.classList.remove('shadow');
                        
                }
        });
}

function pageContentJavaScript()
{
        const el1 = document.querySelector(".mcu-content");
        const el2 = document.querySelector(".rtos-content");
        const el3 = document.querySelector(".linux-content");
        const el4 = document.querySelector(".qt-content");

        const observer = new IntersectionObserver( 
          ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
          { threshold: [1] }
        );
        
        observer.observe(el1);
        observer.observe(el2);
        observer.observe(el3);
        observer.observe(el4);
}


loadScript();
pageContentJavaScript();

