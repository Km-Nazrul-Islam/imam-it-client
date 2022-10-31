import React from 'react';
import { Button } from 'react-bootstrap';
import ReactToPdf from "react-to-pdf"

const ref = React.createRef();

const CheckOut = () => {
    return (
        <div ref={ref} className='mt-5'>
            <h2 className='text-center'>Your Premium Packeges is Activieted</h2>
            <ReactToPdf>
                {({ toPdf, targetRef }) => (
                    <Button style={{ width: 500, height: 500, background: 'red' }} onClick={toPdf} ref={targetRef} >Download</Button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default CheckOut;