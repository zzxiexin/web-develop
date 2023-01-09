import { useState, useEffect } from 'react';
const Test = () => {
    const [info, setInfo] = useState({name: 'xinxin', age: 20});
    useEffect(() => {
        console.log('hello vite')
    } ,[])
    return <div>
        {info.name}<br />
        {info.age}
    </div>
}

export default Test;