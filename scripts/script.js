// THis section for main/home page

function grayScaleToggle(x){
    $(`.${x}Button`).hover(function () {
        $(`.${x}Select`).toggleClass('grayScale grayScaleOff');
    })
};

grayScaleToggle('japan');
grayScaleToggle('brazil');
grayScaleToggle('india');
grayScaleToggle('vietnam');

function mainPageTransition(x){
    $(`.${x}Button`).on('click', function () {
        $('section.introPage').toggleClass('display noDisplay');
        $(`section.${x}`).toggleClass('noDisplay display');
    });
};

mainPageTransition('japan');
mainPageTransition('brazil');
mainPageTransition('india');
mainPageTransition('vietnam');

function goBackHome(x){
    $(`.${x}BacktoHome`).on('click', function () {
        $('section.introPage').toggleClass('noDisplay display');
        $(`section.${x}`).toggleClass('display noDisplay');
    });
};

goBackHome('japan');
goBackHome('brazil');
goBackHome('india');
goBackHome('vietnam');



function incorrectFunction(x){
    $(`${x} .wrongOption`).on('click', function () {
        $(`${x} .rightOption`).toggleClass('display noDisplay');
        $(`${x} .answeredWrong`).toggleClass('noDisplay display');
        $(`${x}Next`).toggleClass('noDisplay display');

        });
};

function correctFunction(x) {
    $(`${x} .rightOption`).on('click', function () {
        $(`${x} .wrongOption`).toggleClass('display noDisplay');
        $(`${x} .answeredRight`).toggleClass('noDisplay display');
        $(`${x}Next`).toggleClass('noDisplay display');
    });
};

// This Section for Brazil questionflow
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

// This Section for India Flow
correctFunction('.sauceQuestion');
incorrectFunction('.sauceQuestion');

$('.sauceQuestionNext').on('click', function () {
    $('.utensilQuestion').toggleClass('noDisplay display');
});

correctFunction('.utensilQuestion');
incorrectFunction('.utensilQuestion');

$('.utensilQuestionNext').on('click', function () {
    $('.dippingQuestion').toggleClass('noDisplay display');
});

correctFunction('.dippingQuestion');
incorrectFunction('.dippingQuestion');

// This Section for Vietnam Flow
correctFunction('.flavourSauceQuestion');
incorrectFunction('.flavourSauceQuestion');

$('.flavourSauceQuestionNext').on('click', function () {
    $('.basilQuestion').toggleClass('noDisplay display');
});

correctFunction('.basilQuestion');
incorrectFunction('.basilQuestion');

$('.basilQuestionNext').on('click', function () {
    $('.spoonQuestion').toggleClass('noDisplay display');
});

correctFunction('.spoonQuestion');
incorrectFunction('.spoonQuestion');

// THis section for Japan Flow

correctFunction('.riceQuestion');
incorrectFunction('.riceQuestion');

$('.riceQuestionNext').on('click', function () {
    $('.wasabiQuestion').toggleClass('noDisplay display');
});

correctFunction('.wasabiQuestion');
incorrectFunction('.wasabiQuestion');

$('.wasabiQuestionNext').on('click', function () {
    $('.soysauceQuestion').toggleClass('noDisplay display');
});

correctFunction('.soysaucQuestion');
incorrectFunction('.soysauceQuestion');

$('.soysauceQuestionNext').on('click', function () {
    $('.gingerQuestion').toggleClass('noDisplay display');
});


