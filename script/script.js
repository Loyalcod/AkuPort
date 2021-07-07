$(document).ready(function(){
// alert('hello')

$(".menubut").click(function(){
    $(".listmenu").toggle({display: 'block'});
})
$(".closebar").click(function(){
    $(".listmenu").hide(2000, function(){

    });
});


// $(".menubut").on("dbclick",function(){
//     $(".listmenu").animate({width:'0'})
// });





})