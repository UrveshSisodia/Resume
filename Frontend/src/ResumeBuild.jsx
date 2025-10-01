import { useState } from "react"
import { useRef } from "react"
import html2pdf from 'html2pdf.js'
import YourInfoSection from "./YourInfoSection";
import LinksSection from './LinksSection'
import WorkExpreinceSection from './WorkExperienceSection'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'


function ResumeBuild() {

    const resumeContentRef = useRef();

    const generatePDF = () => {
        html2pdf(resumeContentRef.current, {
            margin: 10,
            filename: 'My_Resume.pdf',
            html2canvas: {
                dpi: 500,
                scale: 3,
            },
            jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
        });
    };
    const [data, setData] = useState({

        FullName: "",
        jobTitle: "",
        Email: "",
        MobileNo: "",
        Address: "",

        url: "",
        urlName: "",

        jobTitle1: "",
        Company: "",
        StartMonth: "",
        StartYear: "",
        EndMonth: "",
        EndYear: "",
        Place: "",
        Desc: "",

        Skills: "",

        School: "",
        Place1: "",
        StartMonth1: "",
        StartYear1: "",
        EndMonth1: "",
        EndYear1: "",
        Degree: "",
        Desc1: "",
    })
    const [addComp, setAddComp] = useState(false)

    const handleAddComp = () => {
        setAddComp(!addComp)
    }
    const handleChange = (e) => {
        //   Destructing Object
        const { name, value } = e.target
        setData(preVal => ({
            ...preVal,
            [name]: value
        })
        )
    }

    // Array for Sections
    const section_Array = [YourInfoSection, LinksSection, WorkExpreinceSection, SkillsSection, EducationSection]

    const [currentsec, setCurrent_Sec] = useState(0);

    //previous function
    const prev = () => {
        if (currentsec > 0) {
            setCurrent_Sec(currentsec - 1)
        }
    }
    //next function
    const next = () => {

        if (currentsec < section_Array.length - 1) {
            setCurrent_Sec(currentsec + 1)
        }
    }
    function addcomp() {
        return (
            <>
                <button onClick={handleAddComp}>Add</button>

            </>

        )


    }
    function renderCurrentComp() {

        if (currentsec === 0) {
            return (
                <YourInfoSection props={data} props1={handleChange} />
            )
        }

        else if (currentsec === 1) {
            return (
                <LinksSection props={data} props1={handleChange} />

            )
        }
        else if (currentsec === 2) {
            return (

                <WorkExpreinceSection props={data} props1={handleChange} />

            )
        }
        else if (currentsec === 3) {
            return (
                <SkillsSection props={data} props1={handleChange} />

            )
        }
        else if (currentsec === 4) {
            return (
                <EducationSection props={data} props1={handleChange} />

            )
        }
    }

    function hasContent(secObj) {
        for (const key in secObj) {
            if (secObj.hasOwnProperty(key)) {
                const value = secObj[key]

                const stringValue = String(value || "").trim()
                if (stringValue.length > 0) {
                    return true
                }
            }
        }
        return false
    }

    return (
        <>
            <div className="Grid_Container">

                <div className="Resume_Info" >
                    <div className="input_class">

                        {
                            renderCurrentComp()
                        }
                    </div>

                    <div className="btn_group">
                        {currentsec > 0 && (

                            <button onClick={prev}>Prev</button>
                        )}
                        {currentsec < section_Array.length - 1 ? (

                            <button onClick={next}>Next</button>
                        ) : (

                            <button onClick={generatePDF}>Generate Pdf</button>
                        )
                        }

                    </div>

                </div>

                {/* Resume Preview */}

                <div className="Resume_Preview_Area">

                    <div className="Resume_Preview" ref={resumeContentRef}>

                        <h1>{data.FullName}
                            {data.FullName && data.jobTitle && ', '}
                            {data.jobTitle}
                        </h1>
                        <h5>{data.Address}
                            {data.Address && data.Email && ' | '}
                            {data.Email}
                            {data.Email && data.MobileNo && ' | '}
                            {data.MobileNo}
                        </h5>


                        {hasContent(data.urlName) &&
                            <>
                                <hr />
                                <h2>Links{<h5> {<a href={`https://${data.url}`} target="_blank">{data.urlName}</a>}</h5>}</h2>



                            </>
                        }

                        {hasContent(data.jobTitle1 || data.Company || data.StartMonth || data.EndMonth || data.StartYear || data.EndYear || data.Place || data.Desc) &&
                            <>
                                <hr />
                                <h2 >Work Experience</h2>

                                <div className="row">
                                    <h5>{data.StartMonth} {data.StartYear}, {data.EndMonth} {data.EndYear}</h5>
                                    <h4 className="title">{data.jobTitle1}
                                        {data.jobTitle1 && data.Company && ', '}
                                        {data.Company}

                                    </h4>

                                    <h5>{data.Place}</h5>
                                </div>
                                <h5 className="desc">{data.Desc}</h5>
                            </>
                        }

                        {hasContent(data.Skills) &&
                            <>
                                <hr />
                                <h2>Skills</h2>

                                <h5>{data.Skills}</h5>
                            </>}

                        {hasContent(data.School || data.Degree || data.StartMonth1 || data.EndMonth1 || data.StartYear1 || data.EndYear1 || data.Place1 || data.Desc1) &&
                            <>

                                <hr />
                                <h2>Education</h2>
                                <div className="row">
                                    <h5>{data.StartMonth1} {data.StartYear1}, {data.EndMonth1} {data.EndYear1}</h5>

                                    <h4 className="title">{data.School}
                                        {data.School && data.Degree && ", "}
                                        {data.Degree}
                                    </h4>

                                    <h5>{data.Place1}</h5>
                                </div>
                                <h5 className="desc">{data.Desc1}</h5>
                            </>

                        }

                    </div>

                </div>
            </div>
        </>
    )

}

export default ResumeBuild