import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './app.css';
import { Button } from "@syncfusion/ej2-buttons";

export const App = () =>{ 
    return(
        <BrowserRouter>
            <div className="flex relative dark:bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            className="text-3xl p-3 hover:drop-shadow hover:bg-light-gray text-white"
                            style={{background: "red", borderRadius: '50%' }}
                        >
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
            </div>
        </BrowserRouter>
    )
}  
