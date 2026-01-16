const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1>Authentification</h1>
      {children} {/* Affiche les pages d'authentification comme Home, Login, Signup */}
    </div>
  )
}

export default AuthLayout
