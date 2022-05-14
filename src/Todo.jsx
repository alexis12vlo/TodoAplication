import sol from './icon-moon.svg'
import sun from './icon-sun.svg'
import check from './icon-check.svg'
import equis from './icon-cross.svg'
import {useState} from 'react';
import TodoAgregar from './TodoAgregar.jsx'
import noche from './bg-desktop-dark.jpg'
import dia from './bg-desktop-light.jpg'

function Todo({mododia,modonoche,setModonoche,setMododia,key,setValuesarray,value,values,valuesarray,setValues,valuesss,setValuesss}) {
 const [k,setK]=useState('')


  function Change(e){
   value[0].value=e.target.value
 
  
    
  }
 











  function Key(e){

    
    if(e.keyCode==13){
      if(value[0].value==''){
      alert('Ingresa Un Evento')
    }else{

    setK(k+1)
    value[0].id=Number(values.length);

    console.log( value[0].id+1)
    values.push(value);
     setValuesarray([...values])
    setValues([...values])
   
  
    e.target.value='';
  }
 
  }



  }


  function ClickAll(e){

  
         setValuesarray([...values])
           

  }
   function ClickClear(){


              
        valuesss=valuesarray;
        setValues([...valuesss])
       values=valuesss.filter((word) => word[0].completado!='line-through');
        console.log(values)
        setValuesarray([...values])



         setValues([...valuesarray])

          

        

  }
  function ClickCompleted(e){

      valuesarray=values.filter(word => word[0].completado=='line-through');
      
  
      setValuesarray([...valuesarray])
    

  }

  function ClickActive(e){

      valuesarray=values.filter(word => word[0].active=='linear-gradient(to bottom right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%))');
     
      setValuesarray([...valuesarray])
      
  }
  function Modo(){
  
      if(mododia.logo2=='flex'){
  
        mododia.logo2='none';
        mododia.logo='flex';
        mododia.color='hsl(236, 33%, 92%)'
        mododia.color2='hsl(233, 11%, 84%)';
        mododia.colorletra='#000000'
        mododia.image='url(../images/bg-desktop-dark.jpg)'
        mododia.image=dia;

        setMododia({...mododia});
        
        }else{

        mododia.logo='none';
        mododia.logo2='flex';
        mododia.color='hsl(235, 21%, 11%)'
        mododia.color2='hsl(235, 24%, 19%)';
        mododia.colorletra='#FFFFFF'
         mododia.image=noche;


        setMododia({...mododia});



        }


  }

  


  return (
    <div className="Todo">
        <div className="TodoTitle">
            <div className="TodoTitleH1">
                <h1>TODO</h1>
            </div>
            <div className="TodoTitleLogo">
                <button style={{display:mododia.logo}} onClick={Modo}><img src={sol} alt=""/></button>
                <button style={{display:mododia.logo2}} onClick={Modo} ><img src={sun} alt=""/></button>
            </div>
        </div>

        <div style={{backgroundColor:mododia.color2}} className="TodoAgregar">   

          <div className="TodoAgregarContainer">
              <button  style={{background:value[0].active}} className="Check"><img src={check} alt=""/></button>
              <input style={{color:mododia.colorletra}} placeholder="Ingresa un Evento" onKeyDown={
                (e)=>{Key(e)}
              } onChange={
                (e)=>{Change(e)}
              } type="text"/>
              
          </div>  


        </div>

        <div style={{backgroundColor:mododia.color2}} className="TodoAgregados">


              <div style={{backgroundColor:mododia.color2}} className="TodoAgregadoss">{

              valuesarray.map((elemento)=>

                <TodoAgregar mododia={mododia} key={elemento[0].id} setValues={setValues} varr={elemento[0].id} values={values} value={elemento[0].value}/>
              )

              }
              </div>




              <div className="TodoAgregarContainersFooter">

                  <div className="TodoAgregarContainersFooterItems">
                      <p>{values.length} items left</p>
                  </div>

                  <div className="TodoAgregarContainersFooterBottoms">
                      <div className="Links">
                      <div>
                        <a onClick={(e)=>{ClickAll(e)}} >All</a>
                      </div>
                      
                      <div>
                        <a onClick={(e)=>{ClickActive(e)}} >Active</a>
                      </div>

                      <div>
                         <a onClick={(e)=>{ClickCompleted(e)}} >Completed</a>
                      </div>
                      </div>
                      
                    
                  </div>

                  <div className="TodoAgregarContainersFooterClear">
                      <a onClick={ClickClear} >Clear Completed</a>
                      <p>Doble Click </p>
                  </div>


              </div>

        </div>
    </div>
  );
}

export default Todo;