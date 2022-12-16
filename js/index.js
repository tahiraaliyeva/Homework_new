function select_actor(){
    var actor_1 = document.getElementById('actor_1').value
    console.log(actor_1)

    document.getElementById('actor').src = "img/"+actor_1+".jpg"
}