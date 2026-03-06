const btnsContainer = document.getElementById("btns-container");


const loadBtns = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
    const data = await res.json();
    renderInDisplay(data);
    console.log(data); 
}