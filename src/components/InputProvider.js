// import React, { createContext, useState } from "react";

// export const InputContext = createContext()
// export const UpdateInput = createContext()

// export function InputProvider({children}) {
//     const [searchInput, setSearchInput] = useState('hello')
//     return (
//         <InputContext.Provider value={{searchInput, setSearchInput}}>
//             <UpdateInput.Provider value={updateInput}>
//                 {children}
//             </UpdateInput.Provider>
//         </InputContext.Provider>
//     )
// }