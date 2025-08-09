import './Rodape.css'

function Rodape() {
    return (
        <>
            <footer className='text-center bg-dark text-white p-3'>
                <p>
                    Desenvolvido por &nbsp;
                    <a href='https://github.com/Lucaaasxb'
                        target='blank' className='text-danger'>Lucas Brian</a>
                    &nbsp; no &nbsp;
                    <a href='https://sp.senac.br/americana'
                        target='blank' className='text-danger'>Senac Americana</a>
                </p>
            </footer>
        </>
    )
}

export default Rodape