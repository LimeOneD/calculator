import React from 'react'
// const math = require('mathjs');



export default function GenCal(props) {
    return (   
            <div className='gencal'> 
                <div className="gen-formula">
                    <h1>text text text</h1>

                </div>
                <div className="gen-cal">
                    <form className='input-form'> 
                        <div className='result'>
                            <input className="ip" type="text" value={props.value} />
                        </div>
                        <div className='btns'>
                            <input className="btn" type='button' value="AC" onClick={()=>props.setVal("")}/>
                            <input className="btn" type='button' value="Del" onClick={()=>props.setVal(props.value.slice(0, -1))}/>
                            <input className="btn" type='button' value="Ans"/>
                            
                            <input className="btn" type='button' value="=" onClick={()=>props.setVal(eval(props.value))}/>

                            <input className="btn" type='button' value="1" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="2" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="3" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="+" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="4" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="5" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="6" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="-" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="7" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="8" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="9" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="*" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="." onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="0" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="00" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="/" onClick={e => props.setVal(props.value + e.target.value)}/>
                            

                        </div>
                    </form>

                    

                </div>
            </div>
    )
}