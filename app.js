  // JavaScript code (exactly as you had, untouched)
    const inp = document.getElementById("inp")
    const h2 = document.getElementById("h2")

    let number1 = 0
    let number2 = 0
    let opa = ""


    function addnumber(num) {

        inp.value += num

        if (opa === "") {
            number1 = +inp.value
        } else {
            number2 = +inp.value
        }


    }

    function amal(res) {

        opa = res

        inp.value = ""

    }

    function sum() {

        if (opa == "+") {
            h2.innerHTML = number1 + number2

        } else if (opa == "-") {

            h2.innerHTML = number1 - number2
        } else if (opa == "*") {
            h2.innerHTML = number1 * number2

        } else {
            h2.innerHTML = number1 / number2

        }
        inp.value = ""



    }

    function reset() {
        inp.value = ""
        number1 = 0
        number2 = 0
        opa = ""
        h2.innerHTML = ""
    }