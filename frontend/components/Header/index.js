import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default () => {
  return (
    <div>
      <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/post">
      <a style={linkStyle}>Post</a>
    </Link>
  </div>
  )
};

