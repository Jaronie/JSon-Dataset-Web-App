//access to dataset elements

let name = document.getElementById("name");
name.style.fontWeight = "bold";
let year = document.getElementById("year")
let date = document.getElementById("date")
let theatre = document.getElementById("theatre")
let type_of = document.getElementById("type")

let fact_1 = document.getElementById("1");
let fact_2 = document.getElementById("2");

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");


//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;
    console.log("previous");

    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;
    console.log("next");

    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    console.log("Next index is " + index);

    let broadways = broadway[index];
    console.log(broadways)

    console.log(broadways.Show.Name)

    //values
    name.textContent = broadways.Show.Name;
    year.textContent = broadways.Date.Year;
    date.textContent = broadways.Date.Full;
    theatre.textContent = broadways.Show.Theatre;
    type_of.textContent = broadways.Show.Type;



}
//count the amount of Musical shows
let musical_counter = 0;
for (let i = 0; i < broadway.length; i++) {
    if (broadway[i].Show.Type === 'Musical'){
        musical_counter++;
    }

}



fact_1.textContent = `This dataset dates back all the way to ${broadway[0].Date.Full}`
fact_2.textContent = `According to this dataset, there are a total of ${musical_counter} musicals out of 500 shows.`
