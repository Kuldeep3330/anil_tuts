function Apple(){
    const username="kuldeep"
    function Hello(){
        alert('hello')
    }
    return (
     <>
     <h1>{username}</h1>
     <button onClick={Hello}>Hello</button>
     </>
    )
}

export default Apple 