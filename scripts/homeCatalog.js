function productCreate(id, products, mainDiv) {
	var cardListDiv = document.getElementById(mainDiv);
	let cardDiv = document.createElement('div');
	cardDiv.className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12";
	let card = document.createElement('div');
	card.className = "card";
	let imgWrapper = document.createElement('div');
	imgWrapper.className = "d-flex justify-content-center";
	var cardLink = document.createElement('a');
	cardLink.setAttribute('href', 'product.html?id=' + products[id].id);
	let cardImg = document.createElement('img');
	cardImg.setAttribute('src', products[id].images[0]);
	cardImg.className = "card_img";

	cardLink.appendChild(cardImg);
	imgWrapper.appendChild(cardLink);
	card.appendChild(imgWrapper);

	let infoDiv = document.createElement('div');
	infoDiv.className = "d-flex align-items-center flex-row text-center";
	let infoWrapper = document.createElement('div');
	infoWrapper.className = "mx-auto";
	cardLink = document.createElement('a');
	cardLink.setAttribute('href', 'product.html?id=' + products[id].id);
	let productName = document.createElement('p');
	productName.className = "card-title";
	productName.textContent = products[id].brand + ' ' + products[id].name;
	let productPrice = document.createElement('p');
	productPrice.className = "card-price";
	productPrice.textContent = products[id].price;

	cardLink.appendChild(productName);
	cardLink.appendChild(productPrice);
	infoWrapper.appendChild(cardLink);
	infoDiv.appendChild(infoWrapper);
	card.appendChild(infoDiv);

	let cardIconDiv = document.createElement('div');
	cardIconDiv.className = "card_icon";
	let cardIconDivLink = document.createElement('a');
	cardIconDivLink.className = "card_package";
	let cardIconSvg = document.createElement('svg');
	cardIconSvg.className = "icon icon-package";
	let cardIconSvgUse = document.createElementNS("http://www.w3.org/2000/svg", 'use');
	cardIconSvgUse.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', 'assets/square-shopping-bag-with-handle.svg#Capa_1');

	cardIconSvg.appendChild(cardIconSvgUse);
	cardIconDivLink.appendChild(cardIconSvg);
	cardIconDiv.appendChild(cardIconDivLink);
	infoDiv.appendChild(cardIconDiv);

	cardDiv.appendChild(card);
	cardListDiv.appendChild(cardDiv);
}

function cardListCreate(products, mainDiv) {
	for (var i = 0; i < products.length; i++) {
		productCreate(i, products, mainDiv);
	}
}

cardListCreate(filteredArr, 'productCard');
