const btnContainer = document.getElementById("btn-container");
const btnContainer1 = document.getElementById("btn-container");
console.log(btnContainer1);

const cardContainer = document.getElementById("card-container");
const totalCount = document.getElementById("totalCount");
const totalDataGettingFetch = [];
const uiTotalInfo = document.getElementById("totalCount");

const allBtns = btnContainer1.querySelectorAll(".btn-atv");
const clickBtn = () => {
    btnContainer1.addEventListener("click", (event)=> {
        if(event.target.tagName !== "button") return;
        console.log(event.target);
        console.log(allBtns);

        allBtns.forEach(item => {
            item.classList.remove("bg-green-300");
            item.classList.add("bg-gray-300");
        })
    })
}
clickBtn();


// const activeBtn = (id) => {
//     const btns = btnContainer.querySelectorAll("BUTTON");

//     btns.forEach(btn => {
//         btn.classList.remove("bg-green-300");
//         btn.classList.add("bg-gray-300");
//     })

//     const clickedBtn = document.getElementById(id);
//     clickedBtn.classList.add("bg-green-300");
//     clickedBtn.classList.remove("bg-gray-300");
//     console.log(clickedBtn, btns.innerText);

// }
// activeBtn("allBtn");



const loadAllData = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    // console.log(data.data);
    totalDataGettingFetch.push(...data.data);
    console.log(totalDataGettingFetch.length);
    const sandAllFetchingInfo = data.data;
    renderingAllInfo(sandAllFetchingInfo)
}
loadAllData();


const renderingAllInfo = (receiveAllFetchingInfo) => {
    uiTotalInfo.innerText = totalDataGettingFetch.length;
    receiveAllFetchingInfo.forEach(item => {

        const card = document.createElement("div");
        card.className = "space-y-3 border-2 border-gray-300 p-5 rounded-2xl bg-gray-200"
        card.innerHTML = `
                        <div>
                            <h2 class="font-bold">Pervez</h2>
                            <p class="font-thin text-sm">Student of Political Science</p>
                        </div>

                        <div>
                            <p class="line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus corrupti
                                voluptatum nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam odit accusantium
                                quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime?</p>
                        </div>

                        <div>
                            <button class="bg-amber-200 px-4 py-1 rounded-2xl cursor-pointer hover:bg-green-200">Details Info</button>
                        </div>
                `;
        cardContainer.appendChild(card);
    });
}

