import react from 'react';
const Card = ({name,id,email}) => {
    console.log(name);
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${name}?200x200`} alt={`Robot${id}`} />
            {/* console.log(props.id); */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;{}