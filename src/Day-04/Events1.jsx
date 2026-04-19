function Event(){

    function holdclick(){
        alert("Button Click")
    }
    return (
<div>
<button onClick={holdclick} >Click Mee</button>

</div>

    );
}
export default Event;