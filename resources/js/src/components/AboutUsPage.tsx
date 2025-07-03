import React from 'react';
import { Heart, Compass, Medal, CalendarClock } from 'lucide-react';

const AboutUs = () => {
  // Team data
  const teamMembers = [
    { 
      id: 1, 
      name: "Samuel Njoro", 
      role: "Lead Safari Guide", 
      experience: "15+ years in wildlife tracking",
      specialty: "Big Cat behavior expert"
    },
    { 
      id: 2, 
      name: "Amina Kassim", 
      role: "Operations Director", 
      experience: "10+ years in eco-tourism",
      specialty: "Sustainable travel design"
    },
    { 
      id: 3, 
      name: "Thomas Mbeki", 
      role: "Wildlife Photographer", 
      experience: "National Geographic contributor",
      specialty: "Safari photography coaching"
    },
    { 
      id: 4, 
      name: "Zahara Mwamba", 
      role: "Cultural Specialist", 
      experience: "Anthropology PhD",
      specialty: "Indigenous community experiences"
    }
  ];

  // Core values data
  const coreValues = [
    {
      title: "Customer delight ",
      description: "We deliver the best service and experience for our customer.",
      icon: <Heart className="w-10 h-10 text-green-900" />
    },
    {
      title: "Authentic Adventure",
      description: "We deliver the best authentic adventure for our dear customer",
      icon: <Compass className="w-10 h-10 text-green-900" />
    },
    {
      title: "Expert Guides",
      description: "We deliver only expert tour guides for our dear customer",
      icon: <Medal className="w-10 h-10 text-green-900" />
    },
    {
      title: "Time Flexibility",
      description: "We welcome time flexibility for our dear customer",
      icon: <CalendarClock className="w-10 h-10 text-green-900" />
    }
  ];

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

           <div className="relative z-10 text-center text-white container px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">ABOUT US</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 italic">Where every journey tells a story, and every story conserves a legacy</p>
          <div className="w-24 h-1 bg-brand mx-auto mb-12" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-sm text-brand uppercase tracking-wide mb-2">Our Essence</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ON Adventure Africa: Beyond the Horizon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            On Adventure Africa is the perfect travel agency for your every memorable trip. With our expert guides, we are both professional and personal. Our trips consist of unforgettable experiences and are delivered in a sustainable way to protect the environment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600 max-w-xs">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/beautiful.jpg"
                alt="Our Beginning"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-sm text-brand uppercase tracking-wide mb-2">
                Our Beginning
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                From Dusty Trails to Dream Journeys
              </h2>
              <p className="text-gray-600 mb-6">
                What began in 2008 with a single Land Rover and a passionate Maasai guide has grown into 
                Africa's most awarded safari operator. Our founder, Bernard Orero, started by leading 
                small groups through the Mara ecosystem, driven by a vision to share Africa's magic while 
                protecting its future.
              </p>
              <p className="text-gray-600">
                Today, we operate in 12 countries, have hosted over 15,000 travelers, and fund conservation 
                projects protecting 500,000 acres of wilderness. Yet our spirit remains rooted in those 
                first dusty trails and star-filled nights around the campfire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-8">
            <h4 className="text-sm text-brand uppercase tracking-wide mb-2">
              Looking Forward
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become the bridge between curious souls and Africa's wilderness, creating a global community 
              of conservation-minded travelers who protect Africa's natural heritage for generations to come.
            </p>
          </div>
          
          <div className="p-8">
            <h4 className="text-sm text-brand uppercase tracking-wide mb-2">
              Our Purpose
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To craft transformative safari experiences that respect local communities, protect wildlife habitats, 
              and ignite conservation awareness through ethically-guided adventures that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Safari Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-sm text-brand uppercase tracking-wide mb-2">
            Meet the Guardians
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Safari Team
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-brand font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.experience}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Vehicles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/safari.jpg" 
                alt="Our Safari Fleet"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-sm text-brand uppercase tracking-wide mb-2">
                Travel in Comfort
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Safari Fleet
              </h2>
              <p className="text-gray-600 mb-8">
                Purpose-built for African terrain and designed for unparalleled wildlife viewing, 
                our custom safari vehicles ensure your comfort and safety while minimizing environmental impact.
              </p>
              
              <ul className="space-y-3 text-gray-600">
                {[
                  "Custom-built 4x4 Land Cruisers with open-air viewing",
                  "360° panoramic roofs for optimal photography",
                  "Climate-controlled compartments with charging stations",
                  "Refrigerated compartments for refreshments",
                  "Eco-friendly hybrid engines (30% lower emissions)",
                  "Satellite communication and medical kits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/maasai-mara-people.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            START YOUR ADVENTURE
          </h1>
          <div className="w-20 h-1 bg-brand mx-auto mb-12" />

          <button className="bg-brand text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-brand/90 transition duration-300">
            Explore Places
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;