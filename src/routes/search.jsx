import {useSearchParams} from 'react-router-dom'


function BSearch(){
  const [queryParameters] = useSearchParams()
  return (

      <p>Type: {queryParameters.get("query")}</p>


  )
}

export default BSearch