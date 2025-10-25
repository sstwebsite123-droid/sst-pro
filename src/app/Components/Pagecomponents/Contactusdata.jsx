"use client";
import React from "react";
import Title from "../Uiux/Title";
import Link from "next/link";
import { MessageSquare, Bell, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    heading: "Chat to sales",
    subtext: "Speak to our friendly team.",
    actionText: "info@sst.pro",
    href: "mailto:info@sst.pro",
  },
  {
    icon: <Bell className="w-5 h-5 text-white" />,
    heading: "Chat to support",
    subtext: "We're here to help.",
    actionText: "info@sst.pro",
    href: "mailto:info@sst.pro",
  },

  {
    icon: <MapPin className="w-5 h-5 text-white" />,
    heading: "Visit us",
    subtext: "Visit our office HQ.",
    actionText: "View on Google Maps",
    href: "https://maps.app.goo.gl/z98jJHwaspvNq6Lv5",
  },
  {
    icon: <Phone className="w-5 h-5 text-white" />,
    heading: "Call us",
    subtext: "Mon–Fri from 8am to 5pm.",
    actionText: "+41 (447) 07-8383",
    href: "tel:+41447078383",
  },
];

const Contactusdata = () => {
  return (
    <div>
      <div className="inn_container pt-24 2xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={'Get in <span class="gradient_text"> Touch </span>'}
              color={"text-white"}
            />
          </div>
          <div>
            {/* <Description
              description={
                "Questions, quotes, or support—reach the right team instantly."
              }
              color={"text-white"}
              align={"lg:text-end"}
            /> */}
          </div>
        </div>

        <div className="pt-18">
          {/* keep same grid + card classes as your Trackgroth component */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-12">
            {contacts.map((item, idx) => (
              <div
                key={idx}
                className="p-4 gradient_border group rounded-[50px] cursor-pointer hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700"
              >
                <Link href={item.href} target="_blank">
                <div className="max-w-[510px] m-auto pt-8 pb-6">
                  {/* small icon box like the screenshot */}
                  <div className="w-10 h-10 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h4 className="text-[30px] gradient_text w-max mt-4">
                    {item.heading}
                  </h4>

                  <p className="sub_description text-white pt-2 min-h-[44px]">
                    {item.subtext}
                  </p>

                  <span
                    // href={item.href}
                    className="inline-block mt-2 underline text-white"
                  >
                    {item.actionText}
                  </span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactusdata;
