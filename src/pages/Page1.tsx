import React from 'react';

interface Page1Props {
    name: String;
}

const Page1 = (props: Page1Props) => {
    return (
        <div style={{backgroundColor: '#efefef'}}>
            <h1>Page1 {props.name}</h1>
        </div>
    );
}

export default Page1;