import  React , {createContext,useContext,useState} from 'react'

const UserContext = createContext();


export  function DataContext() {
    return useContext(UserContext);
}
export function UserProvider({children}){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const data ={
       
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        
    }
    
    return(
     <UserContext.Provider value={data}>
         {children}
     </UserContext.Provider>
    )
};

