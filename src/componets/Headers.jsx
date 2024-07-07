
import './Headers.css'

export default function Header() {
    function changeColor() {
        var body = document.querySelector('body');
        if (body.style.backgroundColor === 'silver') {
          body.style.backgroundColor = '#1A1A1D';
          body.style.color = '#950740'
          document.getElementById("topnav").style.boxShadow = "5px 5px 5px 8px #6F2232";
        } else {
          
          body.style.backgroundColor = 'silver';
          body.style.color = 'black';
          document.getElementById("topnav").style.boxShadow = "5px 5px 5px 8px #1A1A1D";
        }
      }
      
    return(
        <div className='Headers'>
            <header>
            <div className="topnav" id="topnav">
        <a className="active" href='#'>IF Store</a>
        <button onClick={changeColor} className="buttonColor">Изменить тему сайта</button>
       
      </div>
            </header>
            
        </div>
    )
}