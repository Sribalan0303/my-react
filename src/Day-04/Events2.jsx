function Events(){
  function holdbutton(name){
    alert(`I have  ${name}`)
  }

    return (
<div>

<button onClick={()=>holdbutton("warning")}>Hold Click</button>
</div>
    );
}
export default Events;