import React, { useState } from 'react';

function SteveComp(props) {

    // console.log(props);

    function myOnClick(e) {

        // console.log('steves comp clicked');
        props.countFunc();
    }

    return (
        <div>
            <h1 onClick={props.countFunc}>Hello World from Steve's Component {props.countx}</h1>
            {/* <h1 onClick={myOnClickCount}> Hello World: count {props}</h1> */}
        </div>
    );
}

export default SteveComp;