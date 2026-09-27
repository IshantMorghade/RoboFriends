import react from 'react';
const Card = (props) => {
    const {} = props;
    console.log(props.name);
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={'https://robohash.org/${props.name}?200x200'} alt='{props.id}' />
            {/* console.log(props.id); */}
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;{}