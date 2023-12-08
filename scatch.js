const url = "https://cdn.contentful.com/spaces/ka9x7i3b4e49/environments/master/entries?access_token=XDsz_JL64ML_sSt02_hJtwPrMhoQBy_wA21HTVxdhaA&content_type=triviaQ"

//********* */
//Functions
//********* */

        let items
        const questionNumber = 0
        fetch(url)
        .then(res => res.json())
        .then(data => {
             items = data.items
            
             
            // for( let item of items){
                const body = document.body
                    // console.log(items)
                    // console.log(items[questionNumber])
                    // console.log(items[6])

                body.innerHTML = `
                <h2>${items[questionNumber].fields.question}</h2>
                <h2>a: ${items[questionNumber].fields.a}</h2>
                <h2>b: ${items[questionNumber].fields.b}</h2>
                <h2>c: ${items[questionNumber].fields.c}</h2>
                <h2>d: ${items[questionNumber].fields.d}</h2>
                <h2>Answer: ${items[questionNumber].fields.b}</h2>
                `

                
              
            // }
            

        })