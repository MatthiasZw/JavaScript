function getXHR(){
    let resObject = null;
    try{
        resObject = new ActiveXObject('Microsoft.XMLHTTP'); 
    }catch(e) {
        try {
            resObject = new ActiveXObject('MSXML2.XMLHTTP');
        }catch(e){
            try{
                resObject = new XMLHttpRequest();
            }catch(e){
                alert('Erzeugung des XMLHttpRequest-Objektes nicht möglich');
            }
        }
    }
    return resObject;
}