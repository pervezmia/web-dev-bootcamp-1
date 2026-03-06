const btnsContainer = document.getElementById("btns-container");
const allCategoriesBtn = document.getElementById("all-trees-btn");
const treeContainer = document.getElementById("treeContainer");
const loadingSnipper = document.getElementById("loadingSnipper");

const showLoading = () => {
    loadingSnipper.classList.remove("hidden");
    treeContainer.innerHTML = "";
}

const hiddenLoading = () => {
    loadingSnipper.classList.add("hidden");
}


// all categories api fetch
const loadCategoriesBtns = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    // console.log(data);
    renderingCategoriesBtn(data.categories);
}


//all trees api fetch
const loadAllTrees = async () => {
    showLoading();
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    hiddenLoading();
    renderingAllTrees(data.plants);

}

/* 
category_name
: 
"Fruit Tree"
id
: 
1
small_description
: 
"Trees that bear edible fruits like mango, guava, and jackfruit."
[[Prototype]]
: 
Object

*/

//rendering categories btn
const renderingCategoriesBtn = async (categories) => {

    categories.forEach(category => {
        // console.log(category);

        const btn = document.createElement("button");
        btn.classList = "btn btn-base-200";
        // btn.classList.onclick () = clickBtn(category.id) ;
        btn.innerHTML = `${category.category_name}
        
        `;
        btn.onclick = () => clickBtn(category.id, btn);
        btnsContainer.appendChild(btn);
        // console.log(btn);
    });

}
/* category: "Fruit Tree"
description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
id: 1
image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
name: "Mango Tree"
price: 500 */

// rendering all trees
const renderingAllTrees = async (trees) => {


    trees.forEach(tree => {


        const div = document.createElement("div");
        // div.classList = "";
        div.innerHTML = `
                    <div class="card bg-base-100 shadow-sm">
                        <figure>
                            <img src="${tree.image}"
                                alt="Shoes" title="${tree.name}" class="object-cover w-[100%] h-[40vh]" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${tree.name}</h2>
                            <p class="line-clamp-2">${tree.description}</p>
                            <div class="badge badge-success">${tree.category}</div>
                            <div class="card-actions flex  justify-between">
                                <button class="btn btn-primary">Add to cart</button>
                                <button class="btn btn-primary">${tree.price}</button>
                            </div>
                        </div>
                    </div>
        `


        treeContainer.appendChild(div);
    })
}

const clickBtn = async (id, btn) => {
    showLoading();

    const allBtns = document.querySelectorAll("#btns-container button, #all-trees-btn");

    allBtns.forEach(btn => {
        btn.classList.add("btn-base-200");
        btn.classList.remove("btn-success");
    })
    
    btn.classList.add("btn-success");
    btn.classList.remove("btn-base-200");
    
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
    const data = await res.json();
    renderingAllTrees(data.plants);

    hiddenLoading();
}

//all btn ta handlin kora hyse akhane
allCategoriesBtn.addEventListener("click", () => {

    const allBtns = document.querySelectorAll("#btns-container button, #all-trees-btn");

    allBtns.forEach(btn => {
        btn.classList.add("btn-base-200");
        btn.classList.remove("btn-success");
    })
    
    allCategoriesBtn.classList.add("btn-success");
    allCategoriesBtn.classList.remove("btn-base-200");

    loadAllTrees();
})







loadAllTrees();
renderingCategoriesBtn();
loadCategoriesBtns();