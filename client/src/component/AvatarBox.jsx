import './AvatarBox.scss'

const AvatarBox = ({inline, width, src, active, onClick}) => {
    return ( 
        <div className='avatar-box'>
            <img 
                src={src}
                alt="profile-pict"
                style={{width, marginRight: inline ? '10px' : '', border: active ? '5px solid #2CBDFF' : ''}}
            />
        </div> 
    );
}
 
export default AvatarBox;