const dataTechnology = [
    {
        "name":"1. Alphabet",
        "url":"https://bit.ly/3dAzk66",
        "price":"Price: $2259.72",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"2. Facebook",
        "url":"https://bit.ly/3xc4gRV",
        "price":"Price: $299.22",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"3. Paypal",
        "url":"https://bit.ly/3elLGy3",
        "price":"Price: $265.16",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"4. Alibaba",
        "url":"https://bit.ly/32B46oY",
        "price":"Price: $226.85",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"5. Pinterest",
        "url":"https://bit.ly/32xtqw8",
        "price":"Price: $72.09",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"6. Microsoft",
        "url":"https://bit.ly/3xegnhq",
        "price":"Price: $259.41",
        "dividend":"Dividend: 0.87% ($2.24 per share za rok, cca)"
    },
    {
        "name":"7. Spotify",
        "url":"https://bit.ly/3v9ENGK",
        "price":"Price: $262.00",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"8. Shopify",
        "url":"https://bit.ly/3v9F1Od",
        "price":"Price: $1142.95",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"9. Netflix",
        "url":"https://bit.ly/3asCbMv",
        "price":"Price: $510.04",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"10. Amazon",
        "url":"https://bit.ly/32xBvRB",
        "price":"Price: $3345.05",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"11. Adobe",
        "url":"https://bit.ly/3nfM8lC",
        "price":"Price: $512.90",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"12. Autodesk",
        "url":"https://bit.ly/3sz5ALb",
        "price":"Price: $289.12",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"13. Fiverr",
        "url":"https://bit.ly/3sz5Mdn",
        "price":"Price: $215.84",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"14. Tencent",
        "url":"https://bit.ly/2Qf0PcC",
        "price":"Price: $79.52",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"15. Square",
        "url":"https://bit.ly/32zA3Or",
        "price":"Price: $249.31",
        "dividend":"Dividend: 2.49% ($4.04 per share za rok, cca)"
    },
    {
        "name":"16. Roku",
        "url":"https://bit.ly/3n8X30i",
        "price":"Price: $353.98",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"17. Voyager",
        "url":"https://bit.ly/32Br6o0",
        "price":"Price: $19.23",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"18. Coinbase",
        "url":"https://bit.ly/3gsRkRN",
        "price":"Price: $319.05",
        "dividend":"Dividend: NONE"
    },
    {
        "name":"19. ADP",
        "url":"https://bit.ly/3eisxNj",
        "price":"Price: $192.75",
        "dividend":"Dividend: 1.93% ($3.72 per share za rok, cca)"
    },
    {
        "name":"20. Texas Instruments",
        "url":"https://bit.ly/32waw92",
        "price":"Price: $187.06",
        "dividend":"Dividend: 2.13% ($4.08 per share za rok, cca)"
    },
    {
        "name":"21. Cisco Systems",
        "url":"https://bit.ly/3sF8L44",
        "price":"Price: $52.85",
        "dividend":"Dividend: 2.80% ($1.48 per share za rok, cca)"
    },
    
]

const dataFinancials = [
    {
        "name":" 1. JPMorgan Chase",
        "url":"https://bit.ly/3eoXb7Z",
        "price":"Stock: $38.53",
        "dividend":"Dividend: 2.36% ($3.60 per share za rok, cca)"
    },
    {
        "name":"2. Bank of America",
        "url":"https://bit.ly/3ar9T52",
        "price":"Stock: $38.53",
        "dividend":"Dividend: 1.89% ($0.72 per share za rok, cca)"
    },
    {
        "name":"3. Aflac",
        "url":"https://bit.ly/3n293AA",
        "price":"Stock: $53.56",
        "dividend":"Dividend: 2.47% ($1.32 per share za rok, cca)"
    },
    {
        "name":"4. Franklin Resources",
        "url":"https://bit.ly/3v3TZFl",
        "price":"Stock: $29.97",
        "dividend":"Dividend: 3.73% ($1.12 per share za rok, cca)"
    },
    {
        "name":"5. Cincinnati Financial",
        "url":"https://bit.ly/3tuOq2q",
        "price":"Stock: $107.22",
        "dividend":"Dividend: 2.37% ($2.52 per share za rok, cca)"
    },
    {
        "name":"6. Chubb",
        "url":"https://bit.ly/2QIQlSn",
        "price":"Stock: $161.71",
        "dividend":"Dividend: 1.92% ($3.12 per share za rok, cca)"
    },
    {
        "name":"7. People's United Financial",
        "url":"https://bit.ly/3v1UO1u",
        "price":"Stock: $18.04",
        "dividend":"Dividend: 4.03% ($0.72 per share za rok, cca)"
    },
]

dataTechnology.forEach((data) => {
    $(".info .infoTechnology .infoData").append(`
    
    <div class="mb-5 technology">
            <li class="dataName">${data.name}</li>
            <li class="dataUrl"><a href="${data.url}" target="_blank">Information</a></li>
            <li class="dataPrice">${data.price}</li>
            <li class="dataDividend">${data.dividend}</li>
    </div>
    
    `);


    $(".info .infoZde .infoData").hide();
});

dataFinancials.forEach((data) => {
    $(".info .infoFinancials .infoData").append(`
    
    <div class="mb-5 technology">
            <li class="dataName">${data.name}</li>
            <li class="dataUrl"><a href="${data.url}" target="_blank">Information</a></li>
            <li class="dataPrice">${data.price}</li>
            <li class="dataDividend">${data.dividend}</li>
    </div>
    
    `);


    $(".info .infoData").hide();
});

$(function () {

    $(".info h3").on('click', function () {
        $(this).next().toggle(1000);
    });
});