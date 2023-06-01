// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.div`
//     padding: 1em;
//     background: grey;
// `
// const Title = styled.h1`
//     font-size: 1.5em;
//     color: white;
//     text-align:center;
// `
// function MainPage(props) {
//     return (
//         <Wrapper>
//             <Title>
//                 안녕, 리액트!
//             </Title>
//         </Wrapper>
//     )
// }

// export default MainPage;

// const name1='명규'
// const region='경기'

// function myTagFunction(strings, nameExp, regionExp) {
//     let str0 = string[0]
//     let str1 = string[1]
//     let str2 = string[2]

//     return `${str0}${nameExp}${str1}${regionExp}${str2}`
// }

// const output = myTagFunction `제 이름은 ${name1}이고, 사는 곳은 ${region}입니다.`

// console.log(output)

import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}

export default Sample;