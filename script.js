const parsEl = JSON.parse(DataJS);


const container = document.querySelector('div.product-box_content');
parsEl.forEach(element => {
    const tempEl = document.getElementById('cartTemp');
    const clone = tempEl.content.cloneNode(true);
    clone.querySelector('img.imgEl').src=element.url;
    clone.querySelector('span.min_title').innerHTML = element.name;
    clone.querySelector('span.paragrath').innerHTML = element.description;
    clone.querySelector('span.text').innerHTML = element.price;

    container.appendChild(clone);
    
});


