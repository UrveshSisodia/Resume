
function LinkSection({props,props1}) {

    return (
        <>
            <div>
                <h1>Your Links</h1>
                
                <label htmlFor="urlName">Link Name</label>
                <input type="text" name="urlName" value={props.urlName} onChange={props1} placeholder="url name" />
               
                <label htmlFor="url">Link</label>
                <input type="url" name="url" value={props.url} onChange={props1} placeholder="Enter any url" />

            </div>



        </>
    )

}

export default LinkSection