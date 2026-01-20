import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";

const OurTeams = () => {
  const leaders = [
    {
      initials: "SK",
      name: "Samarth Khatri",
      title: "Chief Executive Officer",
      description:
        "Samarth leads our company vision and strategic direction, driving innovation while building partnerships that shape the future of our industry. His entrepreneurial spirit and leadership expertise guide our mission to deliver exceptional web development solutions to businesses of all sizes.",
      founder: true,
      image: "/samarthPhoto.jpg",
    },
    {
      initials: "KD",
      name: "Karan Dalakoti",
      title: "Chief Technology Officer",
      description:
        "Karan architects our technological foundation and drives technical innovation across all platforms. His expertise in cutting-edge technologies and system architecture ensures we stay ahead of industry trends while maintaining robust, scalable solutions.",
      founder: true,
      image: "/photoKaran1.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Anurag Gupta",
      role: "Senior Frontend Developer",
      description:
        "Anurag brings over 6 years of experience in web development with expertise in MERN stack and NextJs Technologies.",
      image: "/shikharPhoto.jpg",
    },
    {
      name: "Himanshu Sharma",
      role: "Senior Backend Developer",
      description:
        "Himanshu is our senior backend developer with more than 4 years of experience in technologies like Node.js and Spring Boot.",
      image: "/tanmayPhoto.jpg",
    },
    {
      name: "Roshan Singh",
      role: "Senior UI/UX Developer",
      description:
        "Roshan specializes in UI/UX design with over 6 years of industry experience.",
      image: "/ashishPhoto.jpg",
    },
    {
      name: "Our Interns",
      role:
        "Frontend Developers, Backend Developers, WordPress Developers and UI/UX Designers",
      description:
        "We have a team of more than 15 interns currently working with us on different projects and technologies.",
      image: "/interns.jpg",
    },
  ];

  const philosophyItems = [
    {
      icon: CheckCircle,
      title: "UODDM",
      description:
        "A modern framework that follows structured steps to deliver scalable, tech-enabled web applications.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We respect your time and deliver projects on schedule without compromising quality.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description:
        "We keep you informed at every stage with open and transparent communication.",
    },
  ];

  return (
    <div>
      {/* Leadership */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
              Our Leadership
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-14">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="relative max-w-md w-full border border-black/10 rounded-lg px-10 py-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {leader.founder && (
                    <span className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-2 py-1 rounded-br-md rounded-tl-md">
                      FOUNDER
                    </span>
                  )}

                  <div className="flex justify-center mb-4">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} photo`}
                      width={80}
                      height={80}
                      className="rounded-full object-cover h-20 shadow-inner"
                    />
                  </div>

                  <h3 className="text-center text-lg font-semibold text-black">
                    {leader.name}
                  </h3>
                  <p className="text-center text-black text-sm font-semibold uppercase mb-3">
                    {leader.title}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-black/10 overflow-hidden hover:shadow-lg flex flex-col md:flex-row transition-shadow duration-300"
              >
                <div className="w-full md:w-1/3 flex justify-center items-center bg-gray-100 p-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border border-black/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-black font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto text-gray-400 leading-relaxed text-center">
            <p className="text-base md:text-lg">
              At NEXTCONNECTHUB, we believe technology should be accessible to
              every business — small or big.
            </p>
            <br />
            <p className="text-base md:text-lg">
              We work closely with our clients to deliver solutions that exceed
              expectations, because your success defines ours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
