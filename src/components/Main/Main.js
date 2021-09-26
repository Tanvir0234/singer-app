import React, { useEffect, useState } from 'react';
import './Main.css'
import Cart from '../Cart/Cart';
import Singer from '../Singers/Singer';

const Main = () => {

    const [singers, setSingers] = useState([])

    useEffect(() => {
        fetch('/singerData.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    //-----------use state for cart----------

    const [cart, setCart] = useState([])
    const handleAddToCart = singer => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }



    return (
        <section className="container mt-5 main">
            <div className="row ">

                <div className="col-md-9">
                    <div className="row g-4">
                        {
                            singers.map(singer => <Singer
                                handleAddToCart={handleAddToCart}
                                singer={singer}

                            />)
                        }
                    </div>


                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Main;