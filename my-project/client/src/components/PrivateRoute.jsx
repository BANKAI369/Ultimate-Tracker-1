import {Navigate} from 'react-router-dom';
import {fakeAuth} from '../utils/auth';

export default function PrivateRoute({children}) {
    return fakeAuth.isAuthenticated() ? (
        children
    ) : (
        <Navigate to="/" replace />
    );
}