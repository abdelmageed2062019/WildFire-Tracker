import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon
             style={{fontSize: 50, position: "relative", top: 10}}
              icon={locationIcon} 
              />
               Wildfire Tracker (Powered By NASA)
               </h1>
        </header>
    )
}

export default Header
