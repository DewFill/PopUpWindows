library()
    .popupWindowTwoButtons("#window1",
        ".ask",
        ".accept",
        function (){
            alert("Скрипт при нажатии на 'ДА'")
        },
        ".deny",
        function (){
            alert("Скрипт при нажатии на 'НЕТ'")
        },
        ".text")


library()
    .popupWindowOneButton("#window2",
        ".ask",
        ".button",
        function () {
            alert("Скрипт при нажатии на 'ОК'")
        },
        ".text");


library()
    .popupWindowInput("#window3",
        ".event",
        ".submit",
        function () {
            alert("Скрипт при нажатии на 'ОТПРАВИТЬ'")
        },
        ".input",
        ".text");