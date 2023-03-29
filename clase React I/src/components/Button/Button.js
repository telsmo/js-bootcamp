export const Button = ({ numero, multiplicador }) => {
    return <button type="button" onClick={() => { alert(numero * multiplicador) }}>{` ${numero} X ${multiplicador} `}</button>;
}

