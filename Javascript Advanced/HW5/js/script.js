window.addEventListener("load", function () {
    function Info() {
        this.info = document.createElement("div");
        this.info.style.position = "absolute";
        this.info.style.visibility = "hidden";
        this.info.className = "info";
    }
    Info.prototype.show = function (text, x, y) {
        this.info.innerHTML = text;
        this.info.style.left = x + "px";
        this.info.style.top = y + "px";
        this.info.style.visibility = "visible";
        if (this.info.parentNode != document.body)
            document.body.appendChild(this.info);
    };
    Info.prototype.hide = function () {
        this.info.style.visibility = "hidden";
    };
    let comment = new Info();
    let form = document.getElementById("form");
    let inputs = document.getElementsByTagName("input");
    //console.log(form);


    form.addEventListener("keypress", function (e) {
        console.log(e.target.id)
        let pattern;
        switch (e.target.id) {
            case "login":
                comment.show("Logging in should be only letters", e.target.offsetWidth + 20, e.target.offsetTop);
                pattern = /[a-zA-Z]+/;
                if (pattern.test(e.key)) {
                    comment.hide();
                } else {
                    e.preventDefault();
                }
                break;
            case "name":
                comment.show("The name must be the capital letter", e.target.offsetWidth + 20, e.target.offsetTop);
                pattern = /[A-Z]{1}/;
                if (pattern.test(e.key)) {
                    comment.hide();
                } else {
                    e.preventDefault();
                }
                break;
            case "surname":
                comment.show("The surname must be the lowercase", e.target.offsetWidth + 20, e.target.offsetTop);
                pattern = /[a-z]{1}/;
                if (pattern.test(e.key)) {
                    comment.hide();
                } else {
                    e.preventDefault();
                }
                break;
            case "age":
                comment.show("The age must be until 60", e.target.offsetWidth + 20, e.target.offsetTop);
                pattern = /[0-9]{1,2}/;
                console.log(e.target.value.length)
                console.log(e)
                if (pattern.test(e.key) && e.target.value <= 60 && e.target.value.length < 2) {
                    comment.hide();
                } else {
                    e.preventDefault();
                }
                break;
            default:
                comment.show("You clicked on the form", e.target.offsetWidth + 20, e.target.offsetTop);
                break;
        }
        if (e.target.localName == "label") comment.show("You clicked on the label", e.target.offsetWidth + 20, e.target.offsetTop);


        inputs[e.target.id].addEventListener("blur", function (e) {
            comment.hide();
            e.stopPropagation();
        }, false);


        e.stopPropagation();
    }, false);

    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    // }, false);

}, false);