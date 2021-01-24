// Question One
const cat = {
    complain: catComplain()
}

function catComplain() {
    console.log("Meow!")
}

catComplain();



// Question Two

const changeHeader = document.querySelector("h3");

changeHeader.innerHTML = "Updated heading"



// Question Three 

changeHeader.style = "font-size: 2em;"



// Question Four

changeHeader.className = "heading";



// Question Five

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style = "color: red";
}

console.log(paragraphs);



// Question Six

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style = "color: yellow";



// Question Seven
// From Repo
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



function myFunction(list) {

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

myFunction(cats);



// Question Eight



function createCats(cats) {

    html = "";
    for (let i = 0; i < cats.length; i++) {

        if (cats[i].age === undefined) {
            cats[i].age = "Age Unknown"
        }


        html += `<div class="cat-box">
                <h5>Name: ${cats[i].name}</h5>
                <p>Age: ${cats[i].age}</p>
                    </div>`



    }

    return html;

}
const newCatHtml = createCats(cats);

const catHtmlContainer = document.querySelector(".cat-container")
catHtmlContainer.innerHTML = newCatHtml;