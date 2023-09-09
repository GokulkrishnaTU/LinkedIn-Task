import React from 'react'
import { Link } from 'react-router-dom'
import Recent from '../components/Recent'
import Sidebar from '../components/Sidebar'

function Footer() {
  return (
    <div><Link to='/'>
          <img src="https://media-exp1.licdn.com/dms/image/C4D22AQGNfILXCvHLEQ/feedshare-shrink_800/0/1652176148325?e=1655337600&v=beta&t=Sl7iVJFQsjl9QQdWDdTJAKLCfGDeq5dqK5klb4XdhBs"
           alt=''
           />
        Section 
        <img src='https://media-exp1.licdn.com/dms/image/C4E22AQFEDsn9JKW7Ug/feedshare-shrink_2048_1536/0/1652103293249?e=1655337600&v=beta&t=JFL1kD4sSwlowjYwScgJ4bdJq_JUnmrnuK42CkxUXxc'
        alt=''
        />
              <img 
              src='https://media-exp1.licdn.com/dms/image/C4D22AQHOZ_vgYNyb2A/feedshare-shrink_800/0/1652262026632?e=1655337600&v=beta&t=KaLu8txkErhKEq59r1SltTNGHvVwezEQilgtphIqaM0'
        alt=''
        /> 
   <img src="https://media-exp1.licdn.com/dms/image/C4D22AQEw0hcOfZiC_w/feedshare-shrink_800/0/1652334919545?e=1655337600&v=beta&t=wIxIgg-ihoXCfmBksYi2hlvRDd9Rwjh0A9yRIG6VCgA"
        alt=''
        />
        <Sidebar/>
    </Link></div>
  )
}

export default Footer