import React, { useState } from 'react'
import './card.css'
import Menu from './Menu'
const AnimatedaCard = () => {
    console.log(Menu);
    const [items, setItems] = useState(Menu);
    const filterItems = (cateItems) => {
        const updateItems = Menu.filter((curElm)=>
        {
            return curElm.category === cateItems;
        });
        setItems(updateItems);
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
                    <button className="btn btn-warning"onClick={()=>setItems(Menu)}>All</button>
                </div>
            </div>
            <div className="main_animated">
             
                {
                    items.map((elems) => {
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
                                                <img src={elems.photo} alt="" />
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
