function grayScaleToggle(x){
    $(`.${x}Button`).hover(function () {
        $(`.${x}Select`).toggleClass('grayScale grayScaleOff');
    })
}

grayScaleToggle('japan');
grayScaleToggle('brazil');
grayScaleToggle('india');
grayScaleToggle('vietnam');



$('.brazilButton').on('click', function() {
    $('section.introPage').toggleClass('display noDisplay');
    $('section.brazil').toggleClass('noDisplay display');
});

// $('.indiaButton').on('click', function () {
//     $('section.introPage').toggleClass('display noDisplay');
//     $('section.india').toggleClass('noDisplay display');
// });


//THis section for Brazilian Steakhouse flow

function incorrectFunction(x){
    $(`${x} .wrongOption`).on('click', function () {
        $(`${x} .rightOption`).toggleClass('display noDisplay');
        $(`${x} .answeredWrong`).toggleClass('noDisplay display');
        $(`${x}Next`).toggleClass('noDisplay display');

        });
}

function correctFunction(x) {
    $(`${x} .rightOption`).on('click', function () {
        $(`${x} .wrongOption`).toggleClass('display noDisplay');
        $(`${x} .answeredRight`).toggleClass('noDisplay display');
        $(`${x}Next`).toggleClass('noDisplay display');
    });
}

correctFunction('.saladQuestion');
incorrectFunction('.saladQuestion');

$('.saladQuestionNext').on('click', function () {
    $('.apitizerQuestion').toggleClass('noDisplay display');
});

correctFunction('.apitizerQuestion');
incorrectFunction('.apitizerQuestion');

$('.apitizerQuestionNext').on('click', function () {
    $('.meatQuestion').toggleClass('noDisplay display');
});

correctFunction('.meatQuestion');
incorrectFunction('.meatQuestion');




// $('.saladQuestion .rightOption').on('click', function () {
//     $('.saladQuestion .wrongOption').toggleClass('display noDisplay');
//     $('.saladQuestion .answeredRight').toggleClass('noDisplay display');
//     $('.saladNextQuestion').toggleClass('noDisplay display');

// });

// $('.saladNextQuestion').on('click', function(){
//     $('.apitizerQuestion').toggleClass('noDisplay display');
// });

// $('.apitizerQuestion .wrongOption').on('click', function () {
//     $('.apitizerQuestion .rightOption').toggleClass('display noDisplay');
//     $('.apitizerQuestion .answeredWrong').toggleClass('noDisplay display');
//     $('.answeredWrong').smoothScroll();
//     $('.apitizerNextQuestion').toggleClass('noDisplay display');

// });

// $('.saladQuestion .rightOption').on('click', function () {
//     $('.saladQuestion .wrongOption').toggleClass('display noDisplay');
//     $('.saladQuestion .answeredRight').toggleClass('noDisplay display');
//     $('.saladNextQuestion').toggleClass('noDisplay display');

// });