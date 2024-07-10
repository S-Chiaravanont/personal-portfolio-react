import React from 'react'
import experienceDataImport from './experience/experience.json'
import ExperienceTimelineContainer from './experience/experienceTimelineContainer'

export default function Experience() {
    const experienceData = experienceDataImport.Experience as any[]
    return (
        <div className="experienceDiv">
            <div className="experienceHeader">
                <h3>EXPERIENCE</h3>
            </div>
            <div className="timeline">
                {experienceData && experienceData.map((experience, index: number) => {
                    return <ExperienceTimelineContainer key={index} experienceData={experience} index={index} />
                })}
            </div>
        </div>
    )
}