
function EducationSection({ props, props1 }) {

    return (
        <>
            <h1>Your Education</h1>

            <label htmlFor="School">School</label>
            <input type="text" name="School" value={props.School} onChange={props1} placeholder="enter your skills" />

            <label htmlFor="Degree">Degree</label>
            <input type="text" name="Degree" value={props.Degree} onChange={props1} placeholder="enter your skills" />

            <label htmlFor="StartMonth1" >Start Month </label>

            <select name="StartMonth1" value={props.StartMonth1} onChange={props1} >

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

            <label htmlFor="StartYear1" >Start Year </label>
            <input type="number" name="StartYear1" value={props.StartYear1} onChange={props1} placeholder="YYYY" />

            <label htmlFor="EndMonth1" >End Month </label>

            <select name="EndMonth1" value={props.EndMonth1} onChange={props1}>
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

            <label htmlFor="EndYear1" >End Year </label>
            <input type="number" name="EndYear1" value={props.EndYear1} onChange={props1} placeholder="YYYY" />

            <label htmlFor="Place1" >Place</label>
            <input type="text" name="Place1" value={props.Place1} onChange={props1} placeholder="Place" />

            <label htmlFor="Desc1">Description</label>
            <textarea type="text" maxLength={1000} name="Desc1" value={props.Desc1} onChange={props1} placeholder="Describe your Work Experience " />


        </>
    )

}

export default EducationSection