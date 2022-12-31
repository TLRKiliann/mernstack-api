import { useState } from 'react'
import usePersonnalHook from '../hook/personnal.hook'
import useComputerHook from '../hook/computers.hook'
import { UserType } from '../models/usertype'
import { computerType } from '../models/computerType'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Footer from '../components/Footer'
import VoletRight from './volets/VoletRight'
import VoletLeft from './volets/VoletLeft'
import cool from '../assets/logo/chat-logobg.png'
import '../stylePages/Home.scss'


const Home: React.FC = () => {
  //Custom hooks
  const users = usePersonnalHook()
  const computers = useComputerHook()

  const textHeader = "Login and Chat !";
  const secondTextHeader = "(Only for Stack-Society Members)";

  const [isOpenRight, setIsOpenRight] = useState<boolean>(false)
  const [isOpenL, setIsOpenL] = useState<boolean>(false)

  const handleVoletsRight = () => {
    setIsOpenRight(!isOpenRight)
  }

  const handleVoletsLeft = () => {
    setIsOpenL(!isOpenL)
  }

  return(
    <div className="div--home">

      <div>
        <img
          src={cool}
          width="1920px"
          height="1080px"
          className="img--home"
          alt={cool}
        />
      </div>

      <div className="wallIntro">
        <h1 className="wallIntro--h1">Chat-Society</h1>
      </div>

      {!isOpenRight && <div className="div--voletsRight">
          <button
            onClick={handleVoletsRight}
            className="btn--voletRight"
          >
            Computing
          </button>
        </div>
      }

      {!isOpenL && <div className="div--voletsLeft">
          <button
            onClick={handleVoletsLeft}
            className="btn--voletLeft"
          >
            Chat-Room
          </button>
        </div>
      }

      <div className="animation--alternrota">
        {!isOpenL && <div className="webdevanim">
            <h1>Chat-Room</h1>
          </div>
        }

        {!isOpenRight && <div className="computinganim">
            <h1>Computing</h1>
          </div>
        }
      </div>

      <VoletRight
        computers={computers}
        isOpenRight={isOpenRight}
        handleVoletsRight={handleVoletsRight}
      />

      <VoletLeft
        users={users}
        isOpenL={isOpenL}
        handleVoletsLeft={handleVoletsLeft} 
      />

      <MainTitle
        textHeader={textHeader}
        secondTextHeader={secondTextHeader}
      />

      <MainComp users={users} />
      
      <Footer />

    </div>
  )
}

export default Home