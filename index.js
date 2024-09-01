
var noButtons=$(".photo").length;

for(var i=0;i<noButtons;i++){

   $(".photo")[i].addEventListener("click",function(){

      var buttonsInnerHTML = this.innerHTML;
      makeSound(buttonsInnerHTML);

   });
}



function makeSound(_buttonsInnerHTML){

   switch (_buttonsInnerHTML) {
       case "Centenario": 
       $(".img1")
       .fadeOut(1500, function() {
            $('.img1').attr('src','2.jpg');
       })
       .fadeIn(1500); 
           

           break;
       case "Aventador":
        $(".img1")
        .fadeOut(1500, function() {
             $('.img1').attr('src','5.jpg');
        })
        .fadeIn(1500); 
            
           break;
       case "Revuelto":
        $(".img1")
        .fadeOut(1500, function() {
             $('.img1').attr('src','4.jpg');
        })
        .fadeIn(1500); 
            
           break;
       case "Urus":
        $(".img1")
        .fadeOut(1500, function() {
             $('.img1').attr('src','1.jpg');
        })
        .fadeIn(1500); 
            
           break;
       case "Sian":
        $(".img1")
        .fadeOut(1500, function() {
             $('.img1').attr('src','3.jpg');
        })
        .fadeIn(1500); 
            
           break;
       
       default:
           break;
   }}

   

