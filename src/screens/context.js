import React from 'react'
const initialData = {
  "Birth": [],
  "Rites Of Passage":[],
  "Graduation":[],
  "Engagement":[],
  "Birthday":[],
  "Honors":[],
  "Wedding Aniversary":[],
  "Pets":[],
  "Personal History":[],
}
export const HomeFiestaContext = React.createContext(null)
export default function Context(props) {
    const [state, setState] = React.useState(initialData)
    return (
        <HomeFiestaContext.Provider value={{state,setState}}>
            {props.children}
        </HomeFiestaContext.Provider>
    )
}
