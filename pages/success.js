import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireWorks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Благодарим за поръчката</h2>
                <p className='email-msg'>Провери email пощата си</p>
                <p className='description'>Ако имае въпроси, моля пишете ни на:
                <a className='email' href='mailto:danio823@abv.bg'>danio823@abv.bg</a></p>
                <Link href='/'>
                    <button type='button' width='300px' className='btn'>
                        Продължи Пазаруването
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success