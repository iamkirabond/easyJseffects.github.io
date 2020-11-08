
var accordion = document.getElementsByClassName('accordion-btn');

for (var i = 0; i < accordion.length; i++){
    accordion[i].onclick = function(){
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
            panel.classList.toggle('show-text');
    };
}