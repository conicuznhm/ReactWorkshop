// import { useState, useEffect } from 'react'

export default function SearchForm(props) {
  // const [searchTime, setSearchTime] = useState(props.text)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     props.setSearchP(searchTime)
  //   }, 1000)

  //   return () => clearTimeout(timer)
  // })

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={props.searchTime}
        onChange={e => props.setSearchTime(e.target.value)}
      ></input>
      <button
        className="btn btn-warning"
        onClick={() => props.setSearchTime('')}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  )
}

// export default function SearchForm(props) {

//   return (
//     <div className="input-group">
//       <input
//         type="text"
//         className="form-control"
//         value={props.text}
//         onChange={(e) => props.setSearchP(e.target.value)}
//       ></input>
//       <button className="btn btn-warning" onClick={() => props.setSearchP("")}>
//         <i className="fa-solid fa-xmark" />
//       </button>
//     </div>
//   );
// }
