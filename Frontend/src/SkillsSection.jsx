function SkillsSection({props,props1}) {
    return (

        <>
          <h1>Your Skills</h1>
          
            <label htmlFor="Skills">Skills</label>
            <input type="text" name="Skills" value={props.Skills} onChange={props1} placeholder="enter your skills" />
        </>
    )
}
export default SkillsSection