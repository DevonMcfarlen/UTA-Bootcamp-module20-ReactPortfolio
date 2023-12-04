import pfp from '../assets/images/Devonpfp.png'

function ProfilePicture() {
    return (
        <div>
            <img src={pfp} alt="This is Devon McFarlen's current Profile Picture" /> 
            <h1>Devon McFarlen</h1> 
        </div>
    )
}

export default ProfilePicture;