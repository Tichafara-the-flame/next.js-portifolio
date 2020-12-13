//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div style={{color: "black", backgroundColor: "grey", padding: "8px"}}>
        <Link href="/">
          <a style={linkStyle}>HOME</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>ABOUT</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>CONTACT</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>PROJECTS</a>
        </Link>
    </div>
)

export default Header