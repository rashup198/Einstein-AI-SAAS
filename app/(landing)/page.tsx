import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page (unprotected)</h1>
      <div>
        <Link href="/sign-in">
          <button className="bg-black text-white rounded-md p-2">Login</button>
        </Link>

        
        <Link href="/sign-up">
          <button className="bg-black text-white rounded-md p-2">Register</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
