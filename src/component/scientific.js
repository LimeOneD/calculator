import React from 'react'
import { useState } from 'react';
export default function SciCal(props) {
    return ( 
       
            <div className='scical'> 
            
                <div className="sci-formula">
                    <h1>text texasdfasdft text</h1>

                </div>
                <div className="sci-cal">
                    <form className='input-form-sci'> 
                        <div className='sci-result'>
                            <input className="sci-ip" type="text" value={props.value} />
                        </div>
                    </form>
                
                        <div className='sci-btns'>
                            <input className="btn" type='button' value="sin" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="cos" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="tan" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>              
                            <input className="btn" type='button' value="log" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="sin-inv" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="cos-inv" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="tan-inv" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
                            <input className="btn" type='button' value="antilog" onClick={e=>props.setVal(e.target.value + "(" + props.value + ")")}/>
        
                            <input className="btn" type='button' value="AC" onClick={() => props.setVal("")}/>
                            <input className="btn" type='button' value="Del" onClick={() => props.setVal(props.value.slice(0, -1))}/>
                        
                            <input className="btn" type='button' value="1" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="2" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="3" onClick={e => props.setVal(props.value + e.target.value)}/>  
                            <input className="btn" type='button' value="Ans" />            
                            <input className="btn" type='button' value="=" onClick={()=>props.setVal(eval(props.value))}/>
                            
                            
                            <input className="btn" type='button' value="4" onClick={e => props.setVal(props.value + e.target.value)}/>


                            <input className="btn" type='button' value="5" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="6" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="-" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="+" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="7" onClick={e => props.setVal(props.value + e.target.value)}/>


                            <input className="btn" type='button' value="8" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="9" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="*" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="." onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="0" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="00" onClick={e => props.setVal(props.value + e.target.value)}/>
                            <input className="btn" type='button' value="/" onClick={e => props.setVal(props.value + e.target.value)}/>
                        </div>
                                    
                </div>
            </div>
        
    )
}