
function YourInfoSection({ props, props1 }) {
    return (
        <>
            <div >
                <h1>Your Information</h1>

                <label htmlFor="FullName">Full Name</label>
                <input type="text" name="FullName" value={props.FullName} onChange={props1} placeholder="Full Name" />

                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" name="jobTitle" value={props.jobTitle} onChange={props1} placeholder=" The role you want" />
            </div>
            <div>

                <label htmlFor="Email">Email*</label>
                <input required type="email" name="Email" value={props.Email} onChange={props1} placeholder="Email* " />

                <label htmlFor="MobileNo">Mobile No.</label>
                <input type="number" name="MobileNo" value={props.MobileNo} onChange={props1} placeholder=" Mobile No. " />
            </div>
            <div>

                <label htmlFor="Address">Address</label>
                <input type="text" name="Address" value={props.Address} onChange={props1} placeholder=" Address" />

               
            </div>
           
        </>
    )
}
export default YourInfoSection