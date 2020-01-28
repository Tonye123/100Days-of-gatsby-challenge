import React from 'react'



let style = {
   
    
    textAlign: "center",
    
    position: "relative",
    left: "0",
    bottom: "0",
    width: "100%",
}

let phantom = {
  display: 'block',
  marginTop: '40px',
  height: '60px',
  width: '100%',
}

export default () => {
    let year = new Date().getFullYear()
  

    return (
    <div style={style}>
        <div style = {phantom}>
        Developed in gatsby <br />
       <p>&copy;{ year } </p>
       </div>


        

    </div>

    )

}
