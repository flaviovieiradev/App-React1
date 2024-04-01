import Button from './evento/Button';

function Evento(){
    function primeiro(){
        alert('Primeiro');
    }
    function segundo(){
        alert('Segundo');
    }

    return(
        <div>
            <p>Evento dos botões</p>
            <Button evento={primeiro} texto="Meu 1º Botão" />
            <Button evento={segundo} texto="Meu 2º Botão" />
        </div>
    )
}

export default Evento;