import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="row justify-content-center pt-6 bg-primary vh-100">
            <div className="col-11 col-md-4">
                <div className="card">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
