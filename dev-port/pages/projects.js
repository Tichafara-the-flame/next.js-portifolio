//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

const Projects = () => (
  <Layout>
    <p>Please check out my projects on the links below </p>
<ul>
<li><a target="_blank" href="https://minesweeper-g.herokuapp.com/">minesweeper game-Deployed on Heroku</a></li>
<li><a target="_blank" href="https://github.com/Tichafara-the-flame/itunes-api/tree/main/backend">Itunes Search Api- Deployed on github</a></li>
</ul>
    
  </Layout>
)


export default Projects