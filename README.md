# PopUp Window Library
### Реально нереальная библиотека для добавления всплывающих окон на Вашем сайте.
###### Пример: 
## Подключение
```
    <link rel="stylesheet" href="style.css">
    <script defer src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script defer src="script.js"></script>
    <script defer src="user.js"></script>
```

## Примеры
### Окно с текстом и одной кнопкой:
##### HTML
```html
<div id="window1" class="window">
    <p class="text">Вам пришло сообщение</p>
    <button class="ask">1 BUTTON</button>
    <button class="button">ОК</button>
</div>
```
#### JavaScript
```javascript
popup()
    .oneButtonWindow("#window1",
        ".ask",
        ".button",
        function () {
            alert("Скрипт при нажатии на 'ОК'")
        },
        ".text");
```
***
### Окно с текстом и двумя кнопками:
##### HTML
```html
<div id="window2" class="window">
    <p class="text">Подтвердить действие?</p>
    <button class="ask">2 BUTTONS</button>
    <button class="accept">ДА</button>
    <button class="deny">НЕТ</button>
</div>
```
#### JavaScript
```javascript
popup()
    .twoButtonsWindow("#window2",
        ".ask",
        ".accept",
        function (){
            alert("Скрипт при нажатии на 'ДА'")
        },
        ".deny",
        function (){
            alert("Скрипт при нажатии на 'НЕТ'")
        },
        ".text");
```
***
### Окно с текстом, интупом и кнопкой отправки:
##### HTML
```html
<div id="window3" class="window">
    <p class="text">Введите имя:</p>
    <label>
        <input type="text" class="input">
    </label>
    <button class="event">INPUT</button>
    <button class="submit">Отправить</button>
</div>
```
#### JavaScript
```javascript
popup()
    .inputWindow("#window3",
        ".event",
        ".submit",
        function () {
            alert("Скрипт при нажатии на 'ОТПРАВИТЬ'")
        },
        ".input",
        ".text");
```

## Функции
```popup()``` - основная функция-коллекция для других функций.

```popup().oneButtonWindow(```*unique* **selector**, **selector**, **selector**, **function**, **selector**```);``` - функция
для создания всплывающего окна с текстом и одной кнопкой с привязанной функцией.

```popup().twoButtonsWindow(```*unique* **selector**, **selector**, **selector**, **function**, **selector**```);``` - функция
для создания всплывающего окна с текстом и двумя кнопками с привязанными функциями.


``` popup().oneButtonWindow( ```*unique* **selector**, **selector**, **selector**, **function**, **selector**```);``` - функция
для создания всплывающего окна с текстом, полем ввода и одной кнопкой с привязанной функцией с передающим параметром значение поля ввода.

## Особенности работы
1. Первый селектор в функции должен быть уникальным.
2. После нажатия на Event кнопку она удаляется и вместо нее создается кнопка-привидение с классом "popupWindowGhostEventButton". Если вы хотите поменять стиль Event кнопки, то необходимо добавить тот же стиль кнопке-привидению. 
