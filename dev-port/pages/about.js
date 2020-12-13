//Import the Link API to support client-side navigation


import Link from 'next/link'
import Layout from '../components/MyLayout'


const About = () => (
  <Layout>


    <p style={{color: "red"}}>I am a full stack web developer. I am competent in the following: </p>
    <ul style={{color: "orange", position: "absolute"}}>
        <li>Javascript E6</li>
        <li>Node.js and Express</li>
        <li>Restful API</li>
        <li>Databases:Mongodb</li>


    </ul>
    
  </Layout>
)


export default About