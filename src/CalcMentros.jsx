import './CalcMentros.css'
import { TbRulerMeasure2 } from "react-icons/tb";

function CalcMetro() {
 
    const calcular = (function () {
        const centimetro = document.getElementById("centimetro").value
        const total = centimetro / 100
        alert("o valor convertido para centimetro é: " +  total + "cm")
    })
 
    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
               
                <div className="form-group mb-3">
                    <label htmlFor="centimetro">Valor de Centimetro em Metros</label>
                    <input type="text" className="form-control" id="centimetro" required />
                </div>
                <button type="button" onClick={calcular}className="btn btn-primary w-100"><TbRulerMeasure2 size={25} color='black' />Calcular</button>
            </form>
 
        </>
    )
}
 
export default CalcMetro;