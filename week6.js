fetch("api-1.json")
    .then(function(response){
    if (!response.ok){ throw new Error("Something went wrong!")
    };
return response.json(); })
.then (function (data){
    console.log (data)
}); 
.then(function(data){
    if (data.length ===0 ) {
    console.log("Word not found!")
    } else {
    console.log ("Word:",data[0].word )
    console.log (
        "Definition:",
        data[0].meanings[0].definitions[0].defintions

    )
.catch(function(Error




 })


