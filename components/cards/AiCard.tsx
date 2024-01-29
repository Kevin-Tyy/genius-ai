import styled from 'styled-components';
import BlogCardComp from '../shared/BlogCardComp';

const StyledBorder = styled.div`
    background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
    height: 5px;
`

const StyledButton = styled.button`
    box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.80);
`

const AiCard = () => {
    return <BlogCardComp
        imageUrl="/ai-tool.png"
        title="Exploring the Latest AI Programming Tools."
        date="Oct 2018 - present"
        content="Lorem ipsum  sit amet consectetur adipisicing elit. 
    Similique vel neque eos rem quisquam est ad fuga porro quam repellat! Ad assumenda ipsum nesciunt soluta dignissimos nobis placeat corrupti minima!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolorem, minus? Praesentium dicta asperiores id rerum suscipit, necessitatibus fugiat voluptatibus iure dignissimos corporis dolores vel dolor maxime? Aliquam similique possimus corrupti."
        readMoreButtonText="Read More"
        height="40vh"
        width="60%"
    />
}

export default AiCard;
