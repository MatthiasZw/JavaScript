$(document).ready(function(){

    var dollar ={"0":300, "1":360, "2":420, "3":480, "4":560, "5":640, "6":720, "7":800, "8":880, "9":960, '10':1040}
        
        $('#cal').click(function(){
            let m2 = 0;
            let m3= 0;
 
            try { if ($('#la').val() <= 450 && $('#br').val() <= 180){
               
            
            m2= ($('#la').val() * $('#br').val())/10000;
                
          

            if($('input[name="auf"]:checked').val()== 0 ){
                m3= m3 + 47.60;
                }
            
            if($('input[name="ri"]:checked').val()== 2 ){
                m3= m3 + 71.40;
                }

            let st = $('input[name="staerke"]:checked').val();
            
            switch (st)
               {
                case '0':
                    m2=m2*(dollar["0"] + m3);
                    break;
                case '1':
                    m2=m2*(dollar["1"] + m3);
                    break;
                case '2':
                    m2=m2*(dollar["2"] + m3);
                    break;
                case '3':
                    m2=m2*(dollar["3"] + m3);
                    break;
                case '4':
                    m2=m2*(dollar["4"] + m3);
                    break; 
                case '5':
                    m2=m2*(dollar["5"] + m3);
                    break;   
                case '6':
                    m2=m2*(dollar["6"] + m3);
                    break; 
                case '7':
                    m2=m2*(dollar["7"] + m3);
                    break; 
                case '8':
                    m2=m2*(dollar["8"] + m3);
                    break; 
                case '9':
                    m2=m2*(dollar["9"] + m3);
                    break;
                case '10':
                    m2=m2*(dollar["10"] + m3);
                    break;
                default:
                    $('#aus').html('Fehler');
            }

            $('#aus').html(m2.toFixed(2) + '  &#8364;');
            $('#la').val(null);
            $('#br').val(null);
            } //if 
            else {
                $('#aus').html('Größe ändern');
            }

        } catch(e){
            $('#aus').html('Fehler');
        } // try
 
        }); //button.click

}); //doc.ready