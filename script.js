const ModalFunc = () => {
        const modal = document.querySelector('.cart-modal-overlay');
        const cartBtn = document.querySelector('#cart-button')
        const openModal = () => {
                modal.classList.add('open')
        }
        const closeModal = () => {
                modal.classList.remove('open')
        }


        cartBtn.addEventListener('click', () => { openModal() });
        //closeBtn.addEventListener('click', () => {closeModal()});

        modal.addEventListener('click', (event) => {
                console.log()
                if (event.target.classList.contains('.cart-modal-overlay') ||
                        event.target.closest('.cart-modal-header--close')
                ) {

                        closeModal()
                }
        });

};

const RestsFunc = () => {
        const container = document.querySelector('#rests-container');
        const restArray = [
                {
                        id: 0,
                        title: 'Пицца плюс',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                },
                {
                        id: 1,
                        title: 'Тануки',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                },
                {
                        id: 2,
                        title: 'FoodBand',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                },
                {
                        id: 3,
                        title: 'Жадина-пицца',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                },
                {
                        id: 4,
                        title: 'Точка еды',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                },
                {
                        id: 5,
                        title: 'PizzaBurger',
                        time: 50,
                        raiting: 4.5,
                        price: 900,
                        type: 'Пицца',
                        image: 'rest-1'
                }
        ]
        const loading = () => {
                container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>';
        }
        const randerRests = (array) => {
                container.innerHTML = ''
                array.forEach((card) => {
                        container.insertAdjacentHTML('beforeend', `
                        <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card--image">
                                <img src="./images/rests/rest-${card.id + 1}.jpg" alt="${card.image}">
                            </div>
                            <div class="products-card--description">
                                <div class="products-card--description--row">
                                    <h4 class="products-card--description--title">${card.title}</h4>
                                    <div class="products-card--description--bage">${card.time} мин</div>
                                </div>

                                <div class="products-card--description--row">
                                    <div class="products-card--description--info">
                                        <div class="products-card--description--info-raiting">
                                            <img src="./images/icons/star.svg" alt="star">${card.raiting}
                                        </div>
                                        <div class="products-card--description--info-price">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="products-card--description--info-group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `)
                })
        }
        if (container) {
                loading();
                setTimeout(() => {
                        randerRests(restArray);
                }, 1000);
        }

}


const GoodsFunc = () => {
        const cont = document.querySelector('#goodsFunc');
        const gArray = [
                {
                        id: 0,
                        title: 'Ролл угорь стандарт',
                        text: 'Рис, угорь, соус унаги,<br>кунжут, водоросли нори.',
                        price: 250
                },
                {
                        id: 1,
                        title: 'Калифорния лосось стандарт',
                        text: 'Рис, лосось, авокадо, огурец, майонез,<br>икра масаго, водоросли нори.',
                        price: 395
                },
                {
                        id: 2,
                        title: 'Окинава стандарт',
                        text: 'Рис, креветка отварная, сыр<br>сливочный, лосось, огурец свежий...',
                        price: 250
                },
                {
                        id: 3,
                        title: 'Цезарь маки хl',
                        text: 'Рис, куриная грудка копченая, икра<br>масаго, томат, айсберг, соус цезарь...',
                        price: 250
                },
                {
                        id: 4,
                        title: 'Ясай маки стандарт 185 г',
                        text: 'Рис, помидор свежий, перец<br>болгарский, авокадо, огурец, айсберг',
                        price: 250
                },
                {
                        id: 5,
                        title: 'Ролл с креветкой стандарт',
                        text: 'Рис, водоросли нори, креветки<br>отварные, сыр сливочный, огурцы',
                        price: 250
                }
        ]
        const goodsRand = (array) => {
                cont.innerHTML = ''
                array.forEach((card) =>
                        cont.insertAdjacentHTML('beforeend', `
                        <div class="products-card">
                            <div class="products-card--image">
                                <img src="./images/goods/goods_${card.id+1}.jpg" alt="goods_${card.id+1}">
                            </div>
                            <div class="products-card--description">
                                <div class="products-card--description--row">
                                    <h5 class="products-card--description--name">${card.title}</h5>
                                </div>

                                <div class="products-card--description--row">
                                    <p class="products-card--description--text">${card.text}</p>
                                </div>

                                <div class="products-card--description--row">
                                    <div class="products-card--description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/shopping-cart.svg" alt="user">
                                        </button>
                                        <span class="products-card--description-controls--price">${card.price} ₽</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        `))
        }
        if (cont) {
                goodsRand(gArray);
        }
}



ModalFunc();
RestsFunc();
GoodsFunc();