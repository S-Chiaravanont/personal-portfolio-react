interface ExperienceTagProps {
    tag: {
        name: string,
        color: string
    }
}

export default function ExperienceTag({ tag }: ExperienceTagProps) {

    return (
        <div className="tag_content" style={{backgroundColor: `${tag.color}`}}>
            {tag.name}
        </div>
    )
}