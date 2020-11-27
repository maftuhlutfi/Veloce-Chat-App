import './ChooseAvatar.scss'

import AvatarBox from './AvatarBox'

const ChooseAvatar = ({active, setActive}) => {
    const arrayHelper = Array.from(Array(20).keys());

    const handleClick = j => {
        setActive(j)
    }

    return ( 
        <div className="choose-avatar">
            <div className="avatar-list">
                {arrayHelper.map((i, j) => <div key={j} onClick={() => handleClick(j)}>
                                                <AvatarBox
                                                    width='70px' 
                                                    src={`https://robohash.org/${j}.png?set=set1&size=150x150`}
                                                    active={j === active}
                                                />
                                            </div>
                )}
            </div>
        </div>
     );
}
 
export default ChooseAvatar;