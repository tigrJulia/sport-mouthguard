const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
};

const radios = document.querySelectorAll('.subscribe__radio');
const parents = document.querySelectorAll('.subscribe');

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        parents.forEach(parent => {
            parent.style.border = '1px solid #000';
        });

        if (this.checked) {
            const parent = this.closest('.subscribe');
            parent.style.border = '1px solid #EFEFEF';
        }
    });
});


document.getElementById('colour').addEventListener('change', function() {
    let selectedValue = this.value;

    // Показати відповідний блок
    if (selectedValue == "1") {
        document.getElementById('onecolor').style.display = 'block';
        document.getElementById('twocolor').style.display = 'none';
    document.getElementById('threecolor').style.display = 'none';
    } else if (selectedValue == "2") {
        document.getElementById('onecolor').style.display = 'block';
        document.getElementById('twocolor').style.display = 'block';
        document.getElementById('threecolor').style.display = 'none';
    } else if (selectedValue == "3") {
        document.getElementById('onecolor').style.display = 'block';
        document.getElementById('twocolor').style.display = 'block';
        document.getElementById('threecolor').style.display = 'block';
    }
});
