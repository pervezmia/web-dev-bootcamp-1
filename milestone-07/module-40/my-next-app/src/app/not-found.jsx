
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '60px', margin: 0 }}>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <Link href="/">
                <button style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    cursor: 'pointer'
                }}>
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;