function VisDagensCitat(elementId, citatliste) {
    var citatIndeks = Math.floor(Math.random() * citatliste.length);
    document.getElementById(elementId).innerText = citatliste[citatIndeks];
}

//modtager id (elementId) på det html element som skal 
//vise en liste med mp3 musik(mp3liste)
function visMusikliste(elementId,mp3liste) {
    for(var i=0; i<mp3liste.length; i++){
        document.getElementById(elementId).insertAdjacentHTML("afterbegin",'<p>'+mp3liste[i]+'</p><p><audio controls><source src="'+mp3liste[i]+'"type="audio/mpeg"></audio></p>')
    }
}

function videoKontrol(elementId, visKontroller) {
    if (visKontroller===true) {
        document.getElementById(elementId).setAttribute("controls","");
    } else {
        document.getElementById(elementId).addEventListener("click", function(){
            if (document.getElementById(elementId).paused) {
                document.getElementById(elementId).play();
            } else {
                document.getElementById(elementId).pause();
            }
        });
    }
    
}

//hovedprogramdel
var musikliste = [
    "Bouncy_Fun_1.mp3", "Funky_Groove.mp3", "Walker.mp3"
];

var citater = [
    "alt hvad jeg ved er at mcd er godt(burhan)", "jeg spiser aldrig tofu på en søndag(Rasmus Gali)", "jeg har kun 9 tær tilbage(Oliver)", "jeg lyder som jan gintberg(Morten)", "skal vi drikker nogle, nej vent jeg har ingen penge(ian)"
];

VisDagensCitat("citat", citater);
visMusikliste("musikliste", musikliste);
videoKontrol("koncertvideo", false);
