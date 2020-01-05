import React from 'react'



let style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
}

let phantom = {
  display: 'block',
  padding: '20px',
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
