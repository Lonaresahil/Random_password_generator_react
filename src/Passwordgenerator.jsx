import { useState, useCallback, useEffect, useRef } from 'react';

function Passwordgenerator(props) {
    
    const [length, setlength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");

    //useRef HOOK
    const passwordRef = useRef()

    const passGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numbers){
            str +="0123456789"
        }
        if(symbols){
            str +="@#$%&?"
        }

        for (let i = 1; i <=length; i++){
           let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char) 
        }

        setPassword(pass)

    }, [length, numbers, symbols, setPassword]) 
    
    useEffect(() => {
        passGenerator()
    },  [length, numbers, symbols, passGenerator] )    
    

    const copyPasswordToClipboard =useCallback(() =>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
        
    }, [password])

  return (
    <div className='w-full max-w-md mx-auto shadow-md bg-white/50 rounded-lg px-0 my-8 text-black-800 font-normal'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

            <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password '
            readOnly
            ref={passwordRef}
            />
            {/* <button onClick={copyPasswordToClipboard} */}
            <button onClick={copyPasswordToClipboard} style={{ backgroundColor:props.color }}
            className='bg-blue-700 text-white font-medium px-4 py-1 justify-center items-center shrink-0'>copy</button>     
        </div>
        <div className='grid grid-cols-4 gap-x-4 px-1 '>

            <div className='flex col-span-2 items-center gap-x-1'>
                <input 
                type="range"
                min={8}
                max={20}
                value={length}
                className='cursor-pointer w-24'
                onChange={(e) =>{setlength(e.target.value)}} />
                <label>Length:{length}</label>
            </div>
            
            <div className='flex  items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numbers}
                id='numberInput'
                onChange={() =>{setNumbers((prev) => !prev);
                }} />
                <label>Numbers</label>
            </div>

            <div className='flex  items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={symbols}
                id='symbolsInput'
                onChange={() =>{setSymbols((prev) => !prev);
                }} />
                <label>Symbols</label>
            </div>

        </div>
    </div>
  )
}

export default Passwordgenerator