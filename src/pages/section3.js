import React from "react";



function Section3() {
    return <>
            
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ fontSize: '106px', marginBottom: '10px' }}>Pricing</h1>
            <p style={{ fontSize: '16px', color: '#a29277', marginBottom: '30px' }}>
                Choose the convenient option and plunge into the fantastic world of the best books!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <div style={cardStyle}>
                    <h2 style={{ color: 'black' }}>Monthly</h2>
                    <h3 style={{ fontSize: '36px', margin: '10px 0', color:'black' }}>$50</h3>
                    <p style={{ color: 'black' }}>per month</p>
                    <p style={{ color: 'black' }}>pay for each month separately</p>
                    <p style={{ color: 'black' }}>5 books per month</p>
                    <p style={{ color: 'black' }}>unsubscribe any time</p>
                    <button style={buttonStyle}>Sign up</button>
                </div>
                <div style={cardStyle}>
                    <h2 style={{ color: 'black' }}>Annual</h2>
                    <h3 style={{ fontSize: '36px', margin: '10px 0', color:'black' }}>$500</h3>
                    <p style={{ color: 'black' }}>per year</p>
                    <p style={{ color: 'black' }}>pay for 1 year at once and save</p>
                    <p style={{ color: 'black' }}>5 books per month</p>
                    <p style={{ color: 'black' }}>Free book club membership</p>
                    <button style={buttonStyle}>Sign up</button>
                </div>
            </div>
        </div>
        </>
}
const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    fontSize: '14px',
    
};

const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#a29277',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
};
export default Section3;