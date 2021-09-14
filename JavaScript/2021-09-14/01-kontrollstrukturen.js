/* Kontrollstrukturen  */

if(Bedingung) {
    //Anweisungen wenn wahr
} else if (Bedingung2){
    //Anweisung wenn Bed2 wahr
} else{
    //Anweisung wenn beide fALSCH   
}


/* Switch Case */

switch( Selektor){
    case Wert1: Anweisung; break;
    case Wert2: Anweisungen; break;

    //...
    default: Anweisungen;
}

/* Zähergesteuerte Wiederholung  */

for(Initialisierung; Bedingung; Aktualisierung){
    Anweisung1;
    Anweisung2;
}


/* Kopfgesteuerte Wiederholung */

while(Bedingung){
    Anweisungsblock;
}

/* Fußgesteuerte Wiederholung */

do{
    Anweisungsblock;
} while( Bedingung);


/* Schleifensteuerung */

break; // verlässt die Schleife (case auch)
continue; //bricht den aktuellen Schleifendurchlauf ab und springt zum nächsten durchlauf
          //Achtung! Kann zu Endosschleifen führen wenn falsch platziert

/* Iteration durch objekte */

for(variable in object) {
    Anweisungen;
    // in der variablen befindet sich immer der wert der aktuellen EIgenschaft
}


