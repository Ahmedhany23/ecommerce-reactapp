import PathComponent from "../../components/utilites/path";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import EditProfile from "../../components/Account/EditProfile";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export default function AccountPage() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  })
  return (
    <section className="container mx-auto pt-[80px] pb-[140px] px-2">
      <div className="flex justify-between items-center">
        <PathComponent prev={"Home"} path={"My Account"} />
        {loading ? (
          <p className="text-sm">
            Welcome! <span className="text-secondary-3">Loading...</span>
          </p>
        ) : (
          <p className="text-sm">
            Welcome! <span className="text-secondary-3">{user.displayName}</span>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-7 sm:flex-row sm:gap-[50px] justify-between  pt-20">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium whitespace-nowrap">Manage My Account</h4>
            <div className="pl-[35px] pt-4 space-y-2">
              <p className=" whitespace-nowrap text-secondary-3 transition duration-200 cursor-pointer">
                My Profile
              </p>
              <p className="text-text-2 whitespace-nowrap hover:text-secondary-3 transition duration-200 cursor-pointer">
                Address Book
              </p>
              <p className="text-text-2 whitespace-nowrap hover:text-secondary-3 transition duration-200 cursor-pointer">
                My Payment Options
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium whitespace-nowrap">My Orders</h4>
            <div className="pl-[35px] pt-4 space-y-2">
              <p className="text-text-2 whitespace-nowrap hover:text-secondary-3 transition duration-200 cursor-pointer">
                My Returns
              </p>
              <p className="text-text-2 whitespace-nowrap hover:text-secondary-3 transition duration-200 cursor-pointer">
                My Cancellations
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium whitespace-nowrap">My WishList</h4>
          </div>
        </div>
        <EditProfile/>
      </div>
    </section>
  );
}
