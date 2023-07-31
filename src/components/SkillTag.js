import "./SkillTag.css"

function SkillTag({ skillName, url}) {
    if ( url === "") {
        return (
            <button id="elem">
                <span>{ skillName }</span>
            </button>
        );
    } else {
        return (
            <button id="elem">
                <img src={ url } alt=""/>
                <span>{ skillName }</span>
            </button>
        );
    }
}

export default SkillTag;