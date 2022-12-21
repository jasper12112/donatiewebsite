let pump = document.getElementById("pump");
pump.classList.add('active');

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.target.id == "pump")
        {
            entry.isIntersecting ? entry.target.classList.add('active') : entry.target.classList.remove('active');
        }else{
            entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show');

        }
    })
});

const scrollIntoItems = document.querySelectorAll('.scrollinto');
scrollIntoItems.forEach((item) => observer.observe(item));

const scrollIntoItemsY = document.querySelectorAll('.scrollintoy');
scrollIntoItemsY.forEach((item) => observer.observe(item));
observer.observe(pump);