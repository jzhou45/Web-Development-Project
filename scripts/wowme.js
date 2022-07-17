$(document).ready(function(){
    $('#menu').click(function(){
        $('.dropDown ul').slideToggle('slow');
    });
});
$(document).ready(function(){
    $('#fadeIn').click(function(){
        $('img').fadeIn();
    });
});
$(document).ready(function(){
    $('#fadeOut').click(function(){
        $('img').fadeOut();
    });
});

var kermiScre = new Audio('../assests/kermit.mp3');
function playMusic(num){
    
    if (num == '1'){
        kermiScre.play();
        kermiScre.loop = true;
    }
    if (num == '0'){
        kermiScre.pause();
    }
}

$(document).ready(function(){
    let arr = ["#9BB5CE", "#5C5B57", "#F9E5C9", "#F5F5F0", "#505F4E", "#A50011", "#F9F3EE", "#171E27", "#215E7C", "#FAE0D8", "#364935", "#2E4755", "#201D24", "#FBF7F4", "#B8AFE6", "#4E5851", "#535150", "#FAD7BD", "#D1CDDA", "#FFE681", "#AEE1CD", "#EE7762"];
    let num = 0;
    $(document).keyup(function() {
        $('body').css('background-color', arr[num]);
        if (num == 21){
            num = 0;
        }
        else{
            num += 1;
        }
    });
    var arr2 = ["Sierra Blue", "Graphite", "Gold", "Silver", "Alpine Green", "RED", "Starlight", "Midnight", "Blue", "Pink", "Green", "Pacific Blue", "Black", "White", "Purple", "Midnight Green", "Space Grey", "Rose Gold", "Light Purple", "Light Yellow", "Light Green", "Coral"];
    var darkColors = ["Alpine Green", "Black", "Blue", "Graphite", "Green", "Midnight", "Midnight Green", "Pacific Blue", "RED", "Space Grey"];
    var num2 = 0;
    $(document).keyup(function() {
        $('#webPageColor').text('The color of this page is ' + arr2[num2] + '.');
        if (num2 == 21){
            num2 = 0;
        }
        else{
            num2 += 1;
        }
        if (darkColors.includes(arr2[num2 - 1])){
            $('body').css('color', 'white');
        }
        else{
            $('body').css('color', 'black');
        }
    });
});