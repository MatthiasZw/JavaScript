$(document).ready(function(){

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
                    m2=m2*(300 + m3);
                    break;
                case '1':
                    m2=m2*(360 + m3);
                    break;
                case '2':
                    m2=m2*(420 + m3);
                    break;
                case '3':
                    m2=m2*(480 + m3);
                    break;
                case '4':
                    m2=m2*(560 + m3);
                    break; 
                case '5':
                    m2=m2*(640 + m3);
                    break;   
                case '6':
                    m2=m2*(720 + m3);
                    break; 
                case '7':
                    m2=m2*(800 + m3);
                    break; 
                case '8':
                    m2=m2*(880 + m3);
                    break; 
                case '9':
                    m2=m2*(880 + m3);
                    break;
                case '10':
                    m2=m2*(960 + m3);
                    break;
                case '11':
                    m2=m2*(1040 + m3);
                    break;
                default:
                    $('#aus').html('Fehler');
            }

            $('#aus').html(m2.toFixed(2) + '  &#8364;');
            $('#la').val(null);
            $('#br').val(null);
            } //if 
            else {
                $('#aus').html('Fehler');
            }

        } catch(e){
            $('#aus').html('Fehler');
        } // try

           
           
        }); //button.click

}); //doc.ready