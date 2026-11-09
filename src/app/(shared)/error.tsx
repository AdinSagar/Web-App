 'use client';
import './error.css';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="shared-error"><a href="/">FahamPesa</a><h1>We couldn’t load this listing.</h1><p>Please try again in a moment.</p><button onClick={reset}>Try again</button></main>;}
