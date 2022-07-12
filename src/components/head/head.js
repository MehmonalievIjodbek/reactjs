import React from 'react';
import '../head/head.scss'
import {Button} from "bootstrap";
import Example from "./example";
const Head = () => {
    return (
        <>
            <div className="head">
                <div className="container">
                    <div className="head-list">
                        <div className="head-left">
                            <a href="/">
                                <p>Welcome to our online shop</p>
                            </a>
                        </div>
                        <div className="head-right">
                            <Example/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Head;