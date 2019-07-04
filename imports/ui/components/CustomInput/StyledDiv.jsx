import styled from 'styled-components';
// import colors from '/imports/utils/colors';

const StyledDiv = styled.div`
& > input {
    font-size: 2em;
    border: none;
    outline: none;
    border-bottom: 2px dashed goldenrod;
    margin-bottom: .5em;
    color: goldenrod;
}`;

export default StyledDiv;

/*
border-bottom: 2px dashed ${({ color }) => colors[color]};
color: ${ ({ color }) => colors(color) };

ternaire simplifié :
 on utilise const au lieu de 'let' (au cas ou on oublie un double égal dans les test de condition, cassant ainsi la condition)
 const test = true || 'default';

 ca marche à l'envers avec un et :
 const test = true && 'default';

 si vrai, il attribue le second, si faux, il attribue le premier
*/