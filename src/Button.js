function Button({color,setColor}){
    console.log(color);
    return(
        
        <button style = {{backgroundColor : color}} onClick = { () => setColor(color)} >{color}</button>
    );

}

export default Button;