import React  from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Quantity = ({quantity, onQuantityChange}) => {

    const handleIncrement = () => {
        onQuantityChange(quantity + 1);
      };
     
      const handleDecrement = () => {
        if (quantity > 1) {
          onQuantityChange(quantity - 1);
        }
      };

  return (
    <div className="flex items-center space-x-2">
         <button 
            className="bg-slate-200 text-3xl p-1 lg:w-10 lg:h-10 md:w-6 md:h-6 sm:w-5 sm:h-5  rounded-full text-center flex items-center justify-center hover:bg-slate-300"
            onClick={handleDecrement}
         >
            <RemoveIcon></RemoveIcon>
         </button>
         <input 
            className="w-12 h-10 text-center border border-slate-300  rounded-md"
            value={quantity}           
         />
         <button 
            className="bg-slate-200 text-2xl md:text-md md:text-1xl p-1 sm:w-5 sm:h-5  md:w-6 md:h-6 lg:w-10 lg:h-10 rounded-full text-center flex items-center justify-center hover:bg-slate-300"
            onClick={handleIncrement}
         >
            <AddIcon></AddIcon>
         </button>
      </div>
  )
}

export default Quantity