import {createContext,useState} from 'react';

const UserProgressContext = createContext({
    progress:'',
    showCart:() => {},
    hideProgress:() => {},
    showCheckout:() => {},
    
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress]= useState('');
    
       function showCart(){
       setUserProgress('cart');
      }
      function hideProgress(){
       setUserProgress('');
      }
      function showCheckout(){
       setUserProgress('checkout');
      }
     

        const userProgressCtx = {
            progress:userProgress,
            showCart,
            hideProgress,
            showCheckout,
            
        };
    return (<UserProgressContext value={userProgressCtx}>
        {children}
    </UserProgressContext>
)}

export default UserProgressContext;
