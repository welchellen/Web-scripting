fetch("api-1.json")
    .then(function(response){
    if (!response.ok){ throw new error("Something went wrong!")
    };
return response.json(); })
.then (function (data){
    console.log (data)
}
    
.then(function(data){
    if (data.length ===0 ) {
    console.log("Word not found!")
    } else {
    console.log ("Word:",data[0].word )
    console.log (
        "Definition:",
        data[0].meanings[0].definitions[0].defintions

    )
.catch(function(error) {
console.log("ERROR could not connect to the dictionary service.")
})

}}))
async function searchWord(word) {

    resultContainer.innerHTML = "";

    word = word.toLowerCase();

   const response = await fetch ("api-1.json".word)

        async(function(response) {

            if (!response.ok) {
                throw new error("Word not found");
            }

            const data =  response.json();
        })

        async(function(data) {

            if (data.entries.length === 0) {
                throw new Error("Word not found");
            }

            const wordHeading = document.createElement("h2");

            wordHeading.textContent = word;

            resultContainer.appendChild(wordHeading);


            const definitionList = document.createElement("ul");

            for (const sense of data.entries[0].senses) {

                const listItem = document.createElement("li");

                listItem.textContent = sense.definition;

                definitionList.appendChild(listItem);
            }

            resultContainer.appendChild(definitionList);

        })

        .catch(function(error) {

            const errorMessage = document.createElement("p");

            errorMessage.textContent =
                "Sorry, that word could not be found.";

            resultContainer.appendChild(errorMessage);

        });
}const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {


    const wordInput = document.getElementById("word-input");
    const word = wordInput.value;


    searchWord(word);

});


