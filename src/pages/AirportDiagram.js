import laxAirportDiagram from '../images/KLAX_FAA_Airport_Diagram_portrait.png'

export default function AirportDiagram () {
  return (
    <div className='image-container'>
      <img src={laxAirportDiagram} alt="KLAX airport diagram" />
    </div>
  )
}