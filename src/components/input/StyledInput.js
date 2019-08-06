import styled from 'styled-components'
import border from '../../assets/styles/border'

const StyledInput = styled.input`
        display:block;
        width:82%;
        margin:0 auto;
        height:.49rem;
        border-top:none;
        border-left:none;
        border-right:none;
        padding-left:.31rem;
`
        const BorderedInput = border({
        component: StyledInput,
        borderWidth: '0 0 1px 0',
        borderColor: 'rgba(235,235,235,1)',
        })


export { BorderedInput }