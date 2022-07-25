var lilist = document.querySelectorAll('#list li');

for(var a=0; a<lilist.length; a++){
    
    if(lilist[a].innerHTML=='jay'){
        lilist[a].innerHTML='jay rautel';
    }
    else if(lilist[a].innerHTML=='guru'){
        lilist[a].innerHTML='guru bhoyar';
    }
    else if(lilist[a].innerHTML=='amit'){
        lilist[a].innerHTML='amit singh';
    }
}