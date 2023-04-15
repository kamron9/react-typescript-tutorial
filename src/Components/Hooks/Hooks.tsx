import React, {useRef, useState} from "react";


interface IUser {
    name:string
    age:number
    isMerried:boolean
}
const Hooks = () => {
    //state
    const [state, setState] = useState<string | undefined>('')
    const [userList,setUserList] = useState<Array<IUser>>([{
        name:'test',
        age:22,
        isMerried:false
    }])
    //useRef
    const ref1  = useRef<HTMLElement>(null)
    const ref2= useRef<HTMLElement>(null)
    return (
        <div>
           hooks
        </div>
    );
};

export default Hooks;