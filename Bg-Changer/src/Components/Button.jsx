

function Button({color , changeColor}) {
  return (
    <button 
      className="px-1 mx-3 py-2 w-[10%] rounded-xl text-white text-lg"
    style={{backgroundColor: color}} onClick={ () => changeColor(color)}>
      {color}
    </button>
  )
}

export default Button
