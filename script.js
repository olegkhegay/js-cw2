const catalog = [
    {
        name: 'AUG',
        img: 'https://www.taiwangun.com/img/imagecache/163001-164000/b24228243cabdaeb5eea095d7580418889e2876b.webp',
        price: 2200,
        oldPrice: 4400,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },

    {
        name: 'AK-47',
        img: 'https://cdn.britannica.com/70/123170-050-D7AAF458/AK-47.jpg',
        price: 1200,
        oldPrice: 2400,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },

    {
        name: 'P90',
        img: 'https://fnherstal.com/app/uploads/FN-P90-Tactical-LV.png',
        price: 3200,
        oldPrice: 6400,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },

    {
        name: 'AWP',
        img: 'https://lasertaglsd.su/wp-content/uploads/2016/07/1458732565_awp1.jpg',
        price: 4600,
        oldPrice: 7500,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },

    {
        name: 'DEAGLE',
        img: 'https://www.magnumresearchcustoms.com/wp-content/uploads/2024/03/DE50ALC1-scaled.jpg',
        price: 1000,
        oldPrice: 2000,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },

    {
        name: 'P350',
        img: 'https://masterpiecer-images.s3.yandex.net/92ea60a8968c11ee88a61e2d0b427d15:upscaled',
        price: 600,
        oldPrice: 1200,
        currency: '$',
        desc: 'Оружие специфльного назначение, а так оружие говнище',
    },
]

const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
    <div class="card">
            <img src="${card.img}" alt="" />
            <h3>${card.name}</h3>
            <p>${card.desc}</p>
            <s>${card.oldPrice}</s>
            <h4>${card.price}</h4>
            <button>buy</button>
          </div>
    `
})

console.log(cards);
