# Project1
### By Jason Kulak

DEPLOYED SITE: [Click Here](https://jasonkulak.github.io/Seal_Project1/)

## Description on Project

A paragraph discussing the idea of your project, the API you are using, and desired user experience.

>  I am creating a 2 player Star Wars trivia game. I will be using contentful to create the questions and the API.  Users will answer questions related to the Star Wars universe

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

> The API I'll be using in from contentful.com and is a read-only API for delivering content from contentful to apps, websites, and other media.

Fetch called:
<script>
const url = "https://cdn.contentful.com/spaces/ka9x7i3b4e49/environments/master/entries?access_token=XDsz_JL64ML_sSt02_hJtwPrMhoQBy_wA21HTVxdhaA&content_type=triviaQ"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const items = data.items

        for( let item of items){
            const body = document.body

            body.innerHTML = `
            <h1>${item.fields.question}</h1>
            `
        }
    })
</script>


## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://i.imgur.com/k080Puo.jpg)

#### Mobile View

![My Mobile View](https://i.imgur.com/k080Puo.jpg)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||