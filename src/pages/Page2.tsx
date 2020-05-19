import React from 'react';

interface Page2Props {
    name: String;
    id?: number; //optional
}

const Page1 = (props: Page2Props) => {
    return (
        <div style={{backgroundColor: '#9a9a9a'}}>
            <h1>Page2 {props.name}</h1>
        </div>
    );
}

export default Page1;