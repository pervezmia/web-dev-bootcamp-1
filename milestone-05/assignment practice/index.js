const btnContainer = document.getElementById("btn-container");
btnContainer.addEventListener("click", (e)=> {
    console.log(e.target.innerText);
    const text = e.target.innerText.toLowerCase();
    if(text === "all"){
        renderingAllData(allIssues);
    }
    if(text === "open"){
        const openData = allIssues.filter(item => item.status === "open");
        renderingAllData(openData);
    }
    if(text === "closed"){
        const closeData = allIssues.filter(item =>item.status === "closed");
        renderingAllData(closeData);
    }
})