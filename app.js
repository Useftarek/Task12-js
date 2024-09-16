function clock () {
    const date = new Date ();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let flag = "AM"
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        flag = "PM"
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    document.querySelector(".clock").innerHTML = `${hours} : ${minutes} : ${seconds} ${flag}`

    setTimeout(function() {
        clock()
    }, 1000)
};

clock();


const checkConnection = () => {
    const isOnline = navigator.onLine;
    if(isOnline) {
        return;
    }   else {
            document.body.textContent = "Sorry U ARE OFFLINE"
        }
}
checkConnection ();

const curosr = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
    curosr.style.top = e.clientY - 25 + "px";
    curosr.style.left = e.clientX - 25 + "px"; 
})

const sections = document.querySelectorAll("section"); 
const menu = document.querySelectorAll(".menu a"); 

window.addEventListener("scroll", () => {
    
    const windowScrollY = window.scrollY; 
    sections.forEach((section)=> { 
        const sectionId = section.getAttribute('id'); 
        const sectionOffset = section.offsetTop; 
        
        menu.forEach((link)=>{ 
        const linkRef = link.getAttribute("href").slice(1);  
            
        if(windowScrollY >= sectionOffset - 250) { 

            if(linkRef === sectionId) { 
                link.classList.add("active");
                document.title = `BOM | ${sectionId.toLocaleUpperCase()}`;
            } else {
                link.classList.remove("active");
            }
        }
        
        })
    })

    
    if (windowScrollY >= 100) {
        toTopBtn.classList.add('active');
    } else {
        toTopBtn.classList.remove('active');
    }
})


const toTopBtn = document.querySelector(".toTop");

toTopBtn.addEventListener("click", () => {
    
        scrollTo({
            top:0
        
        });
    }

)



window.addEventListener("blur", () => {
    document.title = "BOM | COME BACK";
    
})

const initialTitle = document.title;
window.addEventListener("focus", () => {
    document.title = `${initialTitle}`;
    
})

const loading_page = document.querySelector(".loading_page");
const loaderCounter = loading_page.children[1]


let counter = 0;

function intervalCounter () {
    
    const interval = setInterval(()=> {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
            loading_page.classList.add("hiddenLoader");
            loading_page.children[0].classList.add("hiddenTitle");
            loading_page.children[1].classList.add("hiddenTitle");
        }
        loaderCounter.textContent = `${counter}%`;
    },50)

    
}

intervalCounter();





