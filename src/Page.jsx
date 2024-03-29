import Button from './Button.jsx';
import {useState, useCallback} from 'react';
export default function Page({ buttonText, onClick}) {

    const [state1, setState1] = useState(1);

    // timestampFromPage is defined here - to present changes during component re-rendering
    // and how to preservere it's initial the value inside function with useCallback
    // But alternatively - this line below could be wrapped with useEffect hook - then the value would not change during component re-rendering
    const timestampFromPage = Date.now();

    const handleClickCallback = useCallback(  function handleClick() {
        const message = 'Button with useCallback clicked:, timestampFromPage: ' + timestampFromPage;
        console.log(message);

    },[]);

    function handleClickWithoutCallback() {
        const timestampFromFunction = Date.now();

        const message = 'Button without useCallback clicked, timestampFromPage: ' + timestampFromPage ;
        console.log(message);
    }

    function reRenderComponent() {
        console.log('re-rendering component');
        setState1(Date.now());
    }

    return (
        <>
            <ul>
              <li><Button onClick={() => handleClickWithoutCallback() }>Button without useCallback</Button></li>
              <li><Button onClick={() => handleClickCallback() }>Button with useCallback</Button></li>
              <li><Button onClick={() => reRenderComponent() }>Re-render component</Button></li>
            </ul>
            <p>
                State value: {state1}
            </p>
        </>
    );
}