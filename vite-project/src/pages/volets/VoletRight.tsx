import React from 'react'
import { Link } from 'react-router-dom'
import mother from '../../assets/background/motherboard.png'
import './VoletRight.scss'

interface VoletRightProps {
  logoId: object
  LogoFind: GiPirateSkull
  isOpenRight: boolean
  handleVoletsRight: () => void
}

const VoletRight: React.FC = (props: VoletRightProps) => {

  const callMyLogo = (id: number) => {
    const logoId: object = props.computers?.find((c) => c.id === id)
    const LogoFind = logoId.logo
    return (
      <div>
        <LogoFind/>
      </div>
    )
  }
  
  return (
    <div>
      {props.isOpenRight ? (
        <div className="volet--R">
          <div className="subvolet--R">
            <button
              data-testid="btn-testvoletright"
              onClick={props.handleVoletsRight}
              className="btn--voletr"
            >
              X
            </button>
            <p>Chat Computing</p>

            <img
              src={mother}
              width='240px'
              height='140px'
              alt='no img volet-R 1'
            />

            <section className="section--voletr">
              {props.computers?.map((computer) => (
                <li key={computer.id} className="li--right">
                  <Link className="link--tagvoletr"
                    to={`/chatcomputer/${computer.id}`}
                  >
                    {computer.title}
                  </Link>
                  <span 
                    className="spanli--right"
                  >
                    {callMyLogo(computer.id)}
                  </span>
                </li>
                ))
              }
            </section>

          </div>
        </div>
        ) : (
        <div className="volet--R2">
          <div className="subvolet--R2">

            <button
              data-testid="btn-testvoletright"
              onClick={props.handleVoletsRight}
              className="btn--voletr"
            >
              X
            </button>
            <p>Chat Computing</p>

            <img
              src={mother}
              width='240px'
              height='140px'
              alt='no img volet-R 2'
            />

            <section className="section--voletr">
              {props.computers?.map((computer) => (
                <li key={computer.id} className="li--right">
                  <Link className="link--tagvoletr"
                    to={`/chatcomputer/${computer.id}`}
                  >
                    {computer.title}
                  </Link>
                  {computer.logo}
                  <span 
                    className="spanli--right"
                  >
                    {callMyLogo(computer.id)}
                  </span>
                </li>
                ))
              }
            </section>

          </div>
        </div>
        )
      }
    </div>
  )
}

export default VoletRight