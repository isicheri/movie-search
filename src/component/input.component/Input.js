import './input.css'
import Logo from "../../images/search-alt-2-regular-24.png"

const Input = ({value,onSearch,click}) => {
  return (
    <div className='search'>
   <input value={value} 
   className='input' 
   onChange={onSearch} 
   type='search' 
   placeholder='search for movies'
   />
   <img src={Logo} alt="img" className="image1" onClick={click}/>
   </div>
  )
}


export default Input;