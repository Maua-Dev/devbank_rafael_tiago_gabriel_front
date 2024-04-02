import './TelaDaConta.css'

function TelaDaConta() {
  

    return (
      <>
        <header><img src="src/img/image.webp" width={1200} className='centro' /></header>
          <div className='centered-container'>
            <form>
              <input name="Coloque a API" className='input-box' />
            </form>
            <button> Acessar </button>
          </div>
      </>
    )
  }
  
  export default TelaDaConta