
  // Загружаем JSON данные
  fetch('test.json')
    .then(response => response.json())
    .then(data => {
      const block = document.getElementById('block');

      // Очищаем блок перед генерацией карточек
      block.innerHTML = '';

      // Перебираем объекты из JSON
      data.forEach(item => {
        // Создаем элемент карточки
        const card = document.createElement('div');
        card.classList.add('card');

        // Добавляем изображение
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        card.appendChild(image);

        // Добавляем цену
        const price = document.createElement('p');
        price.textContent = `Цена: ${item.price}₽`;
        card.appendChild(price);

        // Добавляем кнопку "Подробнее"
        const button = document.createElement('button');
        button.textContent = 'Подробнее';
        button.onclick = () => alert(`Подробнее о ${item.name}`);
        card.appendChild(button);

        // Добавляем карточку в блок
        block.appendChild(card);
      });
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));