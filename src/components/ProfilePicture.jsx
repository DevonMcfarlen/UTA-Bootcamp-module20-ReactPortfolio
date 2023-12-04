import pfp from '../assets/images/Devonpfp.png'

function ProfilePicture() {
    return (
        <section>
            <img src={pfp} alt="This is Devon McFarlen's current Profile Picture" /> 
            <h1>Devon McFarlen</h1> 
        </section>
    )
}

export default ProfilePicture;