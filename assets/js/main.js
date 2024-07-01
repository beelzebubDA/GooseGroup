// advantages items

let itemBtn = $(".devblock_R-L-item__link");
let itemText = $(".devblock_R-L-item__text");
itemBtn.on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
});

// stages 

let stagesBtn = $(".stages_item");
stagesBtn.on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).parent().find(stagesBtn).not($(this)).removeClass("active");
});

// cases show all

let showAllBtn = $(".cases_shows-showAll");
let closeAllBtn = $(".cases_shows-showAll");
showAllBtn.on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().parent().find($(".cases_item")).toggleClass("active");
});

// cases show one by one
let showOneByOneBtns = $(".cases_shows-numb__link");
let casesItem = $(".cases_item");
showOneByOneBtns.each(function (btn) {
    $(this).on("click", function (e) {
        e.preventDefault();
        let getattrNumb = $(this).attr("data-numb");
        $(this).addClass("actived");
        showOneByOneBtns.not($(this)).removeClass("actived");

        casesItem.each(function (item) {
            if ($(this).attr("data-numb") == getattrNumb) {
                $(this).addClass("actived");
                $(this).parent().find(".cases_item").not($(this)).removeClass("actived");
                $(this).parent().find(".cases_item").not($(this)).removeClass("active");
            }
        });
    });
});

// modal personal data

let personalDataInp = $(".modalContactUs_form-label");
personalDataInp.on("click", function (e) {
    e.preventDefault();
    personalDataInp.toggleClass("active");
});

// MODAL OPEN BTNS


// modal close btns {
let modalCloseX = $(".modalContactUs_form-closeI");
let modalCloseT = $(".modalContactUs_form-closeT");
let modalBlock = $(".modalContactUs");
let body = $("body");
modalCloseX.on("click", function (e) {
    e.preventDefault();
    modalBlock.removeClass("active");
    body.removeClass("fixed");
    headerBlock.removeClass("fixed");
});
modalCloseT.on("click", function (e) {
    e.preventDefault();
    modalBlock.removeClass("active");
    body.removeClass("fixed");
    headerBlock.removeClass("fixed");
});


let openModalBtn = $(".modalOpenBtn");
openModalBtn.on("click", function (e) {
    e.preventDefault()
    modalBlock.addClass("active");
    body.addClass("fixed");
    headerBlock.addClass("fixed");
})

// header menu

let headerMenuBtn = $(".header_block-menu");
let headerMenu = $(".header_block-R__nav");
let headerBlock = $(".header_block");
headerMenuBtn.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    headerMenu.toggleClass("active");
    body.toggleClass("active");
    headerBlock.toggleClass("active");
});


// masks 

// $(".phoneInp").inputmask("(99) 999-99-99");
// Inputmask({"mask": "+9 (999) 999-99-99"}).mask(".phoneInp");
Inputmask("*{3,20}@*{3,20}.*{2,7}").mask(".mailInp");

$('.phoneInp').on('keydown',function(e){
    console.log(e.keyCode)

    if(e.keyCode !=8 && e.keyCode != 107){

        if( ( e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)){

            return false;
            
        }

    }

    
})

// document.querySelector('.phoneInp').addEventListener('input',function(e){
//     console.log(e)
// })

// modal inputs 

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $(".modalContactUs_form").validate({
    rules: {
        Name:{
            required: true,
            minlength: 3
        },
        Phone:{
            required: true,
        },
        Email: {
            required: true,
            email: true
        }
    },
    messages: {
        Name: {
            minlength: "The name was entered incorrectly"
        },
        Phone:{
            minlength: "The phone number was entered incorrectly"
        },
        Email:{
            email: "The mail was entered incorrectly"
        }
    },
    validClass: "active",
    errorClass: "error"
});