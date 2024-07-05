

import './Menu.css'

 function Menu(){
    return(
      <div>
      
      <div className='status' id='0001'>
        <br />
      <div  title='tovarOne'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/1.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Стул</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="#">Купить</a>
          </div>
         </div>
        </div>
        </div>

        <div className='tovar' title='tovarTwo' id='0002'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/2.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Стол</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="#">Купить</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovarTree' id='0003'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/3.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Шкаф</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="#">Купить</a>
          </div>
         </div>
        </div>
        </div>
  </div>
  </div>
 


    );
}

export default Menu
