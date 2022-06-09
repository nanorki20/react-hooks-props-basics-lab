import user from "../data/user"
const { prototype } = require("mocha");

function Links({github, linkedin}){
    return(
        <>
         <h3>Links</h3>
         <a id="github" href={github}>{github}</a>
         <a id="linkedin" href={linkedin}>{linkedin}</a>
        </>
    )
}
export default Links