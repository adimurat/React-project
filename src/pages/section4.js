import React from "react";
import pic1 from '../image/ourstore1.jpg'
import pic2 from '../image/ourstore2.jpg'
import pic3 from '../image/ourstore3.jpg'
import pic4 from '../image/ourstore4.jpg'

function Section4() {
    return <>
                    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ fontSize: '76px', marginBottom: '10px' }}>Our store</h1>
            <p style={{ fontSize: '16px', color: '#a29277', marginBottom: '30px' }}>
                Want to find a crazy corner in a big city? Come to our bookstore in New York and spend time with a book in a light insta-friendly space
            </p>
            <div style={gridContainerStyle}>
                <img
                    src={pic1} 
                    alt="Book Cover 1"
                    style={imageStyle}
                />
                <img
                    src={pic2} 
                    alt="Book Cover 2"
                    style={imageStyle}
                />
                <img
                    src={pic3} 
                    alt="Book Cover 3"
                    style={imageStyle}
                />
                <img
                    src={pic4} 
                    alt="Book Cover 4"
                    style={imageStyle}
                />
            </div>
        </div>


        </>
}
const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    justifyContent: 'center',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
};
export default Section4;