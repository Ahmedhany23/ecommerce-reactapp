import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Button from "../utilites/Button";
export default function EditProfile() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="max-w-[870px] w-full lg:h-[630px] py-10 px-6 lg:px-20 border border-black/5 rounded shadow-md">
      <h3 className="text-secondary-3 text-xl font-medium mb-4">
        Edit Your Profile
      </h3>
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-[50px]">
          <div className="flex flex-col gap-2  lg:max-w-[330px] w-full">
            <label htmlFor="" className="">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder={loading ? "loading..." : user.displayName}
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 w-full "
            />
          </div>
          <div className="flex flex-col gap-2  lg:max-w-[330px] w-full">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder=""
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 "
              disabled={true}
            />
          </div>
        </div>


        <div className="flex flex-col gap-2 lg:flex-row lg:gap-[50px]">
          <div className="flex flex-col gap-2  lg:max-w-[330px] w-full">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder={loading ? "loading..." : user.email}
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2  lg:max-w-[330px] w-full">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Kingston, 5236, United State"
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 "
              disabled={true}
            />
          </div>
        </div>

        
        <div className="flex gap-[50px]">
          <div className="flex flex-col gap-2  w-full">
            <label htmlFor="" className="">
              Password Changes
            </label>
            <input
              type="password"
              name="password"
              placeholder="Current Password"
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 w-full"
            />
            <input
              type="password"
              name="New"
              placeholder="New Password"
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 w-full"
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm New Password"
              className="bg-secondary-1 py-[13px] pl-4 placeholder:text-text-2 w-full"
            />
          </div>
        </div>
        <div className="flex gap-8 justify-end">
          <button>Cancel</button>
          <Button text={"Save Changes"} />
        </div>
      </form>
    </div>
  );
}
