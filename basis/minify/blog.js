let catid,filtersBtn=[...document.querySelectorAll(".Filters .btn")];filtersBtn.forEach(((t,e)=>{0==e&&t.classList.add("active"),t.addEventListener("click",(t=>{filtersBtn.map((t=>t.classList.remove("active"))),catid=t.currentTarget.getAttribute("data-catid"),t.currentTarget.classList.add("active"),console.log(catid);var e=`/load-blogDesk.inc?catid=${catid}`;$(".blogList").load(e),setTimeout((()=>{gsap.to(".blog",{opacity:1,y:0,stagger:.1})}),1e3)}))}));let blogs=document.querySelectorAll(".blog");blogs.forEach((t=>{gsap.to(t,{y:0,opacity:1,scrollTrigger:{trigger:t,start:"top 100%",end:"bottom bottom"}})}));