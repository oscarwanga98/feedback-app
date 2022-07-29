import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this projects</h1>
            <p>This is a react application to leave feedback for a prodcut or service </p>
            <p>Version 1.0.0 </p>
            <p><Link to="/">Back to home</Link> </p>

        </div>
    </Card>
  )
}

export default AboutPage