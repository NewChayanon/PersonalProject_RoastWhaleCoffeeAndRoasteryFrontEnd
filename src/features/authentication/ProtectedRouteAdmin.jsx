
import { useUser } from '../../hooks/useUser'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouteAdmin({children})  {
    const {isUser} = useUser()
    if (!isUser?.["is_admin"]) {
        return <Navigate to="/"/>
    }
  return (
    <>
    {children}
    </>
  )
}
