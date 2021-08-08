
import React ,{ useState} from 'react';


 export const  Character = ()=> {
    
    
    const [characterState, setCharacter] = useState("🐭");
    
        return (
            
           
            <div>
                
                <label> Character:</label>
                 <select name=" character" onChange={(e)=>{
                     
                         const selectedCharacter=e.target.value;
                         setCharacter(selectedCharacter);
                     }} >
                   
                    
                 <option value="🐭">🐭</option>
                 <option value="🐁">🐁</option>
                  </select>
                
                  <br />
                  {characterState}
                  <br />
            </div>
        )

        
    
}
export default Character;
