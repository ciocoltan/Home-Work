(function () {
    let paragraph = document.getElementsByTagName("div");
    for (let index = 0; index < paragraph.length; index++) {
        paragraph[index].innerHTML = paragraph[index].innerHTML.toLowerCase();
    }
})()