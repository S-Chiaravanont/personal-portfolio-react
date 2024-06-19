import React, { useEffect, useMemo, useState } from 'react'
import projectData from './project/projects.json'

export default function Projects() {
    const [modalStatus, setModalStatus] = useState<string>('')
    const [listOfProjId, setListOjProjId] = useState<string[] | null>(null)
    const [projectIdIndex, setProjectIdIndex] = useState<number>(0)

    useEffect(() => {
        const listOfProjId: string[] = projectData.Projects.reduce((acc: any, item: any) => {
                return [...acc, item.id]
            }, [])
        setListOjProjId(listOfProjId)
    }, [])

    const handleProjOnClick = (e: React.MouseEvent) => {
        setModalStatus(e.currentTarget.id)
        setProjectIdIndex(listOfProjId ? listOfProjId.indexOf(e.currentTarget.id) : 0)
    }

    return (
        <>
            <div className='projectDiv'>
                <div className='projectHeader'>
                    <h4>PROJECTS</h4>
                </div>
                <label htmlFor="checkbox">
                    <div className="projectDiv_content" id='merge' onClick={handleProjOnClick}>
                        <div></div>
                        <h4>MergeScript Express</h4>
                    </div>
                </label>
                <label htmlFor="checkbox">
                    <div className="projectDiv_content" id='mileage' onClick={handleProjOnClick}>
                        <div></div>
                        <h4>Mileage Dashboard</h4>
                    </div>
                </label>
                <label htmlFor="checkbox">
                    <div className="projectDiv_content" id='backend' onClick={handleProjOnClick}>
                        <div></div>
                        <h4>Something here...</h4>
                    </div>
                </label>
            </div>

            <input hidden type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" 
                className="proj-modal-overlay"
                role="dialog">
                <label className="proj-modal" 
                    aria-modal="true" 
                    aria-labelledby="modal-title" 
                    role="document">
                    <div className="proj_modal_close_div">
                        <label htmlFor="checkbox" 
                        aria-label="Close modal" 
                        className='modal-close'>
                            x
                        </label>
                    </div>
                    <div className="proj_modal_content_div">
                        <div className="proj_img"></div>
                        <h3 id="modal-title">{projectData.Projects[projectIdIndex].Project}</h3>
                        <p>{projectData.Projects[projectIdIndex].Description}</p>
                        <div className="proj_icon_div">
                            {projectData.Projects[projectIdIndex].icons.map((icon: {url: string, name: string}) => {
                                return (
                                    <div className='individualSKillDiv'>
                                        <div className={`${icon.url}`}></div>
                                        <p>{icon.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </label>
            </label>
        </>
    )
}