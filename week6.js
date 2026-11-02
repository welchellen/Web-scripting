
const resultContainer = document.getElementById("result-container");
const searchBtn = document.getElementById("search-btn");

async function searchWord(word) {

    resultContainer.innerHTML = "";

    word = word.toLowerCase();

    try {

        const response = await fetch(
            "https://freedictionaryapi.com/api/v1/entries/en/" + word
        );

        if (!response.ok) {
            resultContainer.textContent = "Service Down";
            return;
        }

        const data = await response.json();

        if (!data) {
            return;
        }

        console.log(data);

        const wordHeading = document.createElement("h2");
        wordHeading.textContent = data.word;
        resultContainer.appendChild(wordHeading);

        const definitionList = document.createElement("ul");

        for (const entry of data.entries) {

            for (const sense of entry.senses) {

                const listItem = document.createElement("li");
                listItem.textContent = sense.definition;

                definitionList.appendChild(listItem);
            }
        }

        resultContainer.appendChild(definitionList);

    } catch (error) {

        console.log("ERROR:", error);

        resultContainer.textContent =
            "Sorry, that word could not be found.";
    }
}

searchBtn.addEventListener("click", function() {

    const wordInput = document.getElementById("word-input");
    const word = wordInput.value.trim();

    searchWord(word);

});
