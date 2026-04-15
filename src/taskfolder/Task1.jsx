import Image from '../assets/uiux.jpg'
import '/src/taskfolder/Task1.css'
function Task1() {
    const name = "sri";
    let study = "Merit Collage ";
    const mark = 95;
    const currentDate = new Date().toLocaleString();
    let Imge = Image;
    let NUMBER = 1;

    return (
        <div>
            <h1 className="h1tag">My Name : {name}</h1>
            <p className="ptag1">I study at : {study}</p>
            <p className="ptag2">My marks are : {mark}</p>
            <p>Today{currentDate}</p>
            <h3>UI/UX</h3>
            <img src={Imge} className='imgstyle' />
            <p>User ku screen la theriyura design part.</p>
            <p>👉 Example:</p>
            <p>button</p>
            <p>color</p>
            <p>font</p>
            <p>login page</p>
            <p>menu bar</p>
            <p>icons</p>
            <p>card design</p>
            <h5>Odd Even Number : {NUMBER % 2 === 0 ? "odd" : "even"}</h5>
        </div>
    );

}
export default Task1;