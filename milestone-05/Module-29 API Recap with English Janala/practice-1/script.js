
const loadLevelWord = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => displayLoadLevelWord(data.data));
}
/* {
    "id": 85,
    "level": 1,
    "word": "Hat",
    "meaning": "টুপি",
    "pronunciation": "হ্যাট"
} */
const displayLoadLevelWord = (levelWords) => {
    const displaySection = document.getElementById("displaySection");
    displaySection.innerText = "";
    console.log(levelWords);

    levelWords.forEach(words => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="bg-base-300 rounded-xl p-6 text-center space-y-3 "">
                <h1 class="font-bold">${words.word}</h1>
                <p>Meaning / Pronunciation</p>
                <p>${words.meaning} / ${words.pronunciation}</p>
                <div class="flex justify-between items-center">
                <button class="btn">details</button>
                <button class="btn">pronunciation</button>
               </div>
            </div>
        `
        displaySection.appendChild(div);
    });
}

const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLoadData(data.data));
}

const displayLoadData = (lessons) => {
    const sectionOfFeature = document.getElementById("sectionOfFeature");


    lessons.forEach(lesson => {
        const btnDiv = document.createElement("div");
        
        btnDiv.innerHTML = `
            <button id="" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-primary">lesson-${lesson.level_no}</button>
        `
        sectionOfFeature.appendChild(btnDiv);
    });
}



loadData()