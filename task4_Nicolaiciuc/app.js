const ol = document.createElement("ol");

document.body.append(ol);

const showNumber = (index) => {
    const li = document.createElement('li');

    li.innerText = `Элемент ${index + 1}`;

    if (index % 2) {
        li.style.background = "green";
    } else {
        li.style.background = "purple";
    }

    ol.append(li);

    if (index < 19) {
        setTimeout(() => {
            showNumber(index + 1);
        }, 2000)
    }
}

showNumber(0);