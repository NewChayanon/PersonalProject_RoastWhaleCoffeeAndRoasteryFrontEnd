
import { useUser } from '../../hooks/useUser'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouteUser({children}) {
    const {isUser} = useUser()
    if (isUser?.["is_admin"] || !isUser) {
        return <Navigate to="/"/>
    }
  return (
    <>
    {children}
    </>
  )
}
