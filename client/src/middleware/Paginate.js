import React, {useContext} from 'react'
import { GlobalContext } from "../GlobalContext";
import { Button } from '@mui/material';


function Paginate() {
    const data = useContext(GlobalContext);
    const [page, setPage] = data.productApi.page
    const [result] = data.productApi.result
  return (
    <div>
    {
        result < (page * 9) ? "" : <Button variant="contained" onClick={() => setPage(page+1)}>View more ... </Button>
    }
  </div>
  )
}

export default Paginate