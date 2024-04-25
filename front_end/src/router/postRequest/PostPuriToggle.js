export default async function PostPuriToggle(isEnable){
    console.log("Purifier Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try {
        const postToggleChange = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isEnable : sendData
            }),
        })
        postToggleChange().then(response => response.json())
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
    
}