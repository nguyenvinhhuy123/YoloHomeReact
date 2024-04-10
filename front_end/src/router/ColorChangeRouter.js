import * as React from 'react';

export default function onColorChange(color){
    const sendData = color; 
    console.log("Color Changed to", sendData);
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    console.log("Dir", apiUrl);
    const postColorChange = () => fetch(apiUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            color : sendData
        }),
    });
    postColorChange().then(response => response.json())
}