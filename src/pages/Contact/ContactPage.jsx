import PathComponent from "../../components/utilites/path";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="container mx-auto pt-20 pb-[140px] font-poppins">
      <PathComponent prev={"Home"} path={pathname} />
      <div className="pt-20 px-2 grid grid-cols-1  lg:grid-cols-[minmax(0,340px),minmax(0,1000px)] gap-4">
        {/* First Column */}
        <div className="w-full h-full pt-10 px-[2.188rem] pb-[50px] rounded shadow-md bg-white">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/images/icons/Contact/icons-phone.png" alt="phone" />
              <p className="text-base text-text-3 font-medium">Call to Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-normal">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-normal">Phone: +8801611112222</p>
            </div>
          </div>
          <div className="border-b border-b-black my-8"></div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/images/icons/Contact/icons-mail.png" alt="mail" />
              <p className="text-base text-text-3 font-medium">Write To US</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-normal">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm font-normal">
                Email: customer@exclusive.com
              </p>
              <p className="text-sm font-normal">
                Email: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-span-1 w-full h-full rounded shadow-md bg-white py-10 px-8">
          {/* Contact Form */}
          <form action="" className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4  mb-6">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="text-base font-normal text-text-3/50 rounded bg-secondary-1 py-3 pl-4 outline-none w-full lg:max-w-[335px]"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="text-base font-normal text-text-3/50 rounded bg-secondary-1 py-3 pl-4 outline-none w-full lg:max-w-[335px] "
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                required
                className="text-base font-normal text-text-3/50 rounded bg-secondary-1 py-3 pl-4 outline-none w-full lg:max-w-[335px] "
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 text-base font-normal text-text-3/50 rounded bg-secondary-1 h-[207px] resize-none outline-none"
            />
            <div className="flex justify-end mt-8">
              <button type="submit" className="btn-1">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
