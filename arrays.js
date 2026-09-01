document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // opgave 1
    let newNumbers = numbersArray.filter((number) => {
        return number > 20

    });
    console.log("Opgave 1", newNumbers);

    // opgave 2
    catsArray.push("Sniffles")
    console.log("Opgave 2", catsArray);

    // opgave 3
    console.log("Opgave 3a", dogsArray.includes("Trixie"))
    console.log("Opgave 3b", dogsArray.includes("Baxter"))

    //opgave 4
    function catCheck(cat) {
        if (catsArray.includes(cat)) {
            return true
        }
        else {
            return "undefined"
        }
    }
    console.log("Opgave 4a", catCheck("Bagheera"))
    console.log("Opgave 4b", catCheck("Salem"))

    // opgave 5
    let newNewNumbers = numbersArray.map((number) => number * 3)
    console.log("Opgave 5", newNewNumbers);

    // opgave 6
    console.log("Opgave 6", dogsArray.join(""));

    // opgave 7
    console.log("Opgave 7a", fruitsArray.indexOf("Mango"));
    console.log("Opgave 7a", fruitsArray.indexOf("Blåbær"));


}) // ends DOMContentLoaded