import './Todo.css'
import check from './icon-check.svg'
import equis from './icon-cross.svg'

function TodoAgregar({values,setValues,varr,value,back}){

	
		if(value==''){
			console.log('asdasda')
		}
		
		function ClickCheck(e){

		if(values[varr][0].completado=='line-through'){

   		values[varr][0].completado='none'
   		values[varr][0].color='#FFFFFF'
     	
     	setValues([...values])
     	
     	}else{
     	values[varr][0].completado='none'
     	values[varr][0].color='#FFFFFF'
     	
     	setValues([...values])
  		}



		if(values[varr][0].active!='linear-gradient(to bottom right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%))'){

   		values[varr][0].active='linear-gradient(to bottom right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%))'
     	console.log(values[varr][0].active)
     	setValues([...values])

     	}else{
     	values[varr][0].active='linear-gradient(to bottom right,rgba(0, 50, 0, 0), rgba(0, 0, 0, 0))'
     	
     	setValues([...values])
  		}
  	}

  		function ClickEquis(e){

		if(values[varr][0].active=='linear-gradient(to bottom right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%))'){

   		values[varr][0].active='linear-gradient(to bottom right,rgba(0, 50, 0, 0), rgba(0, 0, 0, 0))'
     	console.log(values[varr][0].active)
     	setValues([...values])
     	console.log(varr)
     	}else{
     	values[varr][0].active='linear-gradient(to bottom right,rgba(0, 50, 0, 0), rgba(0, 0, 0, 0))'
     
     	setValues([...values])
  		}

  		if(values[varr][0].completado!='none'){

   		values[varr][0].completado='none'
   		values[varr][0].color='#FFFFFF'
     	
     	setValues([...values])
     	
     	}else{
     	values[varr][0].completado='line-through'
     	values[varr][0].color='#575353'
     	
     	setValues([...values])
  		}


  	}


 	return(
 			  <div className="TodoAgregarContainers">
                  <button onClick={(e)=> {ClickCheck(e)} } style={{background:values[varr][0].active}} className="Check2"><img src={check} alt=""/></button>
                  <p style={{color:values[varr][0].color,textDecoration:values[varr][0].completado}} className="ValueP">{value}</p>
                  <button onClick={(e)=> {ClickEquis(e)} }className="Equis"><img src={equis} alt=""/></button>
              </div> 


 		)
}

export default TodoAgregar;
