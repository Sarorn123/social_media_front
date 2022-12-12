import React, { ReactElement } from 'react';
import Cellcard from  "../assets/cellcard.jpg";

interface Props {
    
}

function Sponsor({}: Props): ReactElement {
    return (
        <div className='bg-white rounded-lg p-5  dark:bg-gray-800'>
            <h2>Sponsor</h2>

            <img src={Cellcard} className="h-40 object-cover rounded-lg mt-2" />

            <p className='mt-2 font-bold'>Cellcard Play</p>

            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero necessitatibus nostrum sed ipsa expedita ipsam? Amet temporibus quae obcaecati?</p>

        </div>
    )
}

export default Sponsor
