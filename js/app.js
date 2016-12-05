$( document ).ready(function() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
    }

    $('.user-offer').keyup(function () { 
        /* Remove all characters except numbers as the user types */
        var number = this.value.replace(/[^0-9\.]/g,'');
        /* Then add the commmas */
        this.value = numberWithCommas(number);
    });

    /* Collapse/expand when user presses hide/show */
   // $(".show-button").toggle(); 
    $( ".hide-button, .show-button" ).click(function() {        
        $(".show-button").toggle();
        $(".hide-button").toggle();
        $('.content').slideToggle( "slow" );

    });

    $('#submit').click(function(){
        var userOffer = $('.user-offer').val();
        var price = userOffer.replace(/[^0-9\.]/g,'');
        /* Create a dummy object with the price as an int and output to console */               
        var offer = {name:"Mr David Shepherd", ref:"REF6565", price:parseInt(price)};
        console.log( offer );
        
    });
    
});