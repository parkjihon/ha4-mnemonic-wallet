function Mnemonic({ result }) {
  return <div className="row">
    { (result) ? 
    <div className="col">
      <h3>생성 결과 : {result}</h3>
    </div> : null }
  </div>
}

export default Mnemonic;