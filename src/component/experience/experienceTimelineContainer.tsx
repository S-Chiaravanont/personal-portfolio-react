import React from 'react';
import ExperienceTag from './experienceTag'

interface Itag {
    name: string,
    color: string
}

interface ExperienceTimelineContainerProps {
    experienceData: {
        Title: string, 
        Date: string, 
        Company: string, 
        tag: Itag[], 
        responsibility: string[]
    };
    index: number;
}

export default function ExperienceTimelineContainer({experienceData, index}: ExperienceTimelineContainerProps) {
    return (
        <div className={`exp_container ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="date">{experienceData.Date}</div>
            <div className="exp_content">
                <h2>{experienceData.Title}</h2>
                <p>
                    {experienceData.Company}
                </p>
                <div className="exp_tag_container">
                    {experienceData.tag.map((tag, index) => {
                        return <ExperienceTag tag={tag} key={`tag-${index}`} />
                    })}
                </div>
            </div>
        </div>
    )
}