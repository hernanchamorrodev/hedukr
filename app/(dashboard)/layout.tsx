import { Sidebar } from "lucide-react";

const DashboardLayout = ({children} : {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <div className="ml-56 h-full">
                {children}
            </div>
        </div>
     );
}
 
export default DashboardLayout;