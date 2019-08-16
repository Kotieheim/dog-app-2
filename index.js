function returnAltDescription(dogImgUrl) {
    let altText = dogImgUrl.replace(/https:\/\/images.dog.ceo\/breeds\//, "");
    return altText.replace(/\/.+/, "");
}

function imgString(imgUrl) {
    return `<img class="dog-image" src="${imgUrl}" alt="${returnAltDescription(imgUrl)}">`
}

function liString(imgUrl) {
    return `<li>${imgString(imgUrl)}</li>`;
}

function displayListings(resultsArr) {
    liStringArr = [];
    resultsArr.forEach(result => {
        console.log(result);
        liStringArr.push(liString(result));
    });
    $('#display').html(`<ul>${liStringArr.join('\n')}</ul>`);
    $('.container').removeClass('max-width');
}

function multipleDogs(qty) {
    fetch(`https://dog.ceo/api/breeds/image/random/${qty}`)
        .then(result => result.json())
        .then(resultsJson => {
            displayListings(resultsJson.message);
        })
        .catch(err => alert("whoa"));
}

function handleQtySubmit() {
    $('#get-qty').on('submit', function(e) {
        e.preventDefault();
        const qty = $('#qty').val();
        multipleDogs(qty);
    })
}

$(function() {
    handleQtySubmit();
})