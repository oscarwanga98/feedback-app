import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
const headerStyles ={
    backgroundColor:bgColor,
    color:textColor
}

  return (
    <header style={headerStyles}>
        <div className="container">
          <div className="h2">{text}</div>  
        </div>
    </header>
  )
}

Header.defaultProps={ 
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}
Header.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
    
}
export default Header
