import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Heart, 
  Award, 
  Globe, 
  Camera, 
  Compass, 
  Star,
  Phone,
  Mail,
  Calendar,
  Shield,
  Zap,
  ThumbsUp
} from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "With 15 years in the travel industry, Sarah founded Wanderlust to make extraordinary travel accessible to everyone."
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Michael ensures every journey runs smoothly, from planning to execution, with his logistics expertise."
  },
  {
    name: "Emma Rodriguez",
    role: "Travel Experience Designer",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Emma crafts unique itineraries that blend adventure, culture, and unforgettable moments."
  },
  {
    name: "David Thompson",
    role: "Customer Success Manager",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "David ensures every traveler feels supported before, during, and after their journey."
  }
];

const values = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "We connect you to breathtaking destinations across all seven continents"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passionate Service",
    description: "Every journey is crafted with love, care, and attention to detail"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive support and insurance"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Booking",
    description: "Book your dream trip in minutes with our streamlined process"
  }
];

const achievements = [
  { number: "50,000+", label: "Happy Travelers" },
  { number: "120+", label: "Destinations" },
  { number: "15", label: "Years Experience" },
  { number: "98%", label: "Satisfaction Rate" }
];

const testimonials = [
  {
    name: "Jennifer Adams",
    location: "New York, USA",
    text: "Wanderlust turned our honeymoon into an absolute fairy tale. Every detail was perfect!",
    rating: 5
  },
  {
    name: "Roberto Silva",
    location: "São Paulo, Brazil",
    text: "The best travel experience I've ever had. Professional, caring, and truly exceptional service.",
    rating: 5
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    text: "They made my solo adventure feel safe and exciting. I can't wait for my next trip with them!",
    rating: 5
  }
];

function AboutUs() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1920")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-orange-400">Wanderlust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
              We don't just plan trips, we create life-changing experiences that connect you to the world's most incredible destinations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">120+ Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-medium">50,000+ Travelers</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span className="font-medium">15 Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2009 with a simple mission: to make extraordinary travel experiences accessible to everyone. 
              What started as a small dream has grown into a trusted partner for thousands of adventurers worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Why We Do What We Do</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Travel has the power to transform lives, broaden perspectives, and create connections that last a lifetime. 
                We believe everyone deserves to experience the wonder of discovering new cultures, tasting exotic cuisines, 
                and standing in awe of natural beauty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of passionate travel experts works tirelessly to ensure every journey is seamless, safe, 
                and filled with moments that will become cherished memories.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Travel planning"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and passion for travel drives everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:shadow-lg transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind your extraordinary travel experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-300 ${hoveredMember === index ? 'opacity-80' : 'opacity-40'}`}></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-orange-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to exceptional travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real adventures
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create an unforgettable journey tailored just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get Quote
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Fully Insured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;