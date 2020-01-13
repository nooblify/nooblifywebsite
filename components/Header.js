import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <div className="border-t-4 border-noobblue-500">
        <div className="flex container py-3 mx-auto">
            <div className="flex-1 ">
                <a href="/"><img className="h-16 block mx-auto" src="/logo.png" /></a>
            </div>
        </div>
    </div>
    </Link>
  </div>
);

export default Header;