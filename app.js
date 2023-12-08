// function onButtonClick() {

// }
let rebels = 0
let empire = 0

let items = {}
const url = "https://cdn.contentful.com/spaces/ka9x7i3b4e49/environments/master/entries?access_token=XDsz_JL64ML_sSt02_hJtwPrMhoQBy_wA21HTVxdhaA&content_type=triviaQ"
       
        
        function questions() {
        fetch(url)
        .then(res => {return res.json()})
        .then(data => {
             items = data.items
             let i = 1
             renderQuestion(i)
             //checkAnswers(i, a)
//             // for( let item of items){
                
//             // }
            console.log(items)  
        })
    }


function renderQuestion(i) {
    let questionNumber = 0
    const secMidDiv = document.querySelector(".second-middle-field")
                    // console.log(items)
                    // console.log(items[questionNumber])
                    // console.log(items[6])

                secMidDiv.innerHTML = `
                <h2>${items[i].fields.question}</h2>
                <h2>a: ${items[i].fields.a}</h2>
                <h2>b: ${items[i].fields.b}</h2>
                <h2>c: ${items[i].fields.c}</h2>
                <h2>d: ${items[i].fields.d}</h2>
                <h2>Answer: ${items[i].fields.answer}</h2>
                `          
}
// function checkAnswers(i, x) {
//     if 
//         (items[i].fields.answer === (items[i].fields.x)) {
//             console.log("correct")
//         // POINTS
//         } else {
//             console.log("incorrect")
//         // NO POINTS
//         }
//       }
function submit(event) {
    event.preventDefault()
    const rebelButton = event.target
    const formData = new FormData(rebelButton)
    const useTheForce = formData.get("rebels-submit")
    console.log(useTheForce)
    questions(useTheForce)
}





      questions()