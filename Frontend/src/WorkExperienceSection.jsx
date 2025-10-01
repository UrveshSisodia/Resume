
function WorkExperienceSection({ props, props1 }) {


    return (
        <>
            <h1>Your Work Exprience</h1>

            <label htmlFor="jobTitle1" >Job Title </label>
            <input type="text" name="jobTitle1" value={props.jobTitle1} onChange={props1} placeholder="Job Title" />

            <label htmlFor="Company">Company</label>
            <input type="text" name="Company" value={props.Company} onChange={props1} placeholder="Company" />

            <label htmlFor="StartMonth" >Start Month </label>
        

            <select name="StartMonth" value={props.StartMonth} onChange={props1} >

                <option name="" >Select Month</option>
                <option name="Jan" >Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>

            <label htmlFor="StartYear" >Start Year </label>
            <input type="number" name="StartYear" value={props.StartYear} onChange={props1} placeholder="YYYY" />

            <label htmlFor="EndMonth" >End Month </label>

            <select name="EndMonth" value={props.EndMonth} onChange={props1}>
                <option name="Select Month" >Select Month</option>
                <option name="Jan" >Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>

            <label htmlFor="EndYear" >End Year </label>
            <input type="number" name="EndYear" value={props.EndYear} onChange={props1} placeholder="YYYY" />

            <label htmlFor="Place" >Place</label>
            <input type="text" name="Place" value={props.Place} onChange={props1} placeholder="Place" />

            <label htmlFor="Desc">Description</label>
            <textarea type="text" name="Desc" maxLength={1000} value={props.Desc} onChange={props1} placeholder="Describe your Work Experience" />


        </>
    )

}

export default WorkExperienceSection