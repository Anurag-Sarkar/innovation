data = [{img:"office.jpg",title:"Innovation <br> Inside",desp:"Originating in Los Angeles, VI was built <br>on the idea that success breeds more <br>success. We want to redefine the way <br>work is done",feau1:{no:"200",desc:"Seperate office<br>spaces by 30-300m"},feau2:{no:"50",desc:"Isolated meeting <br> rooms<"},feau3:{no:"10",desc:"Open space for <br>200 people"}},
{img:"office2.jpg",title:"Novelty <br> Inside",desp:"Originating in Denmark, V was built <br>on the idea that ambition breeds more <br>ambitious people. We want to redefine the way <br>work is done",feau1:{no:"130",desc:"Seperate office<br>spaces by 30-300m"},feau2:{no:"30",desc:"Isolated meeting <br> rooms<"},feau3:{no:"5",desc:"Open space for <br>200 people"}},
{img:"office3.jpg",title:"Sophistication <br> Inside",desp:"Originating in Colarado, IV was built <br>on the idea that sophistacation breeds more <br>simplistic people. We want to redefine the way <br>work is done",feau1:{no:"100",desc:"Seperate office<br>spaces by 30-300m"},feau2:{no:"10",desc:"Isolated meeting <br> rooms<"},feau3:{no:"2",desc:"Open space for <br>200 people"}}]
index = 0
var off = function(){
    gsap.to("#title h1 span",{
        y:150,
        delay:0.2,
        duration:0.4
    })
        gsap.to(`#upar :nth-child(1) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
        })
        gsap.to(`#upar :nth-child(1) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.1
        })
        gsap.to(`#upar :nth-child(3) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.1
        })
        gsap.to(`#upar :nth-child(3) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.2
        })
        gsap.to(`#upar :nth-child(4) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.3
        })
        gsap.to(`#upar :nth-child(4) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.4
        })
        gsap.to(`#upar :nth-child(2) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.5
        })
        gsap.to(`#upar :nth-child(2) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.6,
            
        })
        gsap.to(`#neeche :nth-child(5) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
        })
        gsap.to(`#neeche :nth-child(5) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.1
        })
        gsap.to(`#neeche :nth-child(3) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.1
        })
        gsap.to(`#neeche :nth-child(3) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.2
        })
        gsap.to(`#neeche :nth-child(4) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.3
        })
        gsap.to(`#neeche :nth-child(4) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.4
        })
        gsap.to(`#neeche :nth-child(2) #t`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.5
        })
        
        gsap.to(`#neeche :nth-child(2) #b`,{
            width:"100%",
            duration:0.5,
            ease:Power2,
            delay:0.6
        })
        gsap.to(".yes",{
            border:`1px solid rgb(173,173,173)`,
            duration:0.5,
            ease:Power2,
        })
        gsap.to("#details .q",{
            y:100,
            opacity: 0,
            stagger:0.1,
            duration:0.7,
            delay:0.4
        })
        
        
        
    }
    var on = function(){
    gsap.to("#details .q",{
        y:0,
        opacity: 1,
        stagger:0.1,
        duration:0.7,
        delay:0.4
    })
    
    gsap.to("#title h1 span",{
        y:0,
        delay:0.2,
        duration:0.4
    })
    gsap.to(".yes",{
        border:`1px solid rgb(21,103,255)`,
        duration:0.5,
        ease:Power2,
    })
    gsap.to(`#upar :nth-child(1) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
    })
    
    gsap.to(`#upar :nth-child(1) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.1
    })
    gsap.to(`#upar :nth-child(3) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.1
    })
    gsap.to(`#upar :nth-child(3) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.2
    })
    gsap.to(`#upar :nth-child(4) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.3
    })
    gsap.to(`#upar :nth-child(4) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.4
    })
    gsap.to(`#upar :nth-child(2) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.5
    })
    gsap.to(`#upar :nth-child(2) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.6
    })
    gsap.to(`#neeche :nth-child(5) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
    })
    gsap.to(`#neeche :nth-child(5) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.1
    })
    gsap.to(`#neeche :nth-child(3) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.1
    })
    gsap.to(`#neeche :nth-child(3) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.2
    })
    gsap.to(`#neeche :nth-child(4) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.3
    })
    gsap.to(`#neeche :nth-child(4) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.4
    })
    gsap.to(`#neeche :nth-child(2) #t`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.5
    })
    gsap.to(`#neeche :nth-child(2) #b`,{
        width:"0%",
        duration:0.5,
        ease:Power2,
        delay:0.6
    })

}

// on()
document.querySelector("#logo i").addEventListener("click",function(){
    if(index === 2){
        index = -1
    }
    console.log(index)
    off()
    document.querySelector("#logo i").style.pointerEvents = "none"
    setTimeout(function(){
        document.querySelector("#title h1 span").innerHTML = data[index].title
        document.querySelector("#stuff p span").innerHTML = data[index].desp
        document.querySelector("#first h1 ").innerHTML = data[index].feau1.no
        document.querySelector("#second h1 ").innerHTML = data[index].feau2.no
        document.querySelector("#third h1 ").innerHTML = data[index].feau3.no
        document.querySelector("#first p ").innerHTML = data[index].feau1.desc
        document.querySelector("#second p ").innerHTML = data[index].feau2.desc
        document.querySelector("#third p ").innerHTML = data[index].feau3.desc
        document.querySelector("#img img").setAttribute("src",data[index].img) 
        document.querySelector("#logo i").style.pointerEvents = "auto"
        on()
    },2000)
    index++
})