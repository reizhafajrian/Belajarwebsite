function toggle() {



    this.classList.toggle("open")
    menu.classList.toggle("open_menu")


    allMenu.forEach((element, i) => {
        setTimeout(() => {
            element.classList.toggle("anotherclass");
        }, i * 200);
    });



}