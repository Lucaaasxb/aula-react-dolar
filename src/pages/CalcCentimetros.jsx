import { TbRulerMeasure2 } from "react-icons/tb";

function CalcCentimetros() {

    const calcular = (function () {
        const metro = document.getElementById("metro").value
        const total = metro * 100
        alert("o valor convertido para metros é: " +  total + "cm")
    })
 
    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
               
                <div className="form-group mb-3">
                    <label htmlFor="metro">Valor de Metros em Centímetros</label>
                    <input type="text" className="form-control" id="metro" />
                </div>
                <button type="button" onClick={calcular}className="btn btn-primary w-100"><TbRulerMeasure2 size={25} color='black' />Calcular</button>
            </form>
 
        </>
    )
}

export default CalcCentimetros;