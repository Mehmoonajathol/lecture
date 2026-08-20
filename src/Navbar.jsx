import "./Navbar.css"
function Navbar({userName, courseName}){
    return (
        <div>
            <h1 className="title">
                Hi {userName}
            </h1>
            Hello {userName}
        You have access to {courseName}
        </div>
    )
}
export default Navbar;