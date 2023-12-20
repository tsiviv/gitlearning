function SendMessages({sendMessage, messages,setInputValue,inputValue}) {
    return <><div>
        {/* Your component UI */}
       
        <input type="text" id="textInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="button" onClick={sendMessage}>Send</button>

        <div id="output">
            {/* Render messages from state */}
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    </div></>
}
export default SendMessages;