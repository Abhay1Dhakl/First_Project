import React, { useState } from 'react';
import './card.css';
import { useEffect } from 'react';
import axios from "axios"
const AnimatedaCard = () => {
    
    const[cards, set_CardsData] = useState([])
    const[card_var,set_cardVar] = useState([])
    
    useEffect(() => {
        async function getalldata (){
           try{
               const cardData = await axios.get("http://127.0.0.1:8000/api/user/cards/")
               console.log(cardData.data)
               set_CardsData(cardData.data)
               set_cardVar(cardData.data)
           }catch(error){ 
   
           }
        }
        getalldata ()
       },[])

    const filterItems = (cateItems) => {
        const updateItems = card_var.filter((curElm)=>
        {
            return curElm.category === cateItems;
        });
        set_CardsData(updateItems);
    }
    return (
        <div >
            <h1 className='mt-5 text-center main-heading'>Visiting Places</h1>
            <hr />
            <div className='menu-tabs container'>
                <div className="menu-tabs d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItems("nepal")}>Nepal</button>
                    <button className="btn btn-warning" onClick={()=>filterItems("tibet")}>Tibet</button>
                    <button className="btn btn-warning"onClick={()=>filterItems("bhutan")}>Bhutan</button>
                    <button className="btn btn-warning"onClick={()=>filterItems("india")}>India</button>
                    <button className="btn btn-warning"onClick={()=>set_CardsData(card_var)}>All</button>
                </div>
            </div>
            <div className="main_animated">
             
                {
                    cards.map((elems) => {
                        return (
                            <>
                                <div className="card_animated">
                                    <div style={{ padding: 20, textAlign: 'center', fontSize: 12 }}>
                                        <h5>{elems.heading}</h5>
                                        <p>{elems.descr}</p>
                                        <button className="sh_btn">Read More...</button>
                                    </div>
                                    <div className="cover">
                                        <div className="coverFront">
                                            <div >
                                                <h5>{elems.topic}</h5>
                                                <img src={elems.photo} alt={elems.heading} />
                                            </div>
                                            <div className="coverBack">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}
export default AnimatedaCard;